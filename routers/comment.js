const express = require("express");
const commentController = require("../controllers/comment");
const { update } = require("../models/comment");

const api = express.Router();

const { postComments, getComments, updateComment } = commentController;

api.post("/post-comment", postComments);
api.get("/get-comments/:film", getComments);
api.put("/update-comment/:id", updateComment);

module.exports = api;
