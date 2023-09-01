import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
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