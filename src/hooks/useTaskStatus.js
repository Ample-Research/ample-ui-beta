import { useCallback } from 'react';
import { checkTaskStatus } from '../utils/api';
import { updateTaskForUser } from '../utils/firestore';
import useApiRequest from './useApiRequest';


const useTaskStatus = (userId) => {
  const [fetchData, fetchingInProgress, error, setError] = useApiRequest();
  
  const fetchTaskStatus = useCallback(
    async (taskId) => {
      try {
        const data = await fetchData(checkTaskStatus, taskId, userId);
        await updateTaskForUser(userId, data);
        return data;
      } catch (err) {
        setError(err);
        throw err;
      }
    },
    [fetchData, setError]
  );

  return {
    fetchTaskStatus,
    isUploading: fetchingInProgress,
    uploadError: error,
  };
};

export default useTaskStatus;