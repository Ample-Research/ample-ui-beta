import '../../styles/App.css';
import { formatFileSize } from '../../utils/dataTransformations';

const  ContainerHeader = ({trainingInputs}) => {

    return (
        <div className="container-header">
            <h4>{trainingInputs.title}</h4>
            <p>{trainingInputs.file[0].name + ", " + formatFileSize(trainingInputs.file[0])}</p>
        </div>
    );
}

export default ContainerHeader;