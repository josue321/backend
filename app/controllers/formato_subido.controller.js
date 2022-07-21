const db = require("../models");
const Formato_subido = db.formatos_subidos;
const Op = db.Sequelize.Op;



exports.userf = (req, res) => {
  res.status(200).send("User Contenido.");
};



// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be !"   
    });
    return;
  }

  // Create a Tutorial
  const formato_subido = {
    title: req.body.title,
    estado: req.body.estado
    // description: req.body.description,
    //  published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Formato_subido.create(formato_subido)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Formato_subido.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving formato_subido."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Formato_subido.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find formato_subido with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving formato_subido with id=" + id
      });
    });
};

// Update a formato_subido by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Formato_subido.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "formato_subido was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update formato_subido with id=${id}. Maybe Tutorial was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating formato_subido with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Formato_subido.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Formato_subido was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Formato_subido with id=${id}. Maybe Formato_subido was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Formato_subido with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Formato_subido.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Formato_subido were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Formato_subido."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
    Formato_subido.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Formato_subido."
      });
    });
};
