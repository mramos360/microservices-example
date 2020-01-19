const app = require('./src/app')
const http = require('http')
const port = process.env.PORT | 3001

const server = http.createServer(app)

server.listen(port, () => {
    console.log('Order service listening at port ' + port)
})