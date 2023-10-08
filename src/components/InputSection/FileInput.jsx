import React from 'react';

import { UploadSVG, UploadSuccessSVG } from '../../icons/upload';

const FileInput = ({ register, file }) => {
  const allowed_types = ".csv, .docx, .pdf, .txt";

  return (
    <div className="file-input-section">
      <label className="file-input-label">
        <div className="svg-container">
          {file && file.length > 0 ? 
            <>
              <UploadSuccessSVG/>
              <br/>
              <span id="file-input-label-filename">{file[0].name}</span>
            </>
            :
            <>
              <UploadSVG /> 
              <br/> 
              UPLOAD FILE
              <br/> 
              <span id="file-input-label-small">{allowed_types}</span>
            </>
          }
          <input 
                type="file" 
                id="hiddenFileInput"
                required={true} 
                style={{ display: 'none' }}
                {...register("file")} 
                accept={allowed_types}
          />
        </div>

      </label>
    </div>
  );
};

export default FileInput;
