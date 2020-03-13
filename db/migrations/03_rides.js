exports.up = function(knex) {
  return knex.schema.createTable("rides", function(table) {
    table.increments();
    table
      .integer("passenger_id")
      .references("id")
      .inTable("passengers")
      .onDelete("CASCADE");
    table
      .integer("driver_id")
      .references("id")
      .inTable("drivers")
      .onDelete("CASCADE");
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable("rides");
};
