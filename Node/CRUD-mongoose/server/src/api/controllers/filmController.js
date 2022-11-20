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

const getFilmByTitle = async (req, res, next) => {
  const { title } = req.params;
  try {
    const filmByTitle = await Actor.find({ title: title });
    return res.status(200).json(filmByTitle);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getFilmByYear = async (req, res, next) => {
  const { year } = req.params;
  try {
    const filmByYear = await Actor.find({ year: year });
    return res.status(200).json(filmByYear);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getFilmGreater = async (req, res, next) => {
  const { year } = req.params;
  try {
    const filmByYear = await Actor.find({ year: { $gt: year } });
    return res.status(200).json(filmByYear);
  } catch (error) {
    return res.status(500).json(error);
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
  getFilmByTitle,
  getFilmByYear,
  getFilmGreater,
  postFilm,
  updateFilm,
  deleteFilm,
};
