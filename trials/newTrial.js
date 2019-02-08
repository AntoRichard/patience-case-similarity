const naturalBrain = require('natural-brain');
const classifier = new naturalBrain();

const fs = require('fs');

let fileData = null;

let num = 1;


let diabetes = () => {
    fs.readFile('dia_symp.txt', (err, diadata) => {
        if (err) throw err;
        let dia_arr = diadata.toString().split('.');
        let plot = 0;
        dia_arr.forEach((diaadata) => {

            // console.log(`${plot++})${diaadata}`);
            classifier.addDocument(diaadata, 'diabetes');
        });
        console.log(`before training`)
        classifier.train();
        console.log(`\n Diabetes model training completed`);
        // });

    });
}

let cancer = () => {
    fs.readFile('cancerData.txt', (err, cancerdata) => {
        if (err) console.log(err);
        canData = cancerdata.toString().split('.');

        console.log(`\n      Cancer model training initated`);
        console.log(`\n      Cancer model training on process......`);
        canData.forEach((data) => {
            console.log(`${num++} ) ${data}\n\n`);
            classifier.addDocument(data, 'cancer');
        });
        console.log(`\n      Cancer model training completed`);
        // console.log(fileData.length);
        // fs.readFile('diabetes.txt', (err, dia_data) => {
        //     if (err) console.log(err);
        //     dia__Data = dia_data.toString().split('.');
        classifier.train();
        console.log(`\n      Diabetes model training initated`);
        console.log(`\n      Diabetes model training on process......`);
    });
}

let NLPinit = () => {
    console.log(`\n\n\n`);
    console.log(`\t\t\t=======   =======   =====      =        `);
    console.log(`\t\t\t=         =     =   =    =   =   =      `);
    console.log(`\t\t\t=         =     =   =====   =     =     `);
    console.log(`\t\t\t=         =     =   = =     =======     `);
    console.log(`\t\t\t=         =     =   =  =    =     =     `);
    console.log(`\t\t\t=======   =======   =   =   =     =     `);

    console.log(`\n\n===========================     setting up environment    ===========================\n\n`);

    diabetes();
    cancer();

    // classifier.train();
    console.log(`\n\n\n      classification on process......\n`);
    console.log(`\n      Prediction : ${classifier.classify("A doctor always should investigate blood in your stool")}\n\n\n\n\n\n\n\n\n`);
}


NLPinit();