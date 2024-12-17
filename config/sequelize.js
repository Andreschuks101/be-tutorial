const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("tutorial_db", "root", "Andreschuks10", {
  host: "localhost",
  dialect: "mysql",
  logging: true,
});

module.exports = sequelize;
