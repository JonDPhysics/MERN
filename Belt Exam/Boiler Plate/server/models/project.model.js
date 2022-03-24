const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    // Insert required collections
}, {timestamps : true})

module.exports.Project = mongoose.model('Project', ProjectSchema)