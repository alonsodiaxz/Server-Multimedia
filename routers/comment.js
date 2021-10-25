const express = require("express");
const commentController = require("../controllers/comment");

const api = express.Router();

const { postComments } = commentController;

api.post("/post-comment", postComments);

module.exports = api;
