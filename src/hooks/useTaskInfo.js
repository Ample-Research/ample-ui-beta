import { useState, useEffect, useContext } from 'react';
import isEmpty from 'lodash/isEmpty';
import { initiateFileProcessing, checkTaskStatus } from '../utils/api';
import { addTaskToUser, updateTaskForUser } from '../utils/firestore';
import useApiRequest from './useApiRequest';
import AuthContext from '../components/Auth/AuthContext';

export const useTaskInfo = (trainingInputs, storedTask, setStoredTask) => {
    const [taskInfo, setTaskInfo] = useState({});
    const [fetchData, fetchingInProgress, error, setError] = useApiRequest();

    const user = useContext(AuthContext);

    useEffect(() => {
        if (!error && !fetchingInProgress && isEmpty(taskInfo) && isEmpty(storedTask)) {
            fetchData(initiateFileProcessing, trainingInputs)
            .then(info => {
                setTaskInfo(info)
                setStoredTask(info)
                localStorage.setItem('lastTask', JSON.stringify(info))
                addTaskToUser(user.uid, info)
            });
        }
    }, [trainingInputs, fetchingInProgress, taskInfo, error, fetchData, setStoredTask, storedTask, user]);
    
    useEffect(() => {
        if (!error && !fetchingInProgress && (!isEmpty(taskInfo) || !isEmpty(storedTask))){
            if(taskInfo.status !== 'completed' || (isEmpty(taskInfo) && !isEmpty(storedTask))){
                    setTimeout(() => {
                    fetchData(checkTaskStatus, isEmpty(taskInfo) ? storedTask.task_id : taskInfo.task_id)
                    .then(info => {
                        if(info.error_message){
                            setError(info.error_message)
                            localStorage.removeItem('lastTask');
                            setStoredTask({})
                            updateTaskForUser(user.uid, info)
                        } else {
                            setTaskInfo(info);
                            setStoredTask(info);
                            localStorage.setItem('lastTask', JSON.stringify(info));
                            if(info.status === 'completed'){
                                updateTaskForUser(user.uid, info)
                            }
                        }
                    });
                }, 20000);
            }
        } 
    }, [taskInfo, fetchingInProgress, error, setError, fetchData, setStoredTask, user, storedTask]);

    return [taskInfo, setTaskInfo, error];
}