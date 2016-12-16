
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('characters').insert({id: 1, name: 'Howard Moon', avatar:'/images/howard.jpeg'}),
        knex('characters').insert({id: 2, name: 'Vince Noir', avatar:'/images/vince.jpg'}),
        knex('characters').insert({id: 3, name: 'Naboo', avatar:'/images/naboo.jpg'}),
        knex('characters').insert({id: 4, name: 'Bollo', avatar:'/images/bollo.jpg'}),
        knex('characters').insert({id: 5, name: 'Bob Fossil', avatar:'/images/bob_fossil.jpg'}),
        knex('characters').insert({id: 6, name: 'Crack Fox', avatar:'/images/crack_fox.png'}),
        knex('characters').insert({id: 7, name: 'The Hitcher', avatar:'/images/hitcher.jpg'}),
        knex('characters').insert({id: 8, name: 'The Moon', avatar:'/images/moon.jpg'}),
        knex('characters').insert({id: 9, name: 'Mr Susan', avatar:'/images/mr_susan.jpg'}),
        knex('characters').insert({id: 10, name: 'Old Gregg', avatar:'/images/old_gregg.jpg'}),
        knex('characters').insert({id: 11, name: 'Rudy', avatar:'/images/rudy.jpg'}),
        knex('characters').insert({id: 12, name: 'Spirit of Jazz', avatar:'/images/spirit_of_jazz.jpg'}),
        knex('characters').insert({id: 13, name: 'The Funk', avatar:'/images/the_funk.jpg'}),
        knex('characters').insert({id: 14, name: 'Tony Harrison', avatar:'/images/tony_harrison.jpg'}),
        knex('characters').insert({id: 15, name: 'Liecester Cornflakes', avatar:'/images/Liecester_cornflakes.jpg'}),
      ])
    })
}
