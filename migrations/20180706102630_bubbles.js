
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bubbles', table => {
    table.increments('id')
    table.integer('speed')
    table.string('type')
    table.integer('radius')
    table.string('movement_pattern')
    table.integer('initial_x')
    table.integer('initial_y')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bubbles')
};
