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
        characters: values[0],
        sounds: values[1]
      }
      res.render('index', object)
    })
}
