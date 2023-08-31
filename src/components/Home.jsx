import React, {useEffect} from 'react';
import '../styles/App.css';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const  Home = ({loggedIn, uiConfig}) => {

    return (
        <div className="App">
          <Header loggedIn={loggedIn} />
          {!loggedIn && 
            <div>
              <p>Ample AI is currently in BETA.</p>
              <p>Reach out if you would like to join our community of users.</p>
              <a href="ample-research.com"><button>GET IN TOUCH</button></a>
              <p>If you are already a BETA user, please sign-in:</p>
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
          }
          {loggedIn && 
            <section className="main-content">
              <Container loggedIn={true} />
            </section>
          }
          <Footer />
        </div>
      );
    }

export default Home;