import React, { useState } from 'react';

const PromptModal = ({ onSubmit, initialPrompts, closeModal }) => {
  const [editedPrompts, setEditedPrompts] = useState(initialPrompts);

  const handleSubmit = () => {
    onSubmit(editedPrompts);
  };

  return (
    <div className="prompt-modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h3>Data Extraction Prompts</h3>
      </div>
      <div className="modal-body">
        <p>Please explain how you would like Ample to extract questions from your uploaded document.</p>
        <textarea
          value={editedPrompts.questionPrompt}
          onChange={(e) => setEditedPrompts({ ...editedPrompts, questionPrompt: e.target.value })}
          className="modal-textarea"
        />
        <p>Please explain how you would like Ample to extract answers to those questions (i.e. completions).</p>
        <textarea
          value={editedPrompts.answerPrompt}
          onChange={(e) => setEditedPrompts({ ...editedPrompts, answerPrompt: e.target.value })}
          className="modal-textarea"
        />
      </div>
      <div className="modal-footer">
        <button className="cancel-button" onClick={() => { setEditedPrompts(initialPrompts); closeModal(); }}>Cancel</button>
        <button className="save-button" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};


export default PromptModal;
