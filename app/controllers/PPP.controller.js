
const { user } = require("../models");
const db = require("../models");
const PPP = db.PPP;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  if (!req.body.title) { 
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const ppp = {
    nombre: req.body.nombre
  };

  // Save Tutorial in the database
  PPP.create(ppp)

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
  const nombre = req.query.nombre;
  var condition = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  PPP.findAll({ where: condition })
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

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
const id = req.params.id;
  PPP.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find PPP with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving PPP with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  PPP.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "PPP was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update PPP with id=${id}. Maybe PPP was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating PPP with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  PPP.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "PPP was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete PPP with id=${id}. Maybe PPP was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete PPP with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  PPP.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} PPP were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all ppp."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  PPP.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ppp."
      });
    });
};


exports.findAllIdTutor = (req, res) => {
  // const id=6;
  const id = req.params.id;
  PPP.findAll({ where: { idTutor: id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ppp."
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



