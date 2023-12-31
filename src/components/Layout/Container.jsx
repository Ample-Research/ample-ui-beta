import React from 'react';
import InputSection from '../InputSection/InputSection';
import HistorySection from '../HistorySection/HistorySection';
import useUserHistory from '../../hooks/useUserHistory';
import useTaskUpload from '../../hooks/useTaskUpload';

import '../../styles/App.css';

const  Container = ({user}) => {
    const { userHistory, isLoading, error, fetchSingleTask } = useUserHistory(user.uid);
    const { uploadNewTask } = useTaskUpload(user.uid);

    const handleFormSubmit = async (data) => { // Data from <InputSection>
      const task_id = await uploadNewTask(data); 
      const task_data  = await fetchSingleTask(task_id)
    }

    return (
    <article className="container">
      <section className="input-section-container">
        <InputSection handleFormSubmit={handleFormSubmit} user={user} />
      </section>
      <section className="history-section-container">
        <HistorySection userHistory={userHistory} isLoading={isLoading} error={error} />
      </section>
    </article>
    );
}

export default Container;