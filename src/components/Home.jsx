import React from 'react';
import '../styles/App.css';
import AuthComponent from './SignIn';
import ProtectedComponent from './ProtectedComponent';
import AuthContext from './AuthContext';
import { useContext } from 'react';

const  Home = () => {
    const user = useContext(AuthContext);

    return <>
                {!user &&
                    <AuthComponent />
                }
                <ProtectedComponent user={user}/>
            </>
}

export default Home;