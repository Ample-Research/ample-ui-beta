import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MsalProvider, useMsal } from '@azure/msal-react';
import { EventType } from '@azure/msal-browser';

import { PageLayout } from './components/PageLayout';
import { Home } from './pages/Home';
import { b2cPolicies } from './authConfig';
import { compareIssuingPolicy } from './utils/claimUtils';

import './styles/App.css';

const Pages = () => {
    const { instance } = useMsal();
    useEffect(() => {
        const callbackId = instance.addEventCallback((event) => {
            if (
                (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) &&
                event.payload.account
            ) {

                if (event.payload.idTokenClaims['tfp'] === b2cPolicies.names.editProfile) {
                    // retrieve the account from initial sing-in to the app
                    const originalSignInAccount = instance
                        .getAllAccounts()
                        .find(
                            (account) =>
                                account.idTokenClaims.oid === event.payload.idTokenClaims.oid &&
                                account.idTokenClaims.sub === event.payload.idTokenClaims.sub &&
                                account.idTokenClaims['tfp'] === b2cPolicies.names.signUpSignIn
                        );

                    let signUpSignInFlowRequest = {
                        authority: b2cPolicies.authorities.signUpSignIn.authority,
                        account: originalSignInAccount,
                    };

                    // silently login again with the signUpSignIn policy
                    instance.ssoSilent(signUpSignInFlowRequest);
                }

                if (compareIssuingPolicy(event.payload.idTokenClaims, b2cPolicies.names.forgotPassword)) {
                    let signUpSignInFlowRequest = {
                        authority: b2cPolicies.authorities.signUpSignIn.authority,
                    };
                    instance.loginRedirect(signUpSignInFlowRequest);
                }
            }

            if (event.eventType === EventType.LOGIN_FAILURE) {
               if (event.error && event.error.errorMessage.includes('AADB2C90118')) {
                    const resetPasswordRequest = {
                        authority: b2cPolicies.authorities.forgotPassword.authority,
                        scopes: [],
                    };
                    instance.loginRedirect(resetPasswordRequest);
                }
            }
        });

        return () => {
            if (callbackId) {
                instance.removeEventCallback(callbackId);
            }
        };
        // eslint-disable-next-line
    }, [instance]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

const  App = ({ instance }) => {
    return (
        <MsalProvider instance={instance}>
            <PageLayout>
              <Pages />
            </PageLayout>
        </MsalProvider>
    );
}

export default App;
