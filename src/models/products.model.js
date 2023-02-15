const mongoose = require("mongoose");

const Products = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    product_price: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    product_image_url: {
        type: String,
        required: true,
    },
    product_info: {
        type: String,
        required: true,
    },
    real_pdp_url: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Products", Products);