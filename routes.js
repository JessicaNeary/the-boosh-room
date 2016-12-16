const db = require('./db')

module.exports = {
  getIndex,
  getSounds
}


function getCharacters(req, res){
  db.getCharacters()
    .then(function (characters) {
      res.render('index', {characters})
    })
}

function getSounds(req, res{
  db.getSounds()
    .then(function (sounds) {
      res.render('sound-bar', sounds)
    })
})

function getIndex(req, res){
  Promise.all{[
    getCharacters(req, res),
    getSounds(req, res)
  ]}
}
