const Film = require("../models/filmModel");

const getFilms = async (req, res, next) => {
  try {
    const films = await Film.find().populate("actors");
    res.status(200).json(films);
  } catch (error) {
    return next(error);
  }
};

const getFilm = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = await Film.findById(id).populate("actors");
    return res.status(200).json(film);
  } catch (error) {
    return next(error);
  }
};

const postFilm = async (req, res, next) => {
  try {
    const film = new Film(req.body);
    const filmInDB = await film.save();
    return res.status(201).json(filmInDB);
  } catch (error) {
    return next(error);
  }
};

const updateFilm = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = new Film(req.body);
    film._id = id;
    const updateFilmDB = await Film.findByIdAndUpdate(id, film);
    return res.status(200).json(updateFilmDB);
  } catch (error) {
    return next(error);
  }
};

const deleteFilm = async (req, res, next) => {
  try {
    const { id } = req.params;
    const film = await Film.findByIdAndDelete(id);
    return res.status(200).json(film);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getFilm,
  getFilms,
  postFilm,
  updateFilm,
  deleteFilm,
};
