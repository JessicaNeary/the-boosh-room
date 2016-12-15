const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getCharacters
}

function getCharacters() {
  return knex('characters')
    .select()
}
