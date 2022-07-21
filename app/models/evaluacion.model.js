module.exports = (sequelize, Sequelize) => {
    const Evaluacion = sequelize.define("evaluacion", {
      formato: {
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.STRING
      },
      comentario: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.BOOLEAN
      },
      idPPP: {
        type: Sequelize.INTEGER
      },
    });
  
    return Evaluacion;
  };
   