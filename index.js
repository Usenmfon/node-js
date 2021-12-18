const http = require('http')
const url = require('url')

var server = http.createServer(function(req, res) {

    let parsedUrl = url.parse(req.url, true)

    let path = parsedUrl.pathname

    let trimmedPath = path.replace(/^\/+|\/+$/g, '')

    let methodname = req.method.toLowerCase()

    let name = "Usenmfon Uko"
    res.end(`Hello ${name}, you are connected!`)

    console.log("Request received on:" + trimmedPath + " with a " + methodname + " method")
})

server.listen(5000, function() {
    console.log("Server listening on PORT 5000")
})