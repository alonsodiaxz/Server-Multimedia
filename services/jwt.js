const jwt = require("jwt-simple");
const moment = require("moment");

const { SECRET_KEY } = require("../config");

function createAccessToken(user) {
  const payload = {
    id: user._id,
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    //Fecha de creación del token
    createToken: moment().unix(),
    //Tiempo que tarda en expirar el token
    exp: moment().add(3, "hours").unix(),
  };

  const jwToken = jwt.encode(payload, SECRET_KEY);
  return jwToken;
}

function refreshAccessToken(user) {
  const payload = {
    id: user._id,
    exp: moment().add(30, "days").unix(),
  };

  const jwToken = jwt.encode(payload, SECRET_KEY);
  return jwToken;
}

function decodeToken(token) {
  const payloadDecodificado = jwt.decode(token, SECRET_KEY, true);
  return payloadDecodificado;
}

module.exports = {
  createAccessToken,
  refreshAccessToken,
  decodeToken,
};
