import '../../styles/App.css';
import OutputWrapper from '../TrainingDataOutput/OutputWrapper';
import InputForm from '../InputForm/InputForm';
import { useEffect, useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import ContainerHeader from './ContainerHeader';
import ContainerFooter from './ContainerFooter';
import HistoryList from '../History/HistoryList';

const  Container = () => {
    const [userHistory, setUserHistory] = useState([])
    const [historyView, setHistoryView] = useState(false)
    const [trainingInputs, setTrainingInputs] = useState({})
    const [storedTask, setStoredTask] = useState({})

    useEffect(() => {
        const lastTask = localStorage.getItem("lastTask");
        if (lastTask) {
            const task = JSON.parse(lastTask);
            setStoredTask(task);
        } 
    }, []);

    return (
        <article className="container">
            {!historyView && isEmpty(trainingInputs) && isEmpty(storedTask) &&
                <>
                    <InputForm setStoredTask={setStoredTask} setTrainingInputs={setTrainingInputs}/>
                    <ContainerFooter setHistoryView={setHistoryView} setUserHistory={setUserHistory} userHistory={userHistory}/>
                </>
            }
            {(!isEmpty(trainingInputs) || !isEmpty(storedTask)) && !historyView &&
                <>
                    <ContainerHeader storedTask={storedTask} trainingInputs={trainingInputs} />
                    <OutputWrapper 
                        storedTask={storedTask}
                        setStoredTask={setStoredTask}
                        trainingInputs={trainingInputs}
                        setTrainingInputs={setTrainingInputs}
                    />
                    <ContainerFooter setHistoryView={setHistoryView} setUserHistory={setUserHistory} userHistory={userHistory}/>
                </>
            }
            {historyView &&
                <HistoryList userHistory={userHistory} setUserHistory={setUserHistory} setHistoryView={setHistoryView} setStoredTask={setStoredTask}/>
            }
        </article>
    );
}

export default Container;