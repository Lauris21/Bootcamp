const express = require("express");
const cors = require("cors");

const connect = require("./utils/dataBase/db");

const ActorRoutes = require("./api/routes/actor.routes");
const FilmRoutes = require("./api/routes/film.routes");

connect();

const server = express();

server.use(express.json());

server.use(
  express.urlencoded({
    extended: false,
  })
);

server.use(cors());

server.use("/cinema/actor", ActorRoutes);
server.use("/cinema/film", FilmRoutes);

server.use("/public", express.static("public"));

server.use("/cinema", (req, res, next) => res.send("Open"));

server.use((req, res, next) => {
  setImmediate(() => {
    next(new Error("Something went wrong"));
  });
});

server.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

server.listen(process.env.PORT, () => console.log("Listen"));
