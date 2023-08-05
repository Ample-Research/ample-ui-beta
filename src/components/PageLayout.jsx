import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { NavigationBar } from './NavigationBar';

export const PageLayout = (props) => {
    return (
        <>
            <NavigationBar />
            <div style={{backgroundColor: '#1E1E1E'}}>
                <br />
                <UnauthenticatedTemplate>
                    <div style={{ height: '72vh' }}>
                        <h3 style={{color: "white"}}>
                            <center>Welcome to Ample AI BETA</center>
                        </h3>
                        <p style={{color: "white"}}><center>Sign in to test our service as a beta user</center></p>
                    </div>
</UnauthenticatedTemplate>
                <br />
                <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
                    {props.children}
                </div>
                <br />
            </div>
            {/* <AuthenticatedTemplate> */}
                <footer style={{borderTop: "1px solid #DC3248", padding: "5px", backgroundColor: "#1E1E1E", color: "white"}}>
                    <p>social media and contact info goes here</p>
                </footer>
            {/* </AuthenticatedTemplate> */}
        </>
    );
};
