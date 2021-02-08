let net = require('net')
const HOST = '127.0.0.1'
const PORT = '6969'

net.createServer( (sock) => {
    console.log(`connected: ${sock.remoteAddress}:${sock.remotePort} `)

   

}).listen(PORT, HOST)

console.log(`server start:  ${HOST}:${PORT} `)

