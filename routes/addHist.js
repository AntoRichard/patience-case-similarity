const express = require('express');
const histDB = require('../database/history');

const route = express.Router();

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;

route.get('/addHistory',(req,res)=>{
    res.render('addHist');
});

route.post('/addHistory',(req,res)=>{
    let username = req.body.username;
    let disease = req.body.disease;

    let userHist = {
        username : username,
        disease : disease,
        date : today
    }

    histDB.create(userHist,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
    res.redirect('/addHistory');
});

module.exports = route;