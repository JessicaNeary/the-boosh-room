
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('sounds').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('sounds').insert({id: 1, name:'badarea', sound:'/badarea.mp3'}),
        knex('sounds').insert({id: 2, name:'badtime', sound:'/badtime.mp3'}),
        knex('sounds').insert({id: 3, name:'blues', sound:'/blues.mp3'}),
        knex('sounds').insert({id: 4, name:'eelsboy', sound:'/eelsboy.mp3'}),
        knex('sounds').insert({id: 5, name:'oldray', sound:'/oldray.mp3'}),
        knex('sounds').insert({id: 6, name:'playsong', sound:'/playsong.mp3'}),
      ]);
    });
};
