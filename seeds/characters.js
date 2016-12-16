
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('characters').insert({id: 1, name: 'Howard Moon', avatar:'/images/howard-moon.jpg'}),
        knex('characters').insert({id: 2, name: 'Vince Noir', avatar:'/images/vince-noir.jpg'}),
        knex('characters').insert({id: 3, name: 'Naboo', avatar:'/images/naboo-the-enigma.jpg'}),
        knex('characters').insert({id: 4, name: 'Bollo', avatar:'/images/bollo.jpg'}),
        knex('characters').insert({id: 5, name: 'Bob Fossil', avatar:'/images/bob-fossil.gif'}),
      ]);
    });
};
