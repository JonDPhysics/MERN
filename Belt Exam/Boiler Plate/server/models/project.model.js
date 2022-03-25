const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    // Insert required document(s) and validations
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 2 charaters long"]
    }
}, {timestamps : true})

module.exports.Project = mongoose.model('Project', ProjectSchema)