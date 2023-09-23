import { useState, useEffect } from 'react';
import { getTasksForUser } from '../utils/firestore';

const useUserHistory = (userId) => {
  const [userHistory, setUserHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("Fetching User History....")
    try {
      setIsLoading(true);
      const history = await getTasksForUser(userId);
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
