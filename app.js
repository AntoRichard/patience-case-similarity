const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');

const IndexRoute = require('./routes/index');
const FileUpload = require('./fileUpload/multer');

let myImage = __dirname + '/test.png';

let app = express();
// View engine
app.set('view engine', 'ejs');
// Middleware
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(multer({
    storage: FileUpload.fileStorage,
    fileFilter: FileUpload.fileFilter
}).single('image'));

// Routes
app.use(IndexRoute);


app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>Error</h1>');
});

app.listen(3000, () => {
    console.log(`server running in port : 3000`);
})