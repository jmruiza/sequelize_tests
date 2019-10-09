require('dotenv').config()
console.log(process.env.DB_NAME, process.env.DB_PASS, process.env.DB_USER);

// Setting up a connection
const { Sequelize, Model, DataTypes } = require('sequelize');

// Passing parameters separately
const Connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'mssql',
    host: 'localhost',
    server: 'DESKTOP-C01AF5A\\COMPAC',
    dialectOptions: {
        encrypt: true,
        options: {
            useUTC: false,
            dateFirst: 1,
        }
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