import '../../styles/App.css';
import uploadIcon from '../../assets/upload-icon.svg'
import checkIcon from '../../assets/check.svg'
import { formatFileSize } from '../../utils/dataTransformations';

const  FileInput = ({data, register, file}) => {

    return (
        <div className="file-input-section">
            <label className="upload-btn-wrapper">
                <img className={file && file[0] ? "upload-success-icon" : "upload-icon"} src={file && file[0] ? checkIcon : uploadIcon} alt={file ? "check icon" : "upload icon"}/>
                <input 
                    required={data.required} 
                    className={data.className}
                    {...register(data.registerName)} 
                    type="file" 
                />
            </label>
            <div className="file-upload-labels">
                <span className="upload-label">{file && file[0] ? 'FILE UPLOADED' : data.label}</span>
                <span className="upload-help-text">{file && file[0] ? file[0].name + ', ' + formatFileSize(file[0].size) : data.allowedFiles}</span>
            </div>
        </div>
    );
}

export default FileInput;