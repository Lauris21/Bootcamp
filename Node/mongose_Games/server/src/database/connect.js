const dotenv = require("dotenv");

dotenv.config();

const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://root:root@cluster0.k5mu6an.mongodb.net/diablo?retryWrites=true&w=majority";

const connect = async () => {
  try {
    const dbConnect = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = dbConnect.connection;
    console.log(`Conectado a la BD 👁: ${name} en el host : ${host} 🚀`);
  } catch (error) {
    console.log(`No se ha podido conectar a la base de DB 😪`, error);
  }
};

module.exports = { connect };
