import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import AuthContext from './AuthContext';
import { useContext } from 'react';

const  PageLayout = ({children}) => {
    const user = useContext(AuthContext);

    return <div className="App">
                <Header user={user}/>
                <section className="main-content">
                    {children}
                </section>
                <Footer />
            </div>
}

export default PageLayout;