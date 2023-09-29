import React from 'react';

const defaultInputs = { // REFACTOR -- This will all change once it's being set dynamically
  questionPrompt: "End use of the questions:\r\nThe end use of these questions will be to train a Q&A Language Model on the information in the provided document.\r\n\r\nDesired question tone:\r\nWhen generating these questions you should try to mimic how real human users might ask them. \r\n\r\nExamples of good questions: \r\nExample Question 1 \r\nExample Question 2",
  answerPrompt: "End use of the answers:\r\nThe end use of these answers will be to train a Q&A Language Model on the information in the provided document.\r\n\r\nDesired answer tone:\r\nWhen generating these answers you should try to mimic how real human users might answer. \r\n\r\nExamples of good answers: \r\nExample Answer 1 \r\nExample Answer 2"
}

const PromptDropdown = ({ prompt_name, user, register }) => {
  // REFACTOR -- this will need to retrieve the user's saved prompts based on the prompt name & set the options dynamically
  // REFACTOR -- it also needs to have an "Edit" prompt button
  // REFACTOR -- Needs to have an "Add" prompt button at the bottom
  return (
    <select 
      required={true} 
      defaultValue="" 
      {...register(prompt_name)}
      style={{maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis'}}
    >
        <option value="" disabled>Select a {prompt_name} Prompt</option>
        <option>{defaultInputs.questionPrompt}</option>
        <option>{defaultInputs.answerPrompt}</option>
    </select>
  );
};

export default PromptDropdown;
