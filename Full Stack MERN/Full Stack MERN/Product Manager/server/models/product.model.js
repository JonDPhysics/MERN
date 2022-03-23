const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 charaters long"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0.01, "Price must be at least one cent"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [10, "Description must be at least 10 characters long"]
    }
}, {timestamps : true})

module.exports.Product = mongoose.model('Product', ProductSchema)