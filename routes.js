const db = require('./db')

module.exports = {
  getIndex
}

function getIndex(req, res){
  Promise.all([
    db.getCharacters(),
    db.getSounds()
  ])
    .then(function (values) {
      var object = {
        var characters = values[0]
        var sounds = values[1]
      }
      res.render('index', object)
    })
}
