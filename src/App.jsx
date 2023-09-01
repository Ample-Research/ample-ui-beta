import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AuthProvider from './components/AuthProvider';
import './styles/App.css';
import PageLayout from './components/PageLayout';
import Text from './components/Text';
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
