const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const orderRoute = require('./routes/order_route')

app.use(morgan("dev"))
app.use(bodyParser.json())

app.use("/", orderRoute)


module.exports = app