const express = require('express');
const route = express.Router();

route.get('/hospital',(req,res)=>{
    res.render('cancerHospital');
});

module.exports = route;