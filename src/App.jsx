import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import './styles/App.css';

const  App = () => {
    console.log('RENDERED')

    return (
        <Routes>
            <Route path="/" element={<Home loggedIn={false}/>} />
            <Route path="/signedIn" element={<Home loggedIn={true}/>} />
        </Routes>
    );
}

export default App;
