import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './styles/App.css';
import React, { useEffect, useState } from 'react';
import  {firebaseConfig, uiConfig} from "./utils/firebaseconfig"
import firebase from 'firebase/compat/app';

if (!firebase.apps.length) {
    console.log("Init Firebase")
    firebase.initializeApp(firebaseConfig);
}

const App = () => {
    console.log('RENDERED')
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
          setLoggedIn(!!user);
        });
        return () => unregisterAuthObserver();
      }, []);

    return (
        <Routes>
            <Route path="/" element={<Home loggedIn={false} uiConfig={uiConfig} />} />
            <Route path="/signedIn" element={<Home loggedIn={true}/>} />
        </Routes>
    );
}

export default App;
