import { DownloadSVG } from '../../icons/download';

const TaskCard = ({ data }) => {
  return (
    <div className="task-card">
      <h3 className="task-card-title">{data.title}</h3>
      {data.status === "complete" ? (
        <p className="task-card-status">Complete</p>
      ) : (
      data.error ? (
        <p className="task-card-status">Error</p>
        ) : (
        <p className="task-card-completion">{Math.round(data.completion_percentage * 100)}%</p>
        )
      )}
      {data.download_link && 
        <a className="task-card-download" href={data.download_link} rel="noopener noreferrer">
          <DownloadSVG />
        </a>
      }
      <p className="task-card-date">{new Date(data.date_created).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskCard;
