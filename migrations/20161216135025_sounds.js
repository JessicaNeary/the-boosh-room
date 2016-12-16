
exports.up = function(knex, Promise) {
  return knex.schema.createTable('sounds', function(table){
    table.increments('id').primary()
    table.string('name')
    table.string('sound')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sounds')
};
