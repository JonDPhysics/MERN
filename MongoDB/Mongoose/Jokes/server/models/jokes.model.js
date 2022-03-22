const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    Joke: String
}, {timestamp: true})

module.exports.Joke = mongoose.model('Joke', JokeSchema)