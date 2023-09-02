import { Route, Routes } from 'react-router-dom';
import Home from './components/Layout/Home';
import AuthProvider from './components/Auth/AuthProvider';
import './styles/App.css';
import PageLayout from './components/Layout/PageLayout';
import Text from './components/Layout/Text';
import { privacyPolicy } from './data/privacyPolicy';
import { termsOfUse } from './data/termsOfUse';

const  App = () => {

    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<PageLayout><Home/></PageLayout>} />
                <Route path="/privacypolicy" element={<PageLayout><Text content={privacyPolicy}/></PageLayout>} />
                <Route path="/termsofuse" element={<PageLayout><Text content={termsOfUse}/></PageLayout>} />
            </Routes>
        </AuthProvider>
    );
}

export default App;
