const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    prodName: {
        type: String,
        required: true
    },

    prodPrice: {
        type: Number,
        required: true
    },
    previousPrice: {
        type: Number, required: false
    },
    quantity: {
        type: String,
        required: false
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
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    }, 
    galleryImages: {
         type: [String], 
         required: false
         }

});

module.exports = mongoose.model('Product', ProductSchema);