import '../../styles/App.css';
import { formatFileSize } from '../../utils/dataTransformations';

const  ContainerHeader = ({trainingInputs}) => {

    return (
        <div className="container-header">
            <h4 className="file-name">{trainingInputs.title}</h4>
            <p className="file-info">{trainingInputs.file[0].name + ", " + formatFileSize(trainingInputs.file[0])}</p>
        </div>
    );
}

export default ContainerHeader;