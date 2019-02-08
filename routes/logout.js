const express = require('express');
const route = express.Router();
const fs = require('fs');
const userDB = require('../database/user');
let data = ' ';
route.get('/logout', (req, res) => {
    fs.writeFile('username.txt',data,(err, result) => {
        if (err) throw err;
        console.log(result);
        res.redirect('/signup');
    })
})

module.exports = route;