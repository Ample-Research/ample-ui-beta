const v = process.env;
const baseURL = v.REACT_APP_AZURE_FUNCTIONS_BASE_ENDPOINT;

export const initiateFileProcessing = async (data, userId) => {
  const formData = new FormData();
  
  formData.append('file', data.file[0]);
  
  const jsonPayload = {
    user_id: userId,
    title: data.title,
    model_name: "qa-gpt-35-4k-context",
    start_sequence: "\n\n###\n\n",
    stop_sequence: "###",
    task_type: "QA",
    custom_prompt_q: data.question_prompt,
    custom_prompt_a: data.answer_prompt,
  };

  formData.append('data', JSON.stringify(jsonPayload));

  const endpoint = baseURL + v.REACT_APP_INITIATE_FILE_PROCESSING_ENDPOINT + '?code=' + v.REACT_APP_INITIATE_FILE_PROCESSING_CODE
  try {
    console.log('initiate API CALL')
    const response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      console.log(response)
      throw new Error('Response was not ok');
    }

    const responseData = await response.json();
    return responseData
  } catch (error) {
    console.error("There was an error initiating file processing:", error);
  }
};

export const checkTaskStatus = async (taskId, userId) => {
  let endpoint = new URL(baseURL + v.REACT_APP_CHECK_TASK_STATUS_ENDPOINT)
  const params = {
    code: v.REACT_APP_CHECK_TASK_STATUS_CODE,
    task_id: taskId
  };
  Object.keys(params).forEach(key => endpoint.searchParams.append(key, params[key]));//append params to url

  try {
    console.log('check status API CALL')
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`something went wrong: ${response.status}`);
    }
    const responseData = await response.json();
    return responseData
  } catch (error) {
    console.error("There was an error checking task status:", error);
    return error;
  }
};
