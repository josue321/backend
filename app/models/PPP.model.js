module.exports = (sequelize, Sequelize) => {
    const PPP = sequelize.define("ppp", {
      nombre: {
        type: Sequelize.STRING
      },
      idPracticante:{
        
        type: Sequelize.INTEGER
      },
      idTutor:{
        type: Sequelize.INTEGER
      }
    });
  
    return PPP;
  };