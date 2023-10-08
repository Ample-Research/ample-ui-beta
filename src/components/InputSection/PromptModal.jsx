import React, { useState } from 'react';

const PromptModal = ({ onSubmit, initialPrompts }) => {
  const [editedPrompts, setEditedPrompts] = useState(initialPrompts);

  const handleSubmit = () => {
    onSubmit(editedPrompts);
  };

  return (
    <div className="prompt-modal">
      <textarea
        value={editedPrompts.questionPrompt}
        onChange={(e) => setEditedPrompts({ ...editedPrompts, questionPrompt: e.target.value })}
      />
      <textarea
        value={editedPrompts.answerPrompt}
        onChange={(e) => setEditedPrompts({ ...editedPrompts, answerPrompt: e.target.value })}
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => setEditedPrompts(initialPrompts)}>Reset</button>
    </div>
  );
};

export default PromptModal;
