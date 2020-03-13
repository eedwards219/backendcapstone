const knex = require("../db/knex");

exports.getAllRides = function(req, res) {
  knex("rides").then(ride => res.json(ride));
};

exports.getOneRide = function(req, res) {
  knex("rides")
    .where("id", req.params.id)
    .then(ride => res.json(ride));
};

exports.addOneRide = function(req, res) {
  knex("rides")
    .insert(req.body)
    .returning("*")
    .then(newRide => res.json(newRide));
};

exports.updateOneRide = function(req, res) {
  knex("rides")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedRide => res.json(updatedRide));
};

exports.removeOneRide = function(req, res) {
  knex("rides")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newRide => res.json(newRide));
};
