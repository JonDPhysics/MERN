const { Product } = require("./../models/product.model")

// get all
module.exports.allProducts = (req, res) =>{
    Product.find()
        .then(products => res.json(products))
        .catch(err=>res.json(err))
}

// get one
module.exports.oneProduct = (req, res) =>{
    const id = req.params.id
    Product.findOne({_id: id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// create
module.exports.createProduct = (req, res) =>{
    const {title, price, description} = req.body
    Product.create({
        title,
        price,
        description
    })
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

// update
module.exports.updateProduct = (req, res) =>{
    const id = req.params.id
    Product.findOneAndUpdate(
        {_id: id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}

// delete
module.exports.deleteProduct = (req, res) =>{
    Product.deleteOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err => res.json(err))
}