# ample-ui-beta

**to run**

Clone, `cd`, run `npm install`, then `npm start`

**authorization via Azure Active Directory B2C**

The FE currently allows anyone to create an account and login via a dummy Azure Active Directory B2C from an Azure tutorial. We can reconfigure the app to connect to our own Azure tenant. 

On the frontend, interaction with Azure AD B2C is handled with [microsoft-authentication-library-for-js](https://github.com/AzureAD/microsoft-authentication-library-for-js). If you want to see the user authentication info we're receiving, you can render the `UserDataDisplay` component as a child of `AuthenticatedTemplate` in the `Home` component.
