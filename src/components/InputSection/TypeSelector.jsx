import React from 'react';

const TypeSelector = ({ register }) => {
  return (
    <select required={true} defaultValue="Q&A" {...register('task_type')}>
      <option value="QA">Q&A</option>
      <option value="CHAT" disabled>CHAT</option>
    </select>
  );
};

export default TypeSelector;
