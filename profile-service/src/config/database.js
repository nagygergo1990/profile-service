const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("student_db", "postgres", "root", {
  host: "database",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
