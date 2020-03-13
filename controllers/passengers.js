const knex = require("../db/knex");

exports.getAllPassengers = function(req, res) {
  knex("passengers").then(passenger => res.json(passenger));
};

exports.getOnePassenger = function(req, res) {
  knex("passengers")
    .where("id", req.params.id)
    .then(passenger => res.json(passenger));
};

exports.addOnePassenger = function(req, res) {
  knex("passengers")
    .insert(req.body)
    .returning("*")
    .then(newPassenger => res.json(newPassenger));
};

exports.updateOnePassengers = function(req, res) {
  knex("passengers")
    .update({
      ...req.body,
      updated_at: new Date()
    })
    .where("id", req.params.id)
    .returning("*")
    .then(updatedPassenger => res.json(updatedPassenger));
};

exports.removeOnePassenger = function(req, res) {
  knex("passengers")
    .del()
    .where("id", req.params.id)
    .returning("*")
    .then(newPassenger => res.json(newPassenger));
};
