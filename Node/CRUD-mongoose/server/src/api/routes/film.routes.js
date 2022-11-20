const FilmRoutes = require("express").Router();

const {
  getFilm,
  getFilms,
  postFilm,
  updateFilm,
  deleteFilm,
} = require("../controllers/filmController");

FilmRoutes.get("/", getFilms);
FilmRoutes.get("/:id", getFilm);
FilmRoutes.post("/", postFilm);
FilmRoutes.patch("/:id", updateFilm);
FilmRoutes.delete("/:id", deleteFilm);

module.exports = FilmRoutes;
