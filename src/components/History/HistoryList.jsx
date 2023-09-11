import TrainingTask from './TrainingTask';

const  HistoryList = ({userHistory, setHistoryView, setStoredTask}) => {
    const tasks = userHistory?.map((t,i) => <TrainingTask key={`${i}-history`} setHistoryView={setHistoryView} setStoredTask={setStoredTask} data={t}/>)

    return (
        <div className="history-list">
                {tasks}
        </div>
    );
}

export default HistoryList;