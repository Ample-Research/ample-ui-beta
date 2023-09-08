import '../../styles/App.css';
import LoadingBar from './LoadingBar';
import Error from './Error';
import StatusImage from './StatusImage';
import OutputDisplay from './OutputDisplay';
import { useTaskInfo } from '../../hooks/useTaskInfo';
import isEmpty from 'lodash/isEmpty';

const OutputWrapper = ({ trainingInputs, setTrainingInputs }) => {
    const [taskInfo, setTaskInfo, error] = useTaskInfo(trainingInputs);

    const clear = () => {
        setTaskInfo({});
        setTrainingInputs({});
    };

    if (error) {
        return <Error clear={clear} />;
    }

    const statusText = taskInfo.status === "completed" ? "TRAINING DATA COMPLETE" : "GENERATING DATA ...";
    const loadingBarSections = isEmpty(taskInfo.section_tracker) ? [] : Object.values(taskInfo.section_tracker);
  
    return (
        <div className="container-content">
            <StatusImage status={taskInfo.status} />
            <h3>{statusText}</h3>
            {taskInfo.status && taskInfo.status !== 'completed' && <LoadingBar sections={loadingBarSections} />}
            {taskInfo.status === 'completed' && <OutputDisplay taskInfo={taskInfo} clear={clear} />}
        </div>
    );
}

export default OutputWrapper;
