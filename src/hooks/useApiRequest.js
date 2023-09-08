import { useContext, useState } from 'react';
import AuthContext from '../components/Auth/AuthContext';

const useApiRequest = () => {
    const [fetchingInProgress, setFetchingInProgress] = useState(false);
    const [error, setError] = useState(null);

    const user = useContext(AuthContext);
  
    const fetchData = async (apiFunction, params) => {
      setFetchingInProgress(true);
      try {
        const result = await apiFunction(params, user.uid);
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