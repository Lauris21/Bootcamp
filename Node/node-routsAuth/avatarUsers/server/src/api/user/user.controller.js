const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("./user.model");
const { setError } = require("../../helpers/error/handle.error");

const register = async (req, res, next) => {
  try {
    // Guardamos en newUser el nuevo usuario con los datos introducidos
    const newUser = new User(req.body);

    // Que no haya usuarios repetidos
    const userDupicate = await User.findOne({ username: newUser.username });
    if (userDupicate) return next("User already exists");

    // Guardamos el nuevo usuario en la base de datos
    const newUserDB = newUser.save();
    return res.json({
      status: 201,
      message: "user registred",
      data: newUserDB,
    });
  } catch (error) {
    return next(setError(500, "User registered fail"));
  }
};

const login = async (req, res, next) => {
  try {
    // Recuperamos el usuario
    const userInfo = await User.findOne({ username: req.body.username });

    // Compara contraseña encriptada -> register con login
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      // Si coincide la manchamos para que nadie la vea
      userInfo.password = null;
      // Generamos Token -> firma
      const token = jwt.sign(
        // Pasamos estos datos porque son únicos (vale con uno)
        {
          id: userInfo._id,
          username: userInfo.username,
        },
        // Recuperamos secretKey para gener token en base a esta key
        req.app.get("secretKey"),
        // Cuando expira el token
        { expiresIn: "1h" }
      );
      // Devolvemos info del usuario y el token
      return res.json({
        status: 200,
        message: "Welcome user",
        user: userInfo,
        token: token,
      });
    } else {
      // Si no hay coincidencia en la comparacion
      return next("Incorrect password");
    }
  } catch (error) {
    return next(setError(500, "USesr login fail"));
  }
};

module.exports = { register, login };
