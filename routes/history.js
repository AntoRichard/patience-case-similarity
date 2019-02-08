const express = require('express');
const fs = require('fs');
const histDB = require('../database/history');

const route = express.Router();

route.get('/history', (req, res) => {
    fs.readFile('username.txt', (err, result) => {
        if(err) throw err;
        histDB.find({username : result}, (err, datas) => {
            if (err) throw err;
            console.log(datas);
            res.render('history', {
                datas: datas
            });
        });
    });
});

module.exports = route;