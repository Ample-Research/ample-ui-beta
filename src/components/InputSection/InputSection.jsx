import React, { useState } from 'react';
import TitleInput from './TitleInput';
import FileInput from './FileInput';
import TypeSelector from './TypeSelector';
import PromptSelector from './PromptSelector';

const InputSection = ({ handleFormSubmit, user }) => { 
  const [taskType, setTaskType] = useState(null);
  const [isFormReady, setIsFormReady] = useState(false);
  
  // Logic to validate form and enable "Start" button
  const validateForm = () => { // REFACTOR -- not implemented... Please see "../InputForm-DEPRECATED/" for old logic
    // Validation logic
  };
  
  return (
    <div className="input-section">
      <TitleInput />
      <div className="left-section">
        <FileInput />
        <TypeSelector setTaskType={setTaskType} />
        <PromptSelector taskType={taskType} user={user} />
      </div>
      <button disabled={!isFormReady} onClick={handleFormSubmit}>Start</button>
    </div>
  );
};

export default InputSection;