import '../styles/App.css';
import check from '../assets/check.svg';
import LoadingBar from './LoadingBar';
import MetaData from './MetaData';
import React, { useEffect, useState } from 'react';

const  Output = ({trainingInputs, setTrainingInputs}) => {
   const [taskInfo, setTaskInfo] = useState({})
   const [displayOutputs, setDisplayOutputs] = useState(false)
   const tags = () => taskInfo.tags.map(t => <p key={'tag-' + t}  className="data-tag">{t}</p>)
   
   const clear = () => {
        setTaskInfo({})
        setTrainingInputs({})
    }

    useEffect(() => {
        if(Object.values(trainingInputs).length && !Object.values(taskInfo).length){
            const info = sendData(trainingInputs);
            setTaskInfo(info);
            console.log(info)
            // setTaskInfo({
            //     id: 'id',
            //     status: 'complete',
            //     sections: [
            //         {status: 'complete'},
            //         {status: 'complete'},
            //         {status: 'complete'},
            //         {status: 'complete'}
            //     ],
            //     pairs: 200,
            //     tags: ['funny', 'terrible', 'bla bla bla']
            // })
            // console.log('send training inputs', trainingInputs)
        } else if (Object.values(taskInfo).length && taskInfo.status !== 'complete'){
            const info = checkStatus(taskInfo.id);
            setTaskInfo(info);
            console.log(info)
            // console.log('check task status', taskInfo)
        } else if  (taskInfo.status === 'complete'){
            setTimeout(() => {
                setDisplayOutputs(true)
              }, "2000");
        }
    },[trainingInputs, setTaskInfo, taskInfo, setDisplayOutputs])

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