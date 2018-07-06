
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bubbles').del()
    .then(function () {
      // Inserts seed entries
      return knex('bubbles').insert([
        {id: 1, speed: 10, type: 'good', radius: 4, movement_pattern: 'normal', initial_x: 4, initial_y: 25},
        {id: 2, speed: 10, type: 'bad', radius: 6, movement_pattern: 'normal', initial_x: 7, initial_y: 4},
        {id: 3, speed: 10, type: 'good', radius: 4, movement_pattern: 'normal', initial_x: 10, initial_y: 30},
        {id: 4, speed: 15, type: 'bad', radius: 10, movement_pattern: 'normal', initial_x: 14, initial_y: 7},
        {id: 5, speed: 10, type: 'good', radius: 4, movement_pattern: 'normal', initial_x: 20, initial_y: 20},
        {id: 6, speed: 5, type: 'bad', radius: 8, movement_pattern: 'normal', initial_x: 25, initial_y: 10},
        {id: 7, speed: 10, type: 'good', radius: 4, movement_pattern: 'normal', initial_x: 10, initial_y: 5},
        {id: 8, speed: 10, type: 'bad', radius: 6, movement_pattern: 'normal', initial_x: 7, initial_y: 7},
        {id: 9, speed: 20, type: 'good', radius: 4, movement_pattern: 'normal', initial_x: 0, initial_y: 14},
        {id: 10, speed: 10, type: 'good', radius: 5, movement_pattern: 'normal', initial_x: 19, initial_y: 21},
        {id: 11, speed: 13, type: 'good', radius: 7, movement_pattern: 'normal', initial_x: 13, initial_y: 28},
        {id: 12, speed: 8, type: 'bad', radius: 2, movement_pattern: 'normal', initial_x: 30, initial_y: 35},
        {id: 13, speed: 10, type: 'good', radius: 10, movement_pattern: 'normal', initial_x: 25, initial_y: 30},
        {id: 14, speed: 4, type: 'bad', radius: 7, movement_pattern: 'normal', initial_x: 5, initial_y: 25},
        {id: 15, speed: 17, type: 'good', radius: 3, movement_pattern: 'normal', initial_x: 8, initial_y: 20},
        {id: 16, speed: 3, type: 'bad', radius: 8, movement_pattern: 'normal', initial_x: 14, initial_y: 15},
        {id: 17, speed: 15, type: 'good', radius: 6, movement_pattern: 'normal', initial_x: 18, initial_y: 10},
        {id: 18, speed: 10, type: 'bad', radius: 4, movement_pattern: 'normal', initial_x: 2, initial_y: 5},
        {id: 19, speed: 10, type: 'good', radius: 3, movement_pattern: 'normal', initial_x: 40, initial_y: 0},
        {id: 20, speed: 7, type: 'good', radius: 4, movement_pattern: 'normal', initial_x: 35, initial_y: 9},
        {id: 21, speed: 10, type: 'good', radius: 7, movement_pattern: 'normal', initial_x: 20, initial_y: 18},
        {id: 22, speed: 18, type: 'bad', radius: 9, movement_pattern: 'normal', initial_x: 7, initial_y: 27},
        {id: 23, speed: 6, type: 'good', radius: 4, movement_pattern: 'normal', initial_x: 19, initial_y: 36},
        {id: 24, speed: 15, type: 'bad', radius: 6, movement_pattern: 'normal', initial_x: 10, initial_y: 4}
      ]);
    });
};
