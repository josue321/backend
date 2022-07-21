

module.exports = (sequelize, Sequelize) => {
    const Formato = sequelize.define("formato", {
      title: {
        type: Sequelize.STRING
      },
    });
  
    return Formato;
  };
   