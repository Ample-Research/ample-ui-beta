import '../../styles/App.css';
import { getTasksForUser } from '../../utils/firestore';
import { useContext, useState } from 'react';
import AuthContext from '../Auth/AuthContext';

const  ContainerFooter = ({setHistoryView, setUserHistory}) => {
    const [hasHistory, setHasHistory] = useState(true)

    const user = useContext(AuthContext);

    const seeHistory = async () => {
        const history = await getTasksForUser(user.uid);
        setUserHistory(history);
        if(history.length > 0){
            setHistoryView(true)
        } else {
            setHasHistory(false)
        }
    }

    return (
        <div className="container-footer">
            <button className="button" onClick={seeHistory}>{hasHistory ? "See All Task History" : "You have no history"}</button>
        </div>
    );
}

export default ContainerFooter;