const TaskCard = ({ data }) => {
  return (
    <div className="task-card">
      <h3>{data.title}</h3>
      <p>Status: {data.status}</p>
      <p>Completion: {data.completion_percentage}%</p>
      <p>Date Created: {new Date(data.date_created).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;