const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');


//module.exports = send_img_to_API = (imagePath , filename) => {

module.exports = async  function send_img_to_API(imagePath , filename){
 
    const inputPath = imagePath;
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));
   
    await  axios({
      method: 'post',
      url: 'https://api.remove.bg/v1.0/removebg',
      data: formData,
      responseType: 'arraybuffer',
      headers: {
        ...formData.getHeaders(),
        'X-Api-Key': 'XzCdjMS2JLFbE8gz4HABrk81',
      },
      encoding: null
    })
    .then((response) => {
      
      if(response.status != 200) return console.error('Error:', response.status, response.statusText);
      fs.writeFileSync( __dirname + "/uploaded_img_no_bg/" + filename , response.data);
  
    })
    .catch((error) => {
        return console.error('Request failed:', error);
    });

}
