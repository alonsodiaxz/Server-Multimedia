const express = require("express");
const filmController = require("../controllers/film");

const api = express.Router();

const { saveFilm, getFilmsGender, getFilms, getFilmsName, getFilmsRating } =
  filmController;

api.get("/get-films-gender/:gender", getFilmsGender);
api.get("/get-films-name/:name", getFilmsName);
api.get("/get-films", getFilms);
api.get("/get-films-rating", getFilmsRating);
api.post("/add-film", saveFilm);

module.exports = api;
