import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TitleInput from './TitleInput';
import FileInput from './FileInput';
import TypeSelector from './TypeSelector';
import PromptSelector from './PromptSelector';

const InputSection = ({ handleFormSubmit, user }) => { 
  const { register, handleSubmit, watch } = useForm();
  const uploadedFile = watch("file");

  const onSubmit = (data) => {
    console.log(data)
    handleFormSubmit(data);
  };

  return (
    <form className="input-section-form" onSubmit={handleSubmit(onSubmit)}>
      <TitleInput register={register} />
      <div className="lower-form-section">
        <FileInput register={register} file={uploadedFile} />
        <TypeSelector register={register} />
        <div className="lower-right-form-section">
          <PromptSelector register={register} />
          <button className="begin-data-gen-btn" type="submit">Begin Data Extraction</button>
        </div>
      </div>
    </form>
  );
};

export default InputSection;