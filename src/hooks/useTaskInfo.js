import { useState, useEffect } from 'react';
import isEmpty from 'lodash/isEmpty';
import { initiateFileProcessing, checkTaskStatus } from '../utils/api';
import useApiRequest from './useApiRequest';

export const useTaskInfo = (trainingInputs) => {
    const [taskInfo, setTaskInfo] = useState({});
    const [fetchData, fetchingInProgress, error, setError] = useApiRequest();
  
    useEffect(() => {
        if (!error && !fetchingInProgress && isEmpty(taskInfo)) {
            console.log('initiate')
            fetchData(initiateFileProcessing, trainingInputs)
                .then(info => setTaskInfo(info));
        }
    }, [trainingInputs, fetchingInProgress, taskInfo, error, fetchData]);
    
    useEffect(() => {
        if (!error && !fetchingInProgress && !isEmpty(taskInfo) && taskInfo.status !== 'completed') {
            setTimeout(() => {
                console.log('check task status')
                fetchData(checkTaskStatus, taskInfo.task_id)
                .then(info => {
                    if(info.error){
                        setError(true)
                    } else {
                        setTaskInfo(info)
                    }
                });
            }, 20000);
        } 
    }, [taskInfo, fetchingInProgress, error, setError, fetchData]);

    return [taskInfo, setTaskInfo, error];
}