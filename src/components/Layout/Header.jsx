import '../../styles/App.css'
import logo from '../../assets/ample-logo.png'
import { logout } from '../../utils/auth';

const  Header = ({user}) => {

    return (
        <div className="header">
            <a href="https://www.ample-research.com/"><img className="logo" src={logo} alt="Ample logo. The word Ample in red followed by three white hexagon outlines."/></a>
            {user &&
                <button className="transparent-button button" onClick={logout}>LOGOUT</button>
            }
        </div>
    );
}

export default Header;