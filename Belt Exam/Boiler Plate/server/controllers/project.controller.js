const { Project } = require("./../models/project.model")

// get all
module.exports.all = (req, res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.json(err))
}

// get one
module.exports.one = (req, res) => {
    const id = req.params.id
    Project.findOne({ _id: id })
        .then(project => res.json(project))
        .catch(err => res.json(err))
}

// create
module.exports.create = (req, res) => {
    const {} = req.body // Insert required document(s)
    Project.create({
        // Insert required document(s)
    })
        .then(project => res.json(project))
        .catch(err => res.json(err))
}

// update
module.exports.update = (req, res) => {
    const id = req.params.id
    Project.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

// delete one
module.exports.delete = (req, res) => {
    Project.deleteOne({ _id: req.params.id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}