const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    media: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.schema.types.objectID,
        ref: 'User'
    }
})
const postModel = new mongoose.Model('post', postSchema);
module.exports = postModel;