const Comment = require("../models/comment");

function postComments(req, res) {
  const body = req.body;
  const comment = new Comment(body);
  console.log(comment);

  comment.save((err, commentStored) => {
    if (err) {
      res.status(500).send({ message: "Error de servidor" });
    } else {
      res.status(200).send({ message: "Comentario guardado." });
    }
  });
}

module.exports = { postComments };
