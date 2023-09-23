import React from 'react';
import PromptDropdown from './PromptDropdown';

const PromptSelector = ({ taskType, user }) => {
  // REFACTOR -- Needs to have an "Add" prompt button at the bottom
  return (
    <div>
      {taskType === "Q&A" ? (
        <>
          <PromptDropdown prompt_name="custom_prompt_q" user={user} />
          <PromptDropdown prompt_name="custom_prompt_a" user={user} />
        </>
      ) : (
        <>
          <PromptDropdown prompt_name="chat_prompt_1" user={user} />
          <PromptDropdown prompt_name="chat_prompt_2" user={user} />
          <PromptDropdown prompt_name="chat_prompt_3" user={user} />
        </>
      )}
    </div>
  );
};

export default PromptSelector;
