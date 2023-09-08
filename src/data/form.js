import questionMark from '../assets/question-mark.svg';

const defaultInputs = {
    questionPrompt: "End use of the questions:\r\nThe end use of these questions will be to train a Q&A Language Model on the information in the provided document.\r\n\r\nDesired question tone:\r\nWhen generating these questions you should try to mimic how real human users might ask them. \r\n\r\nExamples of good questions: \r\nExample Question 1 \r\nExample Question 2",
    answerPrompt: "End use of the answers:\r\nThe end use of these answers will be to train a Q&A Language Model on the information in the provided document.\r\n\r\nDesired answer tone:\r\nWhen generating these answers you should try to mimic how real human users might answer. \r\n\r\nExamples of good answers: \r\nExample Answer 1 \r\nExample Answer 2"
}

export const inputFields = [
    {
      type: "text",
      registerName: "title",
      className: "input-text",
      placeholder: "TITLE",
      required: true,
    },
    {
      type: "file",
      registerName: "file",
      className: "input-file",
      required: true,
      label: 'UPLOAD FILE',
      allowedFiles: ".csv, .docx, .pdf, .txt"
    },
    {
      type: "textarea",
      registerName: "question_prompt",
      className: "input-text-area",
      label: "QUESTION PROMPT",
      icon: questionMark,
      defaultValue: defaultInputs.questionPrompt,
      required: true,
    },
    {
      type: "textarea",
      registerName: "answer_prompt",
      className: "input-text-area",
      label: "ANSWER PROMPT",
      icon: questionMark,
      defaultValue: defaultInputs.answerPrompt,
      required: true,
    }
  ];