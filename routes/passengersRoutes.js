const express = require("express");
const router = express.Router();
const Passengers = require("../models/Passengers");

/* GET home page. */
router.get("/", function(req, res, next) {
  Passengers.query()
    .withGraphFetched("drivers")
    .then(result => res.send(result));
});

router.get("/:id", function(req, res, next) {
  Passengers.query()
    .findById(req.params.id)
    .withGraphFetched("drivers")
    .then(result => res.send(result));
});

router.post("/", function(req, res) {
  Passengers.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.patch("/:id", function(req, res) {
  Passengers.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedPassenger => res.json(updatedPassenger));
});

router.delete("/:id", function(req, res) {
  Passengers.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedPassenger => res.json(deletedPassenger));
});

module.exports = router;
