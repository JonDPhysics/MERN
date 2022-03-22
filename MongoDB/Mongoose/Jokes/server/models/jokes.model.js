const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    jokeBody: String,
    jokePunchLine: String
}, {timestamp: true})

module.exports.Joke = mongoose.model('Joke', JokeSchema)