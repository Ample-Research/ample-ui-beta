const  TrainingTask = ({data, setHistoryView, setStoredTask}) => {

    const selectTask = () => {
        if(!data.error_message){
            setStoredTask(data)
            setHistoryView(false)
        }
    }

    return (
        <div onClick={selectTask} className="training-task-list-item">
            <h3 className="history-item-title">{data.title + ', ' + data.filename}</h3>
            {data.status &&
                <p className={data.error_message ? 'failed' : "task-status-ok"}><strong>{data.error_message ? 'FAILED' : data.status}</strong></p>
            }
        </div>
    );
}

export default TrainingTask;