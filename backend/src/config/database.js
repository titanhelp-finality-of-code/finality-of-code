const { Sequelize } = require("sequelize");
require("dotenv").config();

// Initialize Sequelize using environment variables
const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT,
  storage: process.env.DB_STORAGE,
  logging: false, // cleaner console output
});

// Test the connection during setup
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();
module.exports = sequelize;
