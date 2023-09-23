import '../../styles/App.css';
import LoadingBar from './LoadingBar';
import Error from './Error';
import StatusImage from './StatusImage';
import OutputDisplay from './OutputDisplay';
import { useTaskInfo } from '../../hooks/useTaskInfo';

const OutputWrapper = ({ storedTask, setStoredTask, trainingInputs, setTrainingInputs}) => {
    const [taskInfo, setTaskInfo, error] = useTaskInfo(trainingInputs, storedTask, setStoredTask);

    const clear = () => {
        localStorage.removeItem('lastTask');
        setStoredTask({});
        setTaskInfo({});
        setTrainingInputs({});
    };

    if (error) {
        return <Error clear={clear} />;
    }

    const statusText = taskInfo.status === "completed" ? "TRAINING DATA COMPLETE" : "LOADING ...";
  
    return (
        <div className="container-content">
          <div className="loading-info">
            <StatusImage status={taskInfo.status} />
            <h3>{statusText}</h3>
            {taskInfo.status !== 'completed' && <LoadingBar taskInfo={taskInfo} />}
          </div>
            {taskInfo.status === 'completed' && Object.keys(taskInfo).length > 10 && 
              <OutputDisplay taskInfo={taskInfo} clear={clear} />
            }
        </div>
    );
}

export default OutputWrapper;
