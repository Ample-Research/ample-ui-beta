import check from '../../assets/check.svg';

const StatusImage = ({ status }) => {
    if (status === "completed") {
        return <img className="check-mark" alt="white check mark" src={check} />;
    }
    return null;
};

export default StatusImage;