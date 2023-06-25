const express = require('express')
const app = express()
var cors = require('cors')
var multer = require('multer');
const port = 5000

//const fileUpload = require("express-fileupload");
//app.use(fileUpload());
var upload = multer({ dest: 'uploaded_img/' });


app.use(cors())


// app.post('/send_image', upload.single('uploaded_file'), function (req, res) {

//     console.log(req.file, req.body)
//  });



 app.post('/send_image', function (req,res) {

   console.log(req.file);

//     var tmp_path = req.files.recfile.path;
//     var target_path = 'uploaded_img/' + req.files.recfile.name;
//   fs.readFile(tmp_path, function(err, data)
//   {
//     fs.writeFile(target_path, data, function (err)
//     {
//       res.render('complete');
//     })
//   });

});

// app.post('/send_image', (req, res) => {
//     console.log('here in the backend');
//     res.send("POST Request Called")
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})