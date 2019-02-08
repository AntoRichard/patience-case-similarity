const express = require('express');
const route = express.Router();

const userDB = require('../database/user');

route.get('/signup',(req,res)=>{
    res.render('signup');
});

route.post('/signup',(req,res)=>{

    let name = req.body.name;
    let email = req.body.email;
    let phone = req.body.phone;
    let username = req.body.username;
    let password = req.body.password;

    let userdata = {
        name : name,
        email : email,
        phone : phone,
        username : username,
        password : password
    }
    console.log(userdata);
    userDB.create(userdata,(err,result)=>{
        if(err) throw err;
        console.log(result);
        console.log(`data stored in database`);
        res.redirect('/index');
    });


});

module.exports = route;