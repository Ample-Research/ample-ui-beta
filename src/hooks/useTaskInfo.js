import { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { initiateFileProcessing, checkTaskStatus } from '../utils/api';
import useApiRequest from './useApiRequest';

export const useTaskInfo = (trainingInputs) => {
    const [taskInfo, setTaskInfo] = useState({});
    const [fetchData, fetchingInProgress, error, setError] = useApiRequest();
  
    useEffect(() => {
        if (!error && !fetchingInProgress && isEmpty(taskInfo)) {
            fetchData(initiateFileProcessing, trainingInputs)
                .then(info => setTaskInfo(info));
        }
    }, [trainingInputs, fetchingInProgress, taskInfo, error, fetchData]);
    
    useEffect(() => {
        if (!error && !fetchingInProgress && !isEmpty(taskInfo) && taskInfo.status !== 'completed') {
            setTimeout(() => {
                fetchData(checkTaskStatus, taskInfo.task_id)
                .then(info => {
                    if(info.error_message){
                        setError(info.error_message)
                    } else {
                        setTaskInfo(info)
                    }
                });
            }, 20000);
        } 
    }, [taskInfo, fetchingInProgress, error, setError, fetchData]);

    return [taskInfo, setTaskInfo, error];
}