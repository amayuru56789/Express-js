const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uid: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    title: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);