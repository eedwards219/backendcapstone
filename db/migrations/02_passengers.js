exports.up = function(knex, Promise) {
  return knex.schema.createTable("passengers", table => {
    table.increments();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("phoneNumber").notNullable();
    table.boolean("isRegistered");
    table.boolean("isAvailable");
    table.boolean("rideConfirmed");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("passengers");
};
