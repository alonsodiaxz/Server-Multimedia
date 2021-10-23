const User = require("../models/user");
const bcrypt = require("bcrypt-nodejs");
const { createAccessToken, refreshAccessToken } = require("../services/jwt");

//Función para registrarse
function signUp(req, res) {
  const repeatPassword = req.body.repeatPassword;
  const user = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
  });

  if (!user.password || !repeatPassword) {
    res
      .status(404)
      .send({ message: "Las contraseñas son obligatorias.", status: 404 });
  } else {
    if (user.password !== repeatPassword) {
      res
        .status(404)
        .send({ message: "Las contraseñas no son iguales.", status: 404 });
    } else {
      bcrypt.hash(user.password, null, null, function (err, hash) {
        if (err) {
          res.status(500).send({
            message: "Error al encriptar la contraseña.",
            status: 500,
          });
        } else {
          user.password = hash;

          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "Usuario ya registrado." });
            } else {
              if (!userStored) {
                res.status(404).send({ message: "Error al crear el usuario." });
              } else {
                res
                  .status(200)
                  .send({ message: "Usuario almacenado con éxito" });
              }
            }
          });
        }
      });
    }
  }
}

//Función para logearse
function signIn(req, res) {
  const { email, password } = req.body;

  const correo = email.toLowerCase();

  User.findOne({ correo }, (err, userStored) => {
    if (err) {
      res.status(500).send({ message: "Error de servidor", status: 500 });
    } else {
      if (!userStored) {
        res.status(404).send({ message: "Usuario no logeado.", status: 404 });
      } else {
        bcrypt.compare(password, userStored.password, (err, valid) => {
          if (err) {
            res.status(500).send({ message: "Error del servidor." });
          } else {
            if (valid) {
              const accessToken = createAccessToken(userStored);
              const refreshToken = refreshAccessToken(userStored);
              res.status(200).send({
                message: "Usuario logeado con éxito.",
                status: 200,
                userStored,
                accessToken: accessToken,
                refreshToken: refreshToken,
              });
            } else {
              res.status(404).send({
                message: "La contraseña introducida es incorrecta.",
                status: 404,
              });
            }
          }
        });
      }
    }
  });
}

module.exports = {
  signUp,
  signIn,
};
