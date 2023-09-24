import React from 'react';

const FileInput = ({ register }) => { // REFACTOR - Please see "../InputForm-DEPRECATED/FileInput.jsx" for old logic
  const allowed_types = ".csv, .docx, .pdf, .txt"
  return (
    <div className="file-input-section">
      <label>Upload File: {allowed_types}</label>
      <input 
        type="file" 
        required={true} 
        className="file-input"
        {...register("file")} 
        accept={allowed_types}
      />
    </div>
  );
};

export default FileInput;
