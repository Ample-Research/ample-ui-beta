
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

  // export const downloadBlobToFile = async (fileId) => {
  //     const SAS_TOKEN = "sv=2022-11-02&ss=bf&srt=co&se=2023-08-19T14%3A34%3A45Z&sp=rwl&sig=QqW1s35pFQF2Drsj0C2R66hf%2BiQaQzS8g6O2lI1Gb%2B4%3D";
  //     const BLOB_ENDPOINT = "https://amplefilestoqaprocessing.blob.core.windows.net";
  //     const blobServiceClient = new BlobServiceClient(`${BLOB_ENDPOINT}?${SAS_TOKEN}`);
  //     const containerClient = blobServiceClient.getContainerClient('final-processed-results');
  //     const blobName = fileId;
  //     const blobClient = await containerClient.getBlobClient(blobName);
      
  //     await blobClient.downloadToFile(fileId);
  //     console.log(`download of ${blobName} success`);
  // }

// export const submitBetaRequest = async (data) => {
//   const url = "https://beta-auth-functions.azurewebsites.net/api/BETA_SIGNUP_REQUEST?code=7wIbtMRX2x6_HNPqG3i4zhhNJ8H9tm2RDu5tQiiA7lxLAzFun7L3SQ=="

//   const response = await fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(data)
//   });

//   return response;
// }
