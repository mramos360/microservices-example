const express = require('express')
const router = express.Router()
let Product = require('../models/product_model')

router.get("/products", (req, res, next) => {
    Product.find()
        .then(docs => {
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        id: doc.id,
                        name: doc.name,
                        price: doc.price
                    }
                })
            }
            res.status(200).json(response)
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

router.post("/products", (req, res, next) => {
    const product = new Product(req.body)
    
    Product.save(product)
        .then(result => {
            res.status(200).json(result)
        }).catch(err => {
            console.log(err)
        })
})

router.patch("/products/:id", (req, res, next) => {
    const id = req.params.id
    const objBody = req.body

    Product.update(id, objBody)
        .then(result => {
            res.status(200).json({
                message: "Product updated",
                updated: objBody,
                result: result

            })
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router