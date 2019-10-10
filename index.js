require('dotenv').config()

// Setting up a connection
const { Sequelize, Model, DataTypes } = require('sequelize');


// Passing parameters separately (BEFORE: Set values in .env file)
const Connection = new Sequelize({
  dialect: 'mssql',
  database: process.env.DB_NAME,  // database
  username: process.env.DB_USER,  // username
  password: process.env.DB_PASS,  // password
  port: '16044',
  loggin: true,
  host: 'localhost',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
    dialectOptions: {
      instanceName: process.env.DB_INSTANCE,
      encrypt: true,
      trustedConnection: false
    }
});

// Testing connection
Connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});





/*
class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });
  */