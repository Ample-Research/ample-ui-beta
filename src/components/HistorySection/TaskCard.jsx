const TaskCard = ({ data }) => {
  return (
    <div className="task-card">
      <h3>{data.title}</h3>
      <p>Status: {data.status}</p>
      <p>Completion: {Math.round(data.completion_percentage * 100)}%</p>
      <p>Date Created: {new Date(data.date_created).toLocaleDateString()}</p>
      {data.download_link && <a href={data.download_link} target="_blank" rel="noopener noreferrer">DOWNLOAD RESULTS</a>}
    </div>
  );
};

export default TaskCard;