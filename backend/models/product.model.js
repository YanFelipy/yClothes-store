const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    productType: {
        type: String,
        required: true
    },

    productSize: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model('Product', ProductSchema);