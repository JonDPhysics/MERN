const mongoose = require("mongoose")

const BovineSchema = new mongoose.Schema({
    tag: {
        type: Number,
        required: [true, "Cattle Tag is required"],
        min: [0, "Tag cannot be less than zero"]
    },

    field: {
        type: String,
        required: [true, "What field is the cattle"]
    },

    careUrgency: {
        type: String,
        required: [true, "Urgency of care required"]
    }

}, {timestamps : true})

module.exports.Bovine = mongoose.model('Bovine', BovineSchema)