const mongoose = require('mongoose');

const histSchema = new mongoose.Schema({
    username : String,
    disease : String,
    date : String
})

const histModel = mongoose.model('history',histSchema);

module.exports = histModel;