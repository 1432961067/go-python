'use strict'

let app = require('http').createServer(handler)
let io = require('socket.io')(app)

app.listen(3000)

console.log('Listening at http://localhost:3000/')

function handler (req, res) {
  res.writeHead(200)
  res.end('Testing server for http://github.com/wedeploy/gosocketio example.')
}
io.on('connection', function (socket) {
  console.log('Connecting %s.', socket.id)
  console.log(socket.request.headers)
  //socket.emit("/message", "{10, \"main\", \"using emit\"}")
  socket.on('messgae', (location) => {
    // fail booking 50% of the requests
    console.log('client message!----------------------------------------------')
    console.log(location)

    //socket.send("top")
    //socket.send("s")
    //socket.send("\n")
  })

  socket.on('/join', (location) => {
    // fail booking 50% of the requests
    console.log('joinjoinjoinjoinjoinjoinjoin!')
    console.log(location)

  })

  socket.on('result', (location) => {
    // fail booking 50% of the requests
    console.log('result message!')
    console.log(location)

  })


  socket.on('find_tickets', (route) => {
    console.log('Quote for tickets from %s to %s requested.', route.From, route.To)
  })

  socket.on('error', (err) => {
    console.error(err)
  })

  socket.on('disconnect', () => {
    console.log('Disconnecting %s.', socket.id)
  })
})