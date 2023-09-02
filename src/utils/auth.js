import firebase from "firebase/compat/app";
import { getAuth, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "ample-ai.firebaseapp.com",
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

  
  export const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = getAuth();

  export const logout = () => 
    signOut(auth).then(() => {
  }).catch((error) => {
      console.log(error)
  });
