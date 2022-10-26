const express=require('express');
const bodyParser = require('body-parser');
const multer=require('multer');
const route = require('./routes/route.js');
const mongoose  = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(multer().any());

mongoose.connect("mongodb+srv://muhaz:6VE8Lk82R6vAuBok@cluster0.syf7fzi.mongodb.net/project3", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});