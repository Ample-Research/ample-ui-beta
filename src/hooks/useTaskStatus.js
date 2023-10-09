import { useCallback } from 'react';
import { checkTaskStatus } from '../utils/api';
import { updateTaskForUser } from '../utils/firestore';
import useApiRequest from './useApiRequest';


const useTaskStatus = (userId) => {
  const [fetchData, fetchingInProgress, error] = useApiRequest();
  
  const fetchTaskStatus = useCallback(
    async (taskId) => {
      try {
        const data = await fetchData(checkTaskStatus, taskId, userId);
        await updateTaskForUser(userId, data);
        return data;
      } catch (err) {
        console.log(err)
      }
    },
    [fetchData, userId]
  );

  return {
    fetchTaskStatus,
    isUploading: fetchingInProgress,
    uploadError: error,
  };
};

export default useTaskStatus;