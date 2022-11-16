const express = require("express");
const cors = require("cors");

const { connect } = require("./database/connect");

const Movie = require("./movie/movie");
const movies = require("./movie/movie.seed");

connect();

const server = express();

server.use(cors());

const router = express.Router();

router.get("/movies", async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
});

router.get("/movies/:id", async (req, res) => {
  const id = req.params.id;
  const movieById = await Movie.findById(id);
  if (movieById) {
    res.send(movieById);
  } else {
    return res.status(404).json("No movie found by this id");
  }
});

router.get("/movies/title/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const movieByTitle = await Movie.find({ title: title });
    if (movieByTitle) {
      res.send(movieByTitle);
    } else {
      return res.status(404).json("No movie found by this title");
    }
  } catch (error) {
    return res.status(500).json(err);
  }
});

router.get("/movies/genre/:genre", async (req, res) => {
  const { genre } = req.params;
  try {
    const movieByGenre = await Movie.find({ genre: genre });
    if (movieByGenre) {
      res.send(movieByGenre);
    } else {
      return res.status(404).json("No movie found by this genre");
    }
  } catch (error) {
    return res.status(500).json(err);
  }
});

router.get("/movies/year/:year", async (req, res) => {
  const { year } = req.params;
  try {
    const movieByYear = await Movie.find({ year: { $gt: year } });
    if (movieByYear) {
      res.send(movieByYear);
    } else {
      return res.status(404).json("No movie found by this year");
    }
  } catch (error) {
    return res.status(500).json(err);
  }
});
server.use("/", router);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT} ⚡️`);
});
