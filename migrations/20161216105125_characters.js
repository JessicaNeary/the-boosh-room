
exports.up = function(knex, Promise) {
  return knex.schema.createTable('characters', function(table){
    table.increments('id').primary()
    table.string('name')
    table.string('avatar')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('characters')
};
