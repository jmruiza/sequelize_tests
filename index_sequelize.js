require('dotenv').config()
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME, 
  process.env.DB_USER, 
  process.env.DB_PASS, {
  dialect: 'mssql',
  dialectOptions: {
    options: {
      useUTC: false,
      dateFirst: 1,
      //port: parseInt(process.env.DB_PORT)
      port: 1433 // For docker
    }
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });