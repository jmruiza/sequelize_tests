require('dotenv').config()

// Setting up a connection
const { Sequelize, Model, DataTypes } = require('sequelize');
const connectionString = `Driver={SQL Server Native Client 11.0};Server=localhost\\${process.env.DB_INSTANCE};Database=${process.env.DB_NAME};Trusted_Connection=yes;`
console.log(connectionString);

// Passing parameters separately (BEFORE: Set values in .env file)
const Connection = new Sequelize({
  dialect: 'mssql',
  dialectModulePath: 'sequelize-msnodesqlv8',
  //host: 'localhost',
  //username: process.env.DB_USER,
  //password: process.env.DB_PASS,
  //database: process.env.DB_DATABASE,

  dialectOptions: {
    connectionString,
    //driver: 'SQL Server Native Client 11.0',
    //instanceName: process.env.DB_INSTANCE,
    //trustedConnection: true
  },

  pool: {
    min: 0,
    max: 5,
    idle: 10000
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