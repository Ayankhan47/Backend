const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    ProfileImage:{
        type: String
    }
})
const userModel = new mongoose.Model('User', userSchema);
module.exports = userModel;