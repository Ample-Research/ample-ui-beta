import '../styles/App.css';
import Output from './Output';
import Input from './Input';
// import { sendData, checkStatus } from '../utils/api';
import { useState } from 'react';

const  Container = ({loggedIn}) => {
    const [trainingInputs, setTrainingInputs] = useState({})
    // const [taskInfo, setTaskInfo] = useState({})

    return (
        <article className="container">
            {!Object.values(trainingInputs).length > 0 &&
                <Input setTrainingInputs={setTrainingInputs}/>
            }
            {Object.values(trainingInputs).length > 0 &&
                <>
                    <div className="container-header">
                        <h4>{trainingInputs.title}</h4>
                        <p>{trainingInputs.file[0].name + ", " + (trainingInputs.file[0].size / 1000) + 'mb'}</p>
                    </div>
                    <Output 
                        // taskInfo={taskInfo} 
                        // setTaskInfo={setTaskInfo} 
                        trainingInputs={trainingInputs}
                        setTrainingInputs={setTrainingInputs}
                    />
                </>
            }
        </article>
    );
}

export default Container;