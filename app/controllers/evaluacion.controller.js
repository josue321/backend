
const { user } = require("../models");
const db = require("../models");
const Evaluacion = db.evaluacion;
const Op = db.Sequelize.Op;

// Create and Save a new Evaluacion
exports.create = (req, res) => {
  if (!req.body.title) { 
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Evaluacion
  const evaluacion = {
    nombre: req.body.nombre
  };

  // Save Evaluacion in the database
  Evaluacion.create(evaluacion)
    .then(data => {
      res.send(data);
    })
    .catch(err => { 
      res.status(500).send({
        message:
          err.message || "Error creando Evaluación"
      });
    });
};

// Retrieve all Evaluaciones from the database.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Evaluacion.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => { 
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Evaluacion with an id
exports.findOne = (req, res) => {
  
const id = req.params.id;
  Evaluacion.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `no se encontro la evaluacion con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al traer la evaluacion con el id=" + id
      });
    });
};

// Update a Evaluacion by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Evaluacion.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Evaluacion editada correctamente"
        });
      } else {
        res.send({
          message: `No se pudo etitar Evaluacion con id=${id}. Maybe Evaluacion was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Evaluacion with id=" + id
      });
    });
};

// Delete a Evaluacion with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Evaluacion.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Evaluacion was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Evaluacion with id=${id}. Maybe Evaluacion was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Evaluacion with id=" + id
      });
    });
};

// Delete all Evaluaciones from the database.
exports.deleteAll = (req, res) => {
    Evaluacion.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Evaluacion were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Evaluacion."
      });
    });
};

// find all published Evaluaciones revisada o corregidas por el tutor
exports.findAllEvaluacionesRevisadas = (req, res) => {
    Evaluacion.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Evaluacion."
      });
    });
};

// find todas las Evaluaciones que pertenecen al PPP selecionado
exports.findAllIdPPP = (req, res) => {
  // const id=11;
  const id = req.params.id;
  Evaluacion.findAll({ where: { idPPP: id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Evaluacion."
      });
    });
};
// exports.yyy = (req, res) => {
//   // const id = req.params.id;
//   const idd= 4;
//   PPP.findOne({ where: { id: idd },include: user})
//     .then(data => {
//       res.send(data);
//       console.log(data); 
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving ppp."
//       });
//     });
// };

// const pppp = await PPP.findOne({
//   where: { nombre: "ppp uno" },
//   include: Class
// });



