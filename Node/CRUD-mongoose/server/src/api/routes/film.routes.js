const FilmRoutes = require("express").Router();

const {
  getFilm,
  getFilms,
  getFilmByTitle,
  getFilmByYear,
  getFilmGreater,
  postFilm,
  updateFilm,
  deleteFilm,
} = require("../controllers/filmController");

FilmRoutes.get("/", getFilms);
FilmRoutes.get("/:id", getFilm);
FilmRoutes.get("/title/:title", getFilmByTitle);
FilmRoutes.get("/age/:age", getFilmByYear);
FilmRoutes.get("/ageGreater/:age", getFilmGreater);
FilmRoutes.post("/", postFilm);
FilmRoutes.patch("/:id", updateFilm);
FilmRoutes.delete("/:id", deleteFilm);

module.exports = FilmRoutes;
