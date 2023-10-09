import { useState, useEffect } from 'react';
import { getTasksForUser, deleteTaskForUser } from '../utils/firestore';
import useTaskStatus from './useTaskStatus';


const useUserHistory = (userId) => {
  const { fetchTaskStatus } = useTaskStatus(userId);
  const [userHistory, setUserHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("Fetching User History....");
    setIsLoading(true);
    try {
      const history = await getTasksForUser(userId);
      setUserHistory(history);
      setIsLoading(false);
      
      // Fetch individual task details lazily
      history.forEach(task => {
        if ((task.status !== 'complete' || !task.download_link || task.completion_percentage < 1)  && !task.error_message) {
          fetchSingleTask(task.task_id);
        }
      });
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  const fetchSingleTask = async (task_id) => {
    console.log("Fetching Task....")
    try {
      const task_data = await fetchTaskStatus(task_id)
      if (task_data) {
        setUserHistory(prevState => {
          const taskExists = prevState.some(task => task.task_id === task_data.task_id);
          if (taskExists) {
            return prevState.map(task => task.task_id === task_data.task_id ? task_data : task);
          } else {
            return [...prevState, task_data];
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const reload = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { userHistory, isLoading, error, fetchSingleTask, reload };
};

export default useUserHistory;
