const mongoose = require("mongoose");

const Users = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        required: true,
    },
    carts: {
        type: Array,
        default: [],
    },
    favorites: {
        type: Array,
        default: [],
    }
});

module.exports = mongoose.model("Users", Users);