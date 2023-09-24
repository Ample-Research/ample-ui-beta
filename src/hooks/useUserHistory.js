import { useState, useEffect } from 'react';
import { getTasksForUser } from '../utils/firestore';
import useTaskStatus from './useTaskStatus';

const useUserHistory = (userId) => {
  const { fetchTaskStatus } = useTaskStatus(userId);
  const [userHistory, setUserHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("Fetching User History....")
    try {
      setIsLoading(true);
      const history = await getTasksForUser(userId);

      const tasksPromises = history.map(task => { // Fetch the status for tasks that are not complete.
        if ((task.status !== 'complete' || !task.download_link || task.completion_percentage < 1)  && !task.error_message) {
          return fetchTaskStatus(task.task_id)
            .then(updatedTask => ({...task, ...updatedTask}))
            .catch(err => {
              console.error('Could not fetch status for task:', err);
              return task;
            });
        }
        return Promise.resolve(task);
      });

      const updatedHistory = await Promise.all(tasksPromises);

      setUserHistory(history);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const reload = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { userHistory, isLoading, error, reload };
};

export default useUserHistory;
