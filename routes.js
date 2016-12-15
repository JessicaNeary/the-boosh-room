const db = require('./db')

module.exports = {
  getIndex
}


function getIndex(req, res){
  db.getCharacters()
    .then(function (characters) {
      res.render('index', {characters})
    })
}
