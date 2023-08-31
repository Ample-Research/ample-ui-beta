import firebase from 'firebase/compat/app';

export const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "ample-ai.firebaseapp.com",
    projectId: "ample-ai",
    storageBucket: "ample-ai.appspot.com",
    messagingSenderId: "1087546384516",
    appId: "1:1087546384516:web:8899a781c81db8b51122d1",
    measurementId: "G-E77383ZXPN"
  };

export const uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        return true;
      },
      uiShown: function() {
        document.getElementById('loader').style.display = 'none';
      }
    },
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: '/',
    // Privacy policy url.
    privacyPolicyUrl: '/'
  };