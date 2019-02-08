const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/patientcase");

const IndexRoute = require('./routes/upload');
const FileUpload = require('./fileUpload/multer');
const signupRoute = require('./routes/signup'); 
const loginRoute = require('./routes/login'); 
const historyRoute = require('./routes/history'); 
const hospitalRoute = require('./routes/hospital'); 
const indexRoute = require('./routes/index'); 
const LoadingRoute = require('./routes/loading');
const addHistRoute = require('./routes/addHist');
const logoutRoute = require('./routes/logout');

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
app.use(signupRoute);
app.use(loginRoute);
app.use(historyRoute);
app.use(hospitalRoute);
app.use(indexRoute);
app.use(LoadingRoute);
app.use(addHistRoute);
app.use(logoutRoute);

app.get('/predict',(req,res)=>{
    res.send('hello');
});

app.get('/cancer',(req,res)=>{
    res.render('predict');
})
app.get('/diabetes',(req,res)=>{
    res.render('predict1');
})

app.use('/',(req,res,next)=>{
    res.status(404).send('<h1>Error</h1>');
});


app.listen(3000, () => {
    console.log(`server running in port : 3000`);
})