const { Joke } = require("./../models/jokes.model")

// get all
module.exports.allJokes = (req, res) =>{
    Joke.find()
        .then(jokes => res.json(jokes))// successful response
        .catch(err=>res.json(err))// unsuccessful response
}

// get one
module.exports.oneJoke = (req, res) =>{

}

// create
module.exports.createJoke = (req, res) =>{

}

// update
module.exports.updateJoke = (req, res) =>{

}

// delete
module.exports.deleteJoke = (req, res) =>{
    
}