import React from 'react';
import PromptDropdown from './PromptDropdown';

const promptConfig = {
  'QA': ['custom_prompt_q', 'custom_prompt_a'],
  'CHAT': ['chat_prompt_1', 'chat_prompt_2', 'chat_prompt_3'],
};

const PromptSelector = ({ taskType, user, register }) => {

  const prompts = promptConfig[taskType] || [];

  return (
    <div className='prompt-selector-box'>
      {prompts.map(prompt => (
        <PromptDropdown key={prompt} prompt_name={prompt} user={user} register={register} />
      ))}
    </div>
  );
};

export default PromptSelector;
