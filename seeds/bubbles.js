
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bubbles').del()
    .then(function () {
      // Inserts seed entries
      return knex('bubbles').insert([
        {id: 1, speed: 10, type: 'good', radius: 4, movement_pattern: 'normal', initial_x: 4, initial_y: 14},
        {id: 2, speed: 10, type: 'bad', radius: 4, movement_pattern: 'normal', initial_x: 14, initial_y: 4}
      ]);
    });
};
