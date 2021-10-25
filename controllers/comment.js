const Comment = require("../models/comment");

function postComments(req, res) {
  const body = req.body;
  const comment = new Comment(body);

  comment.save((err, commentStored) => {
    if (err) {
      res.status(500).send({ message: "Error de servidor" });
    } else {
      res.status(200).send({ message: "Comentario guardado." });
    }
  });
}

function getComments(req, res) {
  const params = req.params.film;

  Comment.find({ film: params }, (err, comments) => {
    if (err) {
      res.status(500).send({ message: "Error de servidor." });
    } else {
      if (!comments) {
        res.status(404).send({ message: "Comentarios no encontrados." });
      } else {
        res.status(500).send({ message: "Comentarios encontrados.", comments });
      }
    }
  });
}

function updateComment(req, res) {
  const { id } = req.params;
  const body = req.body;

  Comment.findByIdAndUpdate(id, body, (err, updateComment) => {
    if (err) {
      res.status(500).send({ code: 500, message: "Error del servidor." });
    } else {
      if (!updateComment) {
        res.status(404).send({
          code: 404,
          message: "No se ha podido actualizar el comentario.",
        });
      } else {
        res.status(200).send({
          code: 200,
          message: "Comentario actualizado correctamente.",
        });
      }
    }
  });
}

module.exports = { postComments, getComments, updateComment };
