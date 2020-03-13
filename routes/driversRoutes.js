const express = require("express");
const router = express.Router();
const Drivers = require("../models/Drivers");

/* GET home page. */
router.get("/", function(req, res, next) {
  Drivers.query()
    .withGraphFetched("passengers")
    .then(result => res.send(result));
});

router.get("/:id", function(req, res, next) {
  Drivers.query()
    .findById(req.params.id)
    .withGraphFetched("passengers")
    .then(result => res.send(result));
});

router.post("/", function(req, res) {
  console.log("req.body", req.body);
  Drivers.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err));
});

router.patch("/:id", function(req, res) {
  Drivers.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*")
    .then(updatedDriver => res.json(updatedDriver));
});

router.delete("/:id", function(req, res) {
  Drivers.query()
    .deleteById(req.params.id)
    .returning("*")
    .then(deletedDriver => res.json(deletedDriver));
});

module.exports = router;
