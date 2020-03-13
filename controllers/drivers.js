const knex = require("../db/knex");

exports.getAllDrivers = function(req, res) {
  knex("drivers").then(driver => res.json(driver));
};

exports.getOneDriver = function(req, res) {
  knex("drivers")
    .where("id", req.params.id)
    .then(driver => res.json(driver));
};

exports.addOneDrivers = function(req, res) {
  knex("drivers")
    .insert(req.body)
    .returning("*")
    .then(newDriver => res.json(newDriver));
};

exports.updateOneDriver = function(req, res) {
  knex("drivers")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedDriver => res.json(updatedDriver));
};

exports.removeOneDriver = function(req, res) {
  knex("drivers")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newDriver => res.json(newDriver));
};
