import React from 'react';
import InputSection from '../InputSection/InputSection';
import HistorySection from '../HistorySection/HistorySection';
import useUserHistory from '../../hooks/useUserHistory';

import '../../styles/App.css';

const  Container = ({user}) => {
    const { userHistory, isLoading, error, reload } = useUserHistory(user.uid);

    const handleFormSubmit = () => { // REFACTOR (modularize & wait to reload until request has gone through)
        reload() 
    }

    return (
    <article className="container">
      <section className="input-section">
        <InputSection handleFormSubmit={handleFormSubmit} user={user} />
      </section>
      <section className="history-section">
        <HistorySection userHistory={userHistory} isLoading={isLoading} error={error} />
      </section>
    </article>
    );
}

export default Container;