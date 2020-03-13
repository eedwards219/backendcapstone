const express = require("express");
const router = express.Router();
const Rides = require("../models/Rides");

/* GET home page. */
router.get("/", function(req, res, next) {
  Rides.query()
    .withGraphFetched("drivers")
    .then(result => res.send(result));
});

router.get("/:id", function(req, res, next) {
  Rides.query()
    .findById(req.params.id)
    .withGraphFetched("drivers")
    .then(result => res.send(result));
});

router.post("/", function(req, res) {
  Rides.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.patch("/:id", function(req, res) {
  Rides.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedRide => res.json(updatedRide));
});

router.delete("/:id", function(req, res) {
  Rides.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedRide => res.json(deletedRide));
});

module.exports = router;
