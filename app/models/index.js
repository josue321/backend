const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
////yo 5/7
db.formatos = require("./formato.model.js")(sequelize, Sequelize);
db.formatos_subidos = require("./formato_subido.model.js")(sequelize, Sequelize);
//


db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
//////
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];



db.PPP = require("./PPP.model.js")(sequelize, Sequelize);
db.evaluacion = require("./evaluacion.model.js")(sequelize, Sequelize);
// db.PPP.belongsToMany(db.user, {
//   through: "PPP_user",
//   foreignKey: "PPPId",
//   otherKey: "userId"
// });
// db.user.belongsToMany(db.PPP, { 
//   through: "PPP_user",
//   foreignKey: "userId",
//   otherKey: "PPPId"
// });

module.exports = db;
