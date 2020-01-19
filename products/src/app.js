const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')
const morgan = require('morgan')

const productRoute = require('./routes/product_route')

app.use(morgan("dev"))
app.use(bodyParser.json())

app.use("/", productRoute)


module.exports = app