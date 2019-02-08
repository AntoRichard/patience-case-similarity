const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    username: String,
    password: String
});

let userModel = mongoose.model('user',userSchema);

module.exports = userModel;