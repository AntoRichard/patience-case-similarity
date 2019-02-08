const fs = require('fs');
var misspellings = require("misspellings");

var dict = misspellings.dict();

let data = null;

fs.readFile('reportData.txt',(err,result)=>{
    if(err) throw err;
    data = result.toString().split(' ');
    console.log(data);

    data.forEach((arr)=>{
        console.log(dict[arr]);
    }); 
});

