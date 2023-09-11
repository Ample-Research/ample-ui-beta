// FirebaseUI
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { useEffect } from 'react';
// import auth from './AuthService';
import { auth } from '../../utils/firebaseConfig';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    // Action if the user is authenticated successfully
                },
                uiShown: function() {
                    // This is what should happen when the form is full loaded. In this example, I hide the loader element.
                    document.getElementById('loader').style.display = 'none';
                }
            },
            signInFlow: 'popup',
            signInSuccessUrl: '/', // This is where should redirect if the sign in is successful.
            signInOptions: [ // This array contains all the ways an user can authenticate in your application. For this example, is only by email.
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: true,
                    disableSignUp: {
                        status: true
                    }
                },
                {
                  provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                  disableSignUp: {
                        status: true
                  }
                }
            ],
            tosUrl: '/privacypolicy', // URL to you terms and conditions.
            privacyPolicyUrl: function() { // URL to your privacy policy
                window.location.assign('/termsOfUse');
            }
        });
    }, []);

    return (
        <div className="sign-in-container">
            <div id="firebaseui-auth-container"></div>
            <div id="loader" className="text-center">Loading form</div>
        </div>
    )
}