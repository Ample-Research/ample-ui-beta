import './styles/App.css';
import check from '../assets/check.svg';
import LoadingBar from './LoadingBar';

const  Output = ({taskInfo, setTaskInfo, trainingInputs, setTrainingInputs}) => {
   const tags = taskInfo.tags.map(t => <p key={'tag-' + t}  className="data-tag">{t}</p>)
   
   const clear = () => {
        setTaskInfo({})
        setTrainingInputs({})
    }

    return (
        <div>
            <p>{trainingInputs.title}</p>
            <p>{trainingInputs.fileName + ", " + trainingInputs.fileSize}</p>
            {taskInfo.status === "complete" &&
                <img alt="white check mark" src={check}/>
            }
            <h4>{taskInfo.status === "complete" ? "TRAINING DATA COMPLETE" : "GENERATING DATA ..."}</h4>
            <LoadingBar/>
            {taskInfo.status === "complete" && 
                <>
                    <div>
                        <button className="download-data-button">DOWNLOAD</button>
                        <button className="generate-another-button" onClick={clear}>{"GENERATE ANOTHER ->"}</button>
                    </div>
                    <div>
                        <p>Q&A pairs: <strong>{taskInfo.pairs}</strong></p>
                        <div className="data-tags">{"tags:" + tags}</div>
                    </div>
                </>
            }
        </div>
    );
}

export default Output;