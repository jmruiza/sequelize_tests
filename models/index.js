require('dotenv').config()

const queries = require('./queries');
const SequelizeAuto = require('sequelize-auto')

sequelize-auto -h localhost -d JFVO5 -u sa -x Compaq2019. -p 1433  --dialect mssql -o models -C
sequelize-auto -o models -h localhost -d JFVO5 -u sa -x Compaq2019. -p 1433  --dialect mssql -c "models/config.json"

var auto = new SequelizeAuto(
  'JFVO', 
  'sa', 
  'Compaq2019.', {
    dialect: 'mssql',
    dialectOptions: {
      options: {
        useUTC: false,
        dateFirst: 1,
        //port: parseInt(process.env.DB_PORT)
        port: 1433
      }
    }
});

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});

/* //if you want to use with specified options
var auto = new SequelizeAuto('database', 'user', 'pass', {
    host: 'localhost',
    dialect:  mysql, //'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql', but install perticular dialect
    directory: false, // prevents the program from writing to disk
    port: 'port',
    additional: {
        timestamps: false
        //...
    },
    //tables:['orgVehicle', 'table2', 'table3']
    //...
})*/
