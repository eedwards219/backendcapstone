exports.up = function(knex, Promise) {
  return knex.schema.createTable("drivers", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("vehicle").notNullable();
    table.string("phoneNumber").notNullable();
    table.boolean("isAvailable");
    table.boolean("rideConfirmed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("drivers");
};
