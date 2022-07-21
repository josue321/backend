const { PPP } = require("../models");
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;


///antes 4/7
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Contenido.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};


exports.yyy = (req, res) => {
  // const id = req.params.id;
  const idd= 6;
  User.findOne({ where: { id: idd },include: PPP})
    .then(data => {

      

      console.log(data);

      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving ppp."
      });
    });
};

/////--- 

