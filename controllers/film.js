const Film = require("../models/film");
const bcrypt = require("bcrypt-nodejs");

const { createAccessToken, refreshAccessToken } = require("../services/jwt");

//Almacenar peliculas en la base de datos.
function saveFilm(req, res) {
  const body = req.body;
  const film = new Film(body);
  console.log(film);

  film.save((err, filmStored) => {
    if (err) {
      res.status(500).send({ message: "Pelicula ya alamcenada." });
    } else {
      res.status(200).send({ message: "Pelicula registrada." });
    }
  });
}

//Obtener peliculas por genero
function getFilmsGender(req, res) {
  const { gender } = req.params;

  Film.find({ gender: gender }, (err, films) => {
    if (err) {
      res.status(500).send({ message: "Error de servidor." });
    } else {
      if (!films) {
        res.status(404).send({ message: "Peliculas no encontradas." });
      } else {
        res.status(200).send({ message: "Peliculas encontradas.", films });
      }
    }
  });
}

//Obtener peliculas por nombre
function getFilmsName(req, res) {
  const { name } = req.params;

  Film.find((err, films) => {
    if (err) {
      res.status(500).send({ message: "Error de servidor." });
    } else {
      if (!films) {
        res.status(404).send({ message: "Peliculas no encontradas." });
      } else {
        const filmsSearched = [];
        films.map((film) => {
          if (film.name.toString().toLowerCase().includes(name.toLowerCase())) {
            filmsSearched.push(film);
          }
        });
        res
          .status(200)
          .send({ message: "Peliculas encontradas.", filmsSearched });
      }
    }
  });
}

//Obtener todas las peliculas
function getFilms(req, res) {
  Film.find((err, films) => {
    if (err) {
      res.status(500).send({ message: "Error de servidor." });
    } else {
      if (!films) {
        res.status(404).send({ message: "Peliculas no encontradas." });
      } else {
        res.status(200).send({ message: "Peliculas encontradas.", films });
      }
    }
  });
}

//Obtener peliculas por mejor valoración
function getFilmsRating(req, res) {
  Film.find((err, films) => {
    if (err) {
      res.status(500).send({ message: "Error de servidor." });
    } else {
      if (!films) {
        res.status(404).send({ message: "Peliculas no encontradas." });
      } else {
        res.status(200).send({ message: "Peliculas encontradas.", films });
      }
    }
  }).sort({ rating: -1 });
}

//Obtener peliculas por estrenos
function getPremieres(req, res) {
  Film.find({ premiere: true }, (err, films) => {
    if (err) {
      res.status(500).send({ message: "Error de servidor." });
    } else {
      if (!films) {
        res.status(404).send({ message: "Peliculas no encontradas." });
      } else {
        res.status(200).send({ message: "Peliculas encontradas.", films });
      }
    }
  });
}

module.exports = {
  saveFilm,
  getFilmsGender,
  getFilms,
  getFilmsName,
  getFilmsRating,
  getPremieres,
};
