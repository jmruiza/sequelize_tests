require('dotenv').config()

// Setting up a connection
const { Sequelize, Model, DataTypes } = require('sequelize');


// Passing parameters separately (BEFORE: Set values in .env file)
const Connection = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'sequelize-msnodesqlv8',
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: '16044',
  loggin: true,
  
  pool: {
    min: 0,
    max: 5,
    idle: 10000
  },

  dialectOptions: {
    instanceName: process.env.DB_INSTANCE,
    encrypt: true,
    trustedConnection: true
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