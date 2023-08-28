import './styles/App.css';
import Output from './Output';
import Input from './Input';
import SignUp from './SignUp';
import { useState } from 'react';

const  Container = ({loggedIn}) => {
    const [trainingInputs, setTrainingInputs] = useState({})
    const [taskInfo, setTaskInfo] = useState({})

    return (
        <article className="container">
            {!loggedIn &&
                <SignUp/>
            }
            {loggedIn && !Object.values(trainingInputs).length &&
                <Input setTrainingInputs={setTrainingInputs}/>
            }
            {loggedIn && Object.values(trainingInputs).length &&
                <Output 
                    taskInfo={taskInfo} 
                    setTaskInfo={setTaskInfo} 
                    trainingInputs={trainingInputs}
                    setTrainingInputs={setTrainingInputs}
                />
            }
        </article>
    );
}

export default Container;