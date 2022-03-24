const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    // Insert required document(s)
}, {timestamps : true})

module.exports.Project = mongoose.model('Project', ProjectSchema)