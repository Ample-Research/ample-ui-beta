import './styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

const  Home = () => {
    return (
        <div className="App">
            <Header loggedIn={true}/>
            <section className="main-content">
                <Container loggedIn={true}/>
            </section>
            <Footer />
        </div>>
    );
}

export default Home;