const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    qty: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Item', itemSchema);