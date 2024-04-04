const http = require('http')

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end(`bem vindo ao meu servidor!`)
}).listen(8124)

console.log('server: runing at http://127.0.0.1:8124')