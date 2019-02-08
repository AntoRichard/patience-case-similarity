const express = require('express');
const fs = require('fs');
const delay = require('delay');
const route = express.Router();

route.get('/loading', (req, res) => {
    fs.readFile('username.txt',(err,result)=>{
        if(err) throw err;

        res.render('loading',{
            name : result
        });
    });
});



module.exports = route;