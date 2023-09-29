import React from 'react';

const TitleInput = ({ register }) => {
  return (
    <input 
      type="text" 
      className="title-input"
      placeholder="Title"
      required={true}
      {...register('title')} 
    />
  );
};

export default TitleInput;
