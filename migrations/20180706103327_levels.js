
exports.up = function(knex, Promise) {
  return knex.schema.createTable('levels', table => {
    table.increments('level_number')
    table.integer('population_good')
    table.integer('population_bad')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('levels')
};
