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