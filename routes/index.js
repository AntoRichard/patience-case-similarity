const express = require('express');
const Tesseract = require('tesseract.js');
const path = require('path');
const fs = require('fs');

const Route = express.Router();

let Image = null;

Route.get('/index', (req, res) => {
    console.log(`${req.method} : ${req.path} - ${res.statusCode}`);
    res.render('index');
});

Route.post('/index', (req, res) => {
    let file = req.file;
    console.log(file.filename);

    Image = `/Users/marciaanto/Documents/crazycodes/JITHackathon/images/${file.filename}`;
    console.log(Image)
    Tesseract.recognize(Image).then((result) => {
        let fileData = result.text;
        // let fileData = 'hello world';
        console.log(fileData);
        console.log(`Data extraction completed`);
        fs.writeFile('reportData.txt', fileData, function (err) {
            if (err) console.log(err);
            console.log("Successfully Written to File.");
        });
        return res.redirect('/index');
    });
    console.log(`${req.method} : ${res.statusCode}`);
});

module.exports = Route;