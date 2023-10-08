import React, { useState } from 'react';

const TypeSelector = ({ register }) => {
  const [selectedType, setSelectedType] = useState('QA');

  return (
    <div className="type-selector-box">
      <div 
        className={'selected type-selector-btn'} 
      >
        Completion (Q&A)
      </div>
      <div 
        className={'disabled type-selector-btn'} 
      >
        Chat coming soon...
      </div>
      <input type="hidden" {...register('task_type')} value={selectedType} />
    </div>
  );
};

export default TypeSelector;