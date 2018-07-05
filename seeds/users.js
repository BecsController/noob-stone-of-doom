
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Ross', highscore: 100},
        {id: 2, name: 'Hayden', highscore: 1000},
        {id: 3, name: 'Cate', highscore: 999},
        {id: 4, name: 'Cliff', highscore: 10},
        {id: 5, name: 'Rebecca', highscore: 998}
      ]);
    });
};
