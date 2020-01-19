const Product = require('../models/product_model')

exports.get_all_products = (req, res) => {
    Product.getAllProducts((err, product) => {
        if (err) throw err;
        res.status(200).json({
            name: product.name,
            price: product.price
        })
    })
}