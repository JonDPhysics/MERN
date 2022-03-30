const { Bovine } = require("./../models/bovine.model")

// get all
module.exports.allBovine = (res) => {
    Bovine.find()
        .then(bovine => res.json(bovine))
        .catch(err => res.json(err))
}

// get one
module.exports.oneBovine = (req, res) => {
    const id = req.params.id
    Bovine.findOne({ _id: id })
        .then(bovine => res.json(bovine))
        .catch(err => res.json(err))
}

// create
module.exports.createBovine = (req, res) => {
    const {tag, field, careUrgency} = req.body
    Bovine.create({
        tag,
        field,
        careUrgency
    })
}

// update
module.exports.updateBovine = (req, res) => {
    const id = req.params.id
    Bovine.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

// delete
module.exports.deleteBovine = (req, res) => {
    Bovine.deleteOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}