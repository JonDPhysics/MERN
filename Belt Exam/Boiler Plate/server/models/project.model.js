const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
    // Insert required document(s) and validations
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Name must be at least 2 charaters long"]
    },
    image: {
        type: String,
        required: [true, "Image url is required"],
    },

    position: {
        type: String,
        required: [true, "Crew position is required"],
    },

    phrase: {
        type: String,
        required: [true, "Catch phrase is required"],
        
    },

    pegLeg: {
        type: Boolean,
    },
    eyePatch: {
        type: Boolean,
    },
    hookHand: {
        type: Boolean,
    },

    chests: {
        type: Number,
        required: [true, "Treasure chest number is required"],
        min: [0, "treasure chest number must be at least 0"],
    }
}, {timestamps : true})

module.exports.Project = mongoose.model('Project', ProjectSchema)