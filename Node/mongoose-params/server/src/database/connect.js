const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

const Movie = require("./../movie/movie");
const movies = require("./../movie/movie.seed");

const mongoURI = process.env.MONGO_URI;

const connect = async () => {
  try {
    const dbConnect = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //Find trae todos los elementos
    const allMovies = await Movie.find();
    //Si el array tiene algo se vacía
    if (allMovies.length) await Movie.collection.drop();
    const moviesSeed = await movies.map((movie) => new Movie(movie));
    await Movie.insertMany(moviesSeed);
    const { name, host } = dbConnect.connection;
    console.log(`conectado 🔌 a : ${name} en el host : ${host} 🚀`);
  } catch (error) {
    console.log(`No se ha podido conectar a la DB`, error);
  }
};

module.exports = { connect };
