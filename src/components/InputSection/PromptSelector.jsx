import React, { useState } from 'react';
import PromptModal from './PromptModal';

const defaultPrompts = {
  questionPrompt: "End use of the questions:\r\nThe end use of these questions will be to train a Q&A Language Model on the information in the provided document.\r\n\r\nDesired question tone:\r\nWhen generating these questions you should try to mimic how real human users might ask them. \r\n\r\nExamples of good questions: \r\nExample Question 1 \r\nExample Question 2",
  answerPrompt: "End use of the answers:\r\nThe end use of these answers will be to train a Q&A Language Model on the information in the provided document.\r\n\r\nDesired answer tone:\r\nWhen generating these answers you should try to mimic how real human users might answer. \r\n\r\nExamples of good answers: \r\nExample Answer 1 \r\nExample Answer 2"
}

const PromptSelector = ({ register }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prompts, setPrompts] = useState({
    questionPrompt: defaultPrompts.questionPrompt,
    answerPrompt: defaultPrompts.answerPrompt
  });

  const handleModalSubmit = (updatedPrompts) => {
    setPrompts(updatedPrompts);
    setIsModalOpen(false);
  };

  return (
    <div className={`prompt-selector-box-container ${isModalOpen ? 'blur-background' : ''}`}>
      <div className='prompt-selector-box' onClick={() => setIsModalOpen(true)}>Edit Prompts</div>
      {isModalOpen && (
        <div className="prompt-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <PromptModal onSubmit={handleModalSubmit} initialPrompts={prompts} closeModal={() => setIsModalOpen(false)} />
        </div>
      )}
      <input type="hidden" {...register('custom_prompt_q')} value={prompts.questionPrompt} />
      <input type="hidden" {...register('custom_prompt_a')} value={prompts.answerPrompt} />
    </div>
  );
};

export default PromptSelector;
