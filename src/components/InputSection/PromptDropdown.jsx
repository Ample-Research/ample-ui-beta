import React from 'react';

const PromptDropdown = ({ prompt_name, user, register }) => {
  // REFACTOR -- this will need to retrieve the user's saved prompts based on the prompt name & set the options dynamically
  // REFACTOR -- it also needs to have an "Edit" prompt button
  // REFACTOR -- Needs to have an "Add" prompt button at the bottom
  return (
    <select required={true} defaultValue="" {...register(prompt_name)}>
      <option value="" disabled>Select a {prompt_name} Prompt</option>
      <option>{"Option 1"}</option>
      <option>{"Option 2"}</option>
    </select>
  );
};

export default PromptDropdown;
