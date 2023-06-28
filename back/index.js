const express = require('express')
const app = express()
var cors = require('cors')
const fileupload = require("express-fileupload");
const port = 5000

app.use(fileupload());
app.use(express.static("files"));
app.use(cors())

app.use(express.static('uploaded_img_no_bg'))

const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var send_img_to_API = require('./send_img_to_API');

app.post("/send_image",  (req, res) => {
  const newpath = __dirname + "/uploaded_img/";
  const file = req.files.file;
  var now = new Date().getTime();
  const filename =  now + file.name ;
 
  file.mv(`${newpath}${filename}`, (err) => {
    if (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }

    try {
      (async () => {
       await send_img_to_API(`${newpath}${filename}` , filename );

        res.status(200).send({ imageName: filename, code: 200 });
      })();
    } catch (err) {
      res.status(500).send({ message: "File upload failed", code: 200 });
    }
  });
 
});



//API key - XzCdjMS2JLFbE8gz4HABrk81


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})