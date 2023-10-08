import TaskCard from './TaskCard';

const HistoryGrid = ({ tasks }) => {
  const sortedTasks = tasks.sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
  return (
    <div className="history-grid">
      {sortedTasks.map((task, i) => (
        <TaskCard key={i} data={task} />
      ))}
    </div>
  );
};

export default HistoryGrid;