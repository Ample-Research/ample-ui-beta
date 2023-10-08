import React from 'react';

const TitleInput = ({ register }) => {
  return (
    <input 
      type="text" 
      className="title-input"
      placeholder="Task Title"
      required={true}
      {...register('title')} 
    />
  );
};

export default TitleInput;
