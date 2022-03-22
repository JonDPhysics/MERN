const { Joke } = require("./../models/jokes.model")

// get all
module.exports.allJokes = (req, res) =>{
    Joke.find()
        .then(jokes => res.json(jokes))// successful response
        .catch(err=>res.json(err))// unsuccessful response
}

// get one
module.exports.oneJoke = (req, res) =>{
    const id = req.params.id
    Joke.findOne({_id: id})
        .then(joke => res.json(joke))
        .catch(err => res.json(err))

}

// create
module.exports.createJoke = (req, res) =>{
    Joke.create(req.body)
        .then(response=>res.json(response))
        .catch(err=>res.json(err))
}

// update
module.exports.updateJoke = (req, res) =>{
    const id = req.params.id
    Joke.findOneAndUpdate(
        {_id: id},
        req.body,
        { new: true, runValidators: true }
    )
        .then(response => res.json(response))
        .catch(err => res.json(err))
}

// delete
module.exports.deleteJoke = (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}