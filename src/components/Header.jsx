import '../styles/App.css';
import logo from '../assets/AmpleLogo.png'
import { getAuth, signOut } from "firebase/auth";

const  Header = ({user}) => {
    const auth = getAuth();

const logout = () => 
    signOut(auth).then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });

    return (
        <div className="header">
            <a href="https://www.ample-research.com/"><img className="logo" src={logo} alt="Ample logo. The word Ample in red followed by three white hexagon outlines."/></a>
            {user &&
                <button onClick={logout}>logout</button>
            }
        </div>
    );
}

export default Header;