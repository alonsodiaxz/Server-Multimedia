const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

//Load routings
const userRoutes = require("./routers/user");
const filmRoutes = require("./routers/film");
const authRoutes = require("./routers/auth");
const commentRoutes = require("./routers/comment");

//Configuración del body parse
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configuración del header HTTP
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

//Router Basic
app.use(`/api/${process.env.API_VERSION}`, userRoutes);
app.use(`/api/${process.env.API_VERSION}`, filmRoutes);
app.use(`/api/${process.env.API_VERSION}`, authRoutes);
app.use(`/api/${process.env.API_VERSION}`, commentRoutes);

module.exports = app;
