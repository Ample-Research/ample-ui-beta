import { useState } from 'react';

const useApiRequest = () => {
    const [fetchingInProgress, setFetchingInProgress] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchData = async (apiFunction, params) => {
      setFetchingInProgress(true);
      try {
        const result = await apiFunction(params);
        setError(null);
        setFetchingInProgress(false);
        return result;
      } catch (err) {
        setError(err.message);
        setFetchingInProgress(false);
        throw err;  
      }
    };
  
    return [fetchData, fetchingInProgress, error, setError];
  };

  export default useApiRequest;