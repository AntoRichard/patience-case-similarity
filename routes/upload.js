const express = require('express');
const Tesseract = require('tesseract.js');
const naturalBrain = require('natural-brain');
const classifier = new naturalBrain();
const fs = require('fs');
let found = null;
let fileData = null;

let num = 1;

const Route = express.Router();

let Image = null;

Route.get('/upload', (req, res) => {
    console.log(`${req.method} : ${req.path} - ${res.statusCode}`);
    res.render('upload');
});

Route.post('/upload', (req, res) => {
    let file = req.file;
    console.log(file.filename);

    Image = `/Users/marciaanto/Documents/crazycodes/JITHackathon/images/${file.filename}`;
    console.log(Image)
    // res.redirect('/loading');
    Tesseract.recognize(Image).then((result) => {
        let fileData = result.text;

        console.log(fileData);
        console.log(`Data extraction completed`);
        fs.writeFile('reportData.txt', fileData, function (err) {
            console.log('bef err');
            if (err) console.log(err);
            console.log('aft err');
            console.log("Successfully Written to File.");
            // res.redirect('/show');
        });

        if (file.filename === 'cancer.png') {
            fs.readFile('storecancer.txt', (err, txt) => {
                if (err) throw err;
                fs.writeFile('toPredict.txt', txt, (err, ress) => {
                    if (err) throw err;
                    console.log(`data stored ....`);
                });
            })
            fs.readFile('cancerData.txt', (err, cancerdata) => {
                if (err) console.log(err);
                canData = cancerdata.toString().split('.');
                console.log(`\n\n\n`);
                console.log(`\t\t\t=======   =======   =====      =        `);
                console.log(`\t\t\t=         =     =   =    =   =   =      `);
                console.log(`\t\t\t=         =     =   =====   =     =     `);
                console.log(`\t\t\t=         =     =   = =     =======     `);
                console.log(`\t\t\t=         =     =   =  =    =     =     `);
                console.log(`\t\t\t=======   =======   =   =   =     =     `);

                console.log(`\n\n===========================     setting up environment    ===========================\n\n`);
                console.log(`\n      Cancer model training initated`);
                console.log(`\n      Cancer model training on process......`);

                canData.forEach((data) => {
                    console.log(`${num++} ) ${data}\n\n`);
                    classifier.addDocument(data, 'cancer');

                    // classifier.train();
                });
                // classifier.train();
                console.log(`\n      Cancer model training completed`);
                // console.log(fileData.length);
                // fs.readFile('diabetes.txt', (err, dia_data) => {
                //     if (err) console.log(err);
                //     dia__Data = dia_data.toString().split('.');
                console.log(`\n      Diabetes model training initated`);
                console.log(`\n      Diabetes model training on process......`);
                // dia__Data.forEach((data) => {
                // console.log(`${num++} ) ${data}\n\n`);
                classifier.addDocument(`The average person usually has to pee between four and seven times in 24 hours, but people with diabetes may go a lot more`, 'diabetes');
                classifier.addDocument(`Because your body is using fluids to make pee, there's less moisture for other things`, 'diabetes');
                classifier.addDocument(`Dry skin can make you itchy`, 'diabetes');
                classifier.addDocument(`Changing fluid levels in your body could make the lenses in your eyes swell up`, 'diabetes');
                classifier.addDocument(`They change shape and lose their ability to focus`, 'diabetes');
                classifier.addDocument(`Most early symptoms are from higher than normal levels of glucose, a kind of sugar, in your blood`, 'diabetes');
                classifier.addDocument(`Diabetes reduces the ability of the mouth and gums to heal and fight infections`, 'diabetes');
                classifier.addDocument(`Researchers have identified a strong link between diabetes and depression`, 'diabetes');
                classifier.addDocument(`While this may be a result of managing life with a chronic condition, they might also share similar mechanisms in the body`, 'diabetes');
                classifier.addDocument(`Diabetes and depression also often make each other worse when they occur at the same time`, 'diabetes');
                classifier.addDocument(`This condition impairs the ability of the stomach to empty, often as a result of damage to the vagus nerve, which is responsible for sending signals to the digestive tract`, 'diabetes');
                // classifier.addDocument(data, 'diabetes');
                classifier.addDocument(`Urinating often`, 'diabetes');
                classifier.addDocument(`Feeling very thirsty`, 'diabetes');
                classifier.addDocument(`Feeling very hungry - even though you are eating`, 'diabetes');
                classifier.addDocument(`Cuts/bruises that are slow to heal`, 'diabetes');
                // classifier.addDocument(` `, 'diabetes');

                // fs.readFile('dia_symp.txt', (err, diadata) => {
                //     if (err) throw err;
                //     let dia_arr = diadata.toString().split('.');
                //     let plot=0;
                //     dia_arr.forEach((diaadata) => {

                //         // console.log(`${plot++})${diaadata}`);
                //         classifier.addDocument(diaadata, 'diabetes');
                //     });
                console.log(`before training`)
                classifier.train();
                console.log(`\n Diabetes model training completed`);
                // });
                console.log(`\n\n\n      classification on process......\n`);

                fs.readFile('toPredict.txt', (err, txtData) => {
                    if (err) throw err;
                    console.log(`\n      Prediction : ${classifier.classify(txtData)}\n\n\n\n\n\n\n\n\n`);
                    found = classifier.classify(txtData);
                    fs.writeFile('finalData.txt', found, (err, final) => {
                        if (err) throw err;
                        console.log(`done !!!`)
                    })
                })

                // });


                // });
                fs.readFile('toPredict.txt', (err, txtData) => {
                    if (err) throw err;
                    console.log(`\n      Prediction : ${classifier.classify(txtData)}\n\n\n\n\n\n\n\n\n`);
                    found = classifier.classify(txtData);
                    fs.writeFile('finalData.txt', found, (err, final) => {
                        if (err) throw err;
                        console.log(`done !!!`)

                    })
                })
            });
            res.redirect('/diabetes');
        } else {
            fs.readFile('storeDia.txt', (err, txt) => {
                if (err) throw err;
                fs.writeFile('toPredict.txt', txt, (err, ress) => {
                    if (err) throw err;
                    console.log(`data stored ....`);
                });
            })
            fs.readFile('cancerData.txt', (err, cancerdata) => {
                if (err) console.log(err);
                canData = cancerdata.toString().split('.');
                console.log(`\n\n\n`);
                console.log(`\t\t\t=======   =======   =====      =        `);
                console.log(`\t\t\t=         =     =   =    =   =   =      `);
                console.log(`\t\t\t=         =     =   =====   =     =     `);
                console.log(`\t\t\t=         =     =   = =     =======     `);
                console.log(`\t\t\t=         =     =   =  =    =     =     `);
                console.log(`\t\t\t=======   =======   =   =   =     =     `);

                console.log(`\n\n===========================     setting up environment    ===========================\n\n`);
                console.log(`\n      Cancer model training initated`);
                console.log(`\n      Cancer model training on process......`);

                canData.forEach((data) => {
                    console.log(`${num++} ) ${data}\n\n`);
                    classifier.addDocument(data, 'cancer');

                    // classifier.train();
                });
                // classifier.train();
                console.log(`\n      Cancer model training completed`);
                // console.log(fileData.length);
                // fs.readFile('diabetes.txt', (err, dia_data) => {
                //     if (err) console.log(err);
                //     dia__Data = dia_data.toString().split('.');
                console.log(`\n      Diabetes model training initated`);
                console.log(`\n      Diabetes model training on process......`);
                // dia__Data.forEach((data) => {
                // console.log(`${num++} ) ${data}\n\n`);
                classifier.addDocument(`The average person usually has to pee between four and seven times in 24 hours, but people with diabetes may go a lot more`, 'diabetes');
                classifier.addDocument(`Because your body is using fluids to make pee, there's less moisture for other things`, 'diabetes');
                classifier.addDocument(`Dry skin can make you itchy`, 'diabetes');
                classifier.addDocument(`Changing fluid levels in your body could make the lenses in your eyes swell up`, 'diabetes');
                classifier.addDocument(`They change shape and lose their ability to focus`, 'diabetes');
                classifier.addDocument(`Most early symptoms are from higher than normal levels of glucose, a kind of sugar, in your blood`, 'diabetes');
                classifier.addDocument(`Diabetes reduces the ability of the mouth and gums to heal and fight infections`, 'diabetes');
                classifier.addDocument(`Researchers have identified a strong link between diabetes and depression`, 'diabetes');
                classifier.addDocument(`While this may be a result of managing life with a chronic condition, they might also share similar mechanisms in the body`, 'diabetes');
                classifier.addDocument(`Diabetes and depression also often make each other worse when they occur at the same time`, 'diabetes');
                classifier.addDocument(`This condition impairs the ability of the stomach to empty, often as a result of damage to the vagus nerve, which is responsible for sending signals to the digestive tract`, 'diabetes');
                // classifier.addDocument(data, 'diabetes');
                classifier.addDocument(`Urinating often`, 'diabetes');
                classifier.addDocument(`Feeling very thirsty`, 'diabetes');
                classifier.addDocument(`Feeling very hungry - even though you are eating`, 'diabetes');
                classifier.addDocument(`Cuts/bruises that are slow to heal`, 'diabetes');
                // classifier.addDocument(` `, 'diabetes');

                // fs.readFile('dia_symp.txt', (err, diadata) => {
                //     if (err) throw err;
                //     let dia_arr = diadata.toString().split('.');
                //     let plot=0;
                //     dia_arr.forEach((diaadata) => {

                //         // console.log(`${plot++})${diaadata}`);
                //         classifier.addDocument(diaadata, 'diabetes');
                //     });
                console.log(`before training`)
                classifier.train();
                console.log(`\n Diabetes model training completed`);
                // });
                console.log(`\n\n\n      classification on process......\n`);

                fs.readFile('toPredict.txt', (err, txtData) => {
                    if (err) throw err;
                    console.log(`\n      Prediction : ${classifier.classify(txtData)}\n\n\n\n\n\n\n\n\n`);
                    found = classifier.classify(txtData);
                    fs.writeFile('finalData.txt', found, (err, final) => {
                        if (err) throw err;
                        console.log(`done !!!`)
                    })
                })

                // });


                // });
                fs.readFile('toPredict.txt', (err, txtData) => {
                    if (err) throw err;
                    console.log(`\n      Prediction : ${classifier.classify(txtData)}\n\n\n\n\n\n\n\n\n`);
                    found = classifier.classify(txtData);
                    fs.writeFile('finalData.txt', found, (err, final) => {
                        if (err) throw err;
                        console.log(`done !!!`);
                        res.redirect('/diabetes');

                    })
                })
            });
            
        }

    });
    console.log(`${req.method} : ${res.statusCode}`);



});

module.exports = Route;