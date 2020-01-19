const app = require('./src/app')
const http = require('http')
const port = process.env.PORT | 3000

const server = http.createServer(app)

server.listen(port, () => {
    console.log('Products service listening at port ' + port)
})
