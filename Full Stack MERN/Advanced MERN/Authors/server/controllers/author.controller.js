const { Author } = require("./../models/author.model")

// get all
module.exports.allAuthors = (req, res) =>{
    Author.find()
        .then(authors => res.json(authors))
        .catch(err=>res.json(err))
}

// get one
module.exports.oneAuthor = (req, res) =>{
    const id = req.params.id
    Author.findOne({_id: id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

// create
module.exports.createAuthor = (req, res) =>{
    const {name} = req.body
    Author.create({
        name
    })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

// update
module.exports.updateAuthor = (req, res) =>{
    const id = req.params.id
    Author.findOneAndUpdate(
        {_id: id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

// delete
module.exports.deleteAuthor = (req, res) =>{
    Author.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}