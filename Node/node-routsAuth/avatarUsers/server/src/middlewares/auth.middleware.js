// Intercepta la ruta antes de hacer la petición

const jwt = require("jsonwebtoken");

const { setError } = require("../helpers/error/handle.error");

const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) return res.json(setError(401, "Not authorized"));

  // Separamos por el espacio para tener length === 2
  const splits = authorization.split(" ");

  if (splits.length != 2 || splits[0] != "Bearer")
    return res.json(setError(400, "Not Bearer"));

  const jwtStringify = splits[1];

  try {
    // Comprobar que el token es válido, le llamamos con var por el scope
    var token = jwt.verify(jwtStringify, req.app.get("secretKey"));
  } catch (error) {
    return next(setError(500, "Token invalid"));
  }
  // Devolvemos el token
  const authority = {
    id: token.id,
    name: token.name,
  };

  req.authority = authority;
  // Que siga procedimiento y pida petición
  next();
};

module.exports = { isAuth };
