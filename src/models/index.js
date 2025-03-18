const sequelize = require("../config/database");
const Student = require("./student");

const initDB = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database synced!");
  } catch (error) {
    console.error("Database sync error:", error);
  }
};

module.exports = { sequelize, Student, initDB };
