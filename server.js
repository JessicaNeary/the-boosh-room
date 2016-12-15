const escape = require('escape-html')
const express = require('express')
const handlebars = require('express-handlebars')

const routes = require('./routes')

const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)


module.exports = app



// This is the data that is going to be displayed on the page
// TODO Get this data from a JSON file or database
const pageData = {
  characters: [
    {
      avatar: '/images/howard-moon.jpg',
      id: 1,
      name: 'Howard Moon'
    },
    {
      avatar: '/images/vince-noir.jpg',
      id: 2,
      name: 'Vince Noir'
    },
    {
      avatar: '/images/naboo-the-enigma.jpg',
      id: 3,
      name: 'Naboo the Enigma'
    },
    {
      avatar: '/images/bollo.jpg',
      id: 4,
      name: 'Bollo'
    },
    {
      avatar: '/images/bob-fossil.gif',
      id: 5,
      name: 'Bob Fossil'
    }
  ]
}

app.engine('hbs', handlebars({
  defaultLayout: 'main.hbs',
  extname: 'hbs'
}))
app.set('view engine', 'hbs')

app.use(express.static('public'))

// app.get('/', (req, res) => res.render('index', pageData))
app.get('/', routes.getIndex)

// Handle new connection
io.on('connection', socket => {

  // Handle recieving message from client
  socket.on('boosh message', message => {

    // Send the message to all connected clients
    io.emit('boosh message', {
      avatar: escape(message.avatar),
      character: escape(message.character),
      text: escape(message.text)
    })
  })
})
