const dbConfig = require("../../config/config.js");
const Sequelize = require("sequelize");

const environment = process.env.NODE_ENV || "development";

const sequelize = new Sequelize(
  dbConfig[environment].database,
  dbConfig[environment].username,
  dbConfig[environment].password,
  {
    host: dbConfig[environment].host,
    dialect: dbConfig[environment].dialect,
    operatorsAliases: false,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;
