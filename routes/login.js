const express = require('express');
const route = express.Router();
const fs = require('fs');

const userDB = require('../database/user');

route.get('/login', (req, res) => {
    res.render('login');
});

route.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    let userAuth = {
        username: username,
        password: password
    }

    console.log(`user auth data : ${userAuth}`);
    userDB.findOne({username : username},(err,result)=>{
        if(err) throw err;
        console.log(result.password)
        let retpass =  result.password;
        if(password === retpass)
        {
            fs.writeFile('username.txt',username,(err,done)=>{
                if(err) throw err;
                console.log(done);
            })
            res.redirect('/index');
        }
        else{
            res.redirect('/signup');
        }
    });
});

module.exports = route;