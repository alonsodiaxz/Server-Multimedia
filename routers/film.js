const express = require("express");
const filmController = require("../controllers/film");

const api = express.Router();

const {} = filmController;

api.get("/get-films-genre/:genre");
api.get("/get-films-name/:name");
api.get("/get-films");
api.get("/get-films-rating");

module.exports = api;
