import React from 'react';

const PromptDropdown = ({ prompt_name, user }) => {
  // REFACTOR -- this will need to retrieve the user's saved prompts based on the prompt name
  // REFACTOR -- it also needs to have an "Edit" prompt button
  return (
    <select>
      <option>{"Option 1"}</option>
      <option>{"Option 2"}</option>
    </select>
  );
};

export default PromptDropdown;
