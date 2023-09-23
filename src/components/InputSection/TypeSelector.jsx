import React from 'react';

const TypeSelector = ({ setTaskType }) => {
  return (
    <div>
      <button onClick={() => setTaskType("Q&A")}>Q&A</button>
      <button onClick={() => setTaskType("CHAT")}>CHAT</button>
    </div>
  );
};

export default TypeSelector;
