const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 2 charaters long"]
    }
}, {timestamps : true})

module.exports.Author = mongoose.model('Author', Schema)