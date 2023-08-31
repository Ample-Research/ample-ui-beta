import '../styles/App.css';
import logo from '../assets/AmpleLogo.png'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const  Header = ({loggedIn}) => {
    

    return (
        <div className="header">
            <img className="logo" src={logo} alt="Ample logo. The word Ample in red followed by three white hexagon outlines."/>
            <button>{loggedIn ? "logout" : "login"}</button>
        </div>
    );
}

export default Header;