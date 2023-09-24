import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import TitleInput from './TitleInput';
import FileInput from './FileInput';
import TypeSelector from './TypeSelector';
import PromptSelector from './PromptSelector';

const InputSection = ({ handleFormSubmit, user }) => { 
  const { register, handleSubmit, watch } = useForm();
  const taskType = watch('task_type');

  const onSubmit = (data) => {
    console.log(data)
    handleFormSubmit(data);
  };

  return (
    <form className="input-section" onSubmit={handleSubmit(onSubmit)}>
      <TitleInput register={register} />
      <div className="lower-form-section">
        <FileInput register={register} />
        <TypeSelector register={register} />
        <PromptSelector taskType={taskType} user={user} register={register} />
      </div>
      <button className="begin-data-gen-btn" type="submit">Generate Data</button>
    </form>
  );
};

export default InputSection;