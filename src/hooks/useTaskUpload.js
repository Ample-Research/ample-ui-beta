import { useState, useCallback } from 'react';
import { initiateFileProcessing } from '../utils/api';
import { addTaskToUser } from '../utils/firestore';
import useApiRequest from './useApiRequest';


const useTaskUpload = (userId) => {
  const [fetchData, fetchingInProgress, error, setError] = useApiRequest();
  
  const uploadNewTask = useCallback(
    async (data) => {
      try {
        const {task_id} = await fetchData(initiateFileProcessing, data, userId);
        await addTaskToUser(userId, data, task_id);
        return task_id;
      } catch (err) {
        setError(err);
        throw err;
      }
    },
    [fetchData, setError]
  );

  return {
    uploadNewTask,
    isUploading: fetchingInProgress,
    uploadError: error,
  };
};

export default useTaskUpload;