
const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('postgres://postgres:123@localhost:5432/restaurant_management_sys');


async function authenticateDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


module.exports = { sequelize, authenticateDatabase };
