
export const sendData = async (file, data, userId) => {
    const url = `https://ample-files-to-qa.azurewebsites.net/api/INITIATE_FILE_PROCESSING?code=${process.env.REACT_APP_INITIATE_CODE}`;
    const formData  = new FormData();
    formData.append('file', file);   
    formData.append('data', transFormData(data, userId)); 
    console.log(formData)
  
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    const taskInfo = await response.json();
    console.log('task info', taskInfo)
  
    return taskInfo;
  }

  const transFormData = (data, userId) => {
    const newData = {...data}
    // delete newData.fileName;
    // newData.user_id = userId;
    // newData.tags = data.tags.split(",")
    // Object.keys(newData).forEach(k => {
    //   if(k.startsWith('q') || (k.startsWith('a') && k !== "answer_tone")){
    //     delete newData[k]
    //   }
    // })
    // newData.QA_examples = [[data.q1, data.a1], [data.q2, data.a2],[data.q3, data.a3]]
    // newData.model_name = "gpt-3.5-turbo";
    // newData.start_sequence = "\n\n###\n\n";
    // newData.stop_sequence = "###";
    return JSON.stringify(newData)
  }

  export const checkStatus = async (id) => {
    console.log('checking status')
    const url = `https://ample-files-to-qa.azurewebsites.net/api/CHECK_TASK_STATUS?code=${process.env.REACT_APP_STATUS_CODE}`;
    const response = await fetch(url + id);
    const taskInfo = await response.json();
    console.log(taskInfo)
    return taskInfo;
  }
