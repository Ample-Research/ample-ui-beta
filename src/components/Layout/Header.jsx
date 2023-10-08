import '../../styles/App.css'
import logo from '../../assets/Dark-Mode-Logo.png'
import { logout } from '../../utils/auth';

const  Header = ({user}) => { // REFACTOR -- See wireframes: Socials, More Rich Hamburger Dropown

    return (
        <div className="header">
            <a href="https://ample-research.app/"><img className="logo" src={logo} alt="Ample logo. The word Ample in red followed by three white hexagon outlines."/></a>
            {user &&
                <button className="transparent-button button" onClick={logout}>LOGOUT</button>
            }
        </div>
    );
}

export default Header;