const naturalBrain = require('natural-brain');
const classifier = new naturalBrain();

const fs = require('fs');

let fileData = null;

let num = 1;

fs.readFile('cancerData.txt', (err, cancerdata) => {
            if (err) console.log(err);
            canData = cancerdata.toString().split('.');
            console.log(`\n\n\n`);
            console.log(`\t\t\t=======   =======   =====      =      `);
            console.log(`\t\t\t=         =     =   =    =   =   =    `);
            console.log(`\t\t\t=         =     =   =====   =     =   `);
            console.log(`\t\t\t=         =     =   = =     =======    `);
            console.log(`\t\t\t=         =     =   =  =    =     =    `);
            console.log(`\t\t\t=======   =======   =   =   =     =     `);
            console.log(`\n\n===========================     setting up environment    ===========================\n\n`);
            console.log(`\n      Cancer model training initated`);
            console.log(`\n      Cancer model training on process......`);
            canData.forEach((data) => {
                // console.log(`${num++} ) ${data}\n\n`);
                classifier.addDocument(data, 'cancer');

                // classifier.train();
            });
            
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
                    classifier.addDocument(`Diabetes reduces the ability of the mouth and gums to heal and fight infections`,'diabetes');
                    classifier.addDocument(`Researchers have identified a strong link between diabetes and depression`, 'diabetes');
                    classifier.addDocument(`While this may be a result of managing life with a chronic condition, they might also share similar mechanisms in the body`, 'diabetes');
                    classifier.addDocument(`Diabetes and depression also often make each other worse when they occur at the same time`, 'diabetes');
                    classifier.addDocument(`This condition impairs the ability of the stomach to empty, often as a result of damage to the vagus nerve, which is responsible for sending signals to the digestive tract`, 'diabetes');
                    // classifier.addDocument(data, 'diabetes');
                    classifier.train();
                    console.log(`\n      Diabetes model training completed`);
                // });
                console.log(`\n\n\n      classification on process......\n`);
                console.log(`\n      Prediction : ${classifier.classify("Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.These contrast with benign tumors, which do not spread to other parts of the body.Possible signs and symptoms include a lump, abnormal bleeding, prolonged cough, unexplained weight loss and a change in bowel movements.While these symptoms may indicate cancer, they may have other causes.Over 100 types of cancers affect humans.Tobacco use is the cause of about 22% of cancer deaths.Another 10% are due to obesity, poor diet, lack of physical activity or excessive drinking of alcohol")}\n\n\n\n\n\n\n\n\n`);
            // });
           
        });
