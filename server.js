const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");
const knex = require("./db/knex");
const { Model } = require("objection");
const drivers = require("./routes/driversRoutes");
const rides = require("./routes/passengersRoutes");
const passengers = require("./routes/passengersRoutes");

const index = require("./routes/indexRoutes");
// const todos = require("./routes/todosRoutes");
const knexInstance = require("./db/knex");

Model.knex(knexInstance);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", index);
app.use("/drivers", drivers);
app.use("/passengers", passengers);
app.use("/rides", rides);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
module.exports = { app };
