import '../styles/App.css';
import check from '../assets/check.svg';
import LoadingBar from './LoadingBar';
import MetaData from './MetaData';
import { useEffect, useState } from 'react';
import { sendData, checkStatus } from '../utils/api';

const  Output = ({trainingInputs, setTrainingInputs}) => {
   const [taskInfo, setTaskInfo] = useState({})
   const [displayOutputs, setDisplayOutputs] = useState(false)
//    const tags = () => taskInfo.tags.map(t => <p key={'tag-' + t}  className="data-tag">{t}</p>)
   
   const clear = () => {
        setTaskInfo({})
        setTrainingInputs({})
    }

    useEffect(() => {
        let isCancelled = false; // To handle component unmounts
      
        const fetchData = async () => {
          if(Object.values(trainingInputs).length && !Object.values(taskInfo).length){
            const info = await sendData(trainingInputs);
            if (!isCancelled) {
              setTaskInfo(info);
            }
          } else if (Object.values(taskInfo).length && taskInfo.status !== 'complete'){
            const info = await checkStatus(taskInfo.id);
            if (!isCancelled) {
              setTaskInfo(info);
            }
          } else if (taskInfo.status === 'complete'){
            setTimeout(() => {
              if (!isCancelled) {
                setDisplayOutputs(true);
              }
            }, 2000);
          }
        };
      
        fetchData();
      
        return () => {
          isCancelled = true; // Clean up to avoid setting state on an unmounted component
        };
      }, [trainingInputs, taskInfo]);
    return (
        <div>
            {taskInfo.status === "complete" && 
                <img className="check-mark" alt="white check mark" src={check}/>
            }
            <h3>{taskInfo.status === "complete" ? "TRAINING DATA COMPLETE" : "GENERATING DATA ..."}</h3>
            {taskInfo.status && !displayOutputs &&
                <LoadingBar taskInfo={taskInfo}/>
            }
            {displayOutputs && 
                <>
                    <div>
                        <button className="download-data-button">DOWNLOAD</button>
                        <button className="generate-another-button" onClick={clear}>{"GENERATE ANOTHER ->"}</button>
                    </div>
                    <MetaData taskInfo={taskInfo}/>
                </>
            }
        </div>
    );
}

export default Output;