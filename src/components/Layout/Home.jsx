import '../../styles/App.css'
import AuthComponent from '../Auth/SignIn';
import ProtectedComponent from '../Auth/ProtectedComponent';
import AuthContext from '../Auth/AuthContext';
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