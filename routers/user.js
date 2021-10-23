const express = require("express");
const userController = require("../controllers/user");

const api = express.Router();

const { signUp, signIn } = userController;

api.post("/sign-up", signUp);
api.post("/sign-in", signIn);

module.exports = api;
