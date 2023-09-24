import React from 'react';
import InputSection from '../InputSection/InputSection';
import HistorySection from '../HistorySection/HistorySection';
import useUserHistory from '../../hooks/useUserHistory';
import useTaskUpload from '../../hooks/useTaskUpload';

import '../../styles/App.css';

const  Container = ({user}) => {
    const { userHistory, isLoading, error, reload } = useUserHistory(user.uid);
    const { uploadNewTask } = useTaskUpload(user.uid);

    const handleFormSubmit = async (data) => { // Fires w/ data from InputSection
      const task_id = await uploadNewTask(data); 
      console.log(task_id) 
      await reload()
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