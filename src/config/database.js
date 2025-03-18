const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("student_db", "postgres", "root", {
  host: "database2",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
