import '../../styles/App.css';
import { formatFileSize } from '../../utils/dataTransformations';
import isEmpty from 'lodash/isEmpty';

const  ContainerHeader = ({trainingInputs, storedTask}) => {

    let data = [];
    if(!isEmpty(storedTask)){
        data = [storedTask.title, storedTask.filename, storedTask.file_size_in_bytes]
    } else {
        data = [trainingInputs.title, trainingInputs.file[0].name, trainingInputs.file[0].size]
    }

    return (
        <div className="container-header">
            <h4 className="file-name">{data[0]}</h4>
            <p className="file-info">{data[1] + ", " + formatFileSize(data[2])}</p>
        </div>
    );
}

export default ContainerHeader;