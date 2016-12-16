const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getCharacters,
  getSounds
}

function getCharacters() {
  return knex('characters')
    .select()
}

function getSounds() {
  return knex('sounds')
    .select()
}
