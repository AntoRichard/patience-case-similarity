const express = require('express');
const route = express.Router();
const fs = require('fs');

route.get('/index', (req, res) => {
    fs.readFile('username.txt', (err, result) => {
        if (err) throw err;

        res.render('index', {
            name: result
        });
    });
});

module.exports = route;