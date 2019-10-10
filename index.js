require('dotenv').config()

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var async = require('async');

// Create connection to database
var config = {
  server: 'localhost',
  authentication: {
    type: 'default',
    options: {
      userName: process.env.DB_USER,
      password: process.env.DB_PASS,
    }
  },
  options: {
      //port: 16044,
      database: process.env.DB_NAME,
      instanceName: process.env.DB_INSTANCE
  }
}

var connection = new Connection(config);

function getVehicles(callback) {
  console.log('Reading Vehicles...');

  // Read all rows from table
  request = new Request(
    //'SELECT @@VERSION',
    'SELECT VehicleID, VehicleName, Brand, Model, PlateNumber, EngineSerialNumber FROM orgVehicle WHERE DeletedOn IS NULL;',
    function(err, rowCount, rows) {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log(rowCount + ' row(s) returned');
        callback(null);
      }
    }
  );

  // Print the rows read
  var result = "";
  request.on('row', function(columns) {
      columns.forEach(function(column) {
          if (column.value === null) {
              console.log('NULL');
          } else {
              result += column.value + " ";
          }
      });
      console.log(result);
      result = "";
  });

  // Execute SQL statement
  connection.execSql(request);
}

function getEmployees(callback) {
  console.log('Reading Employees...');

  // Read all rows from table
  request = new Request(
    'SELECT E.EmployeeID, C.FirstName, C.LastNameFather, C.LastNameMother, P.PositionName FROM orgEmployee E JOIN orgContact C ON E.ContactID = C.ContactID JOIN orgEmployeePosition P ON E.PositionID = P.EmployeePositionID WHERE E.DeletedOn IS NULL;',
    function(err, rowCount, rows) {
      if (err) {
        callback(err);
      } else {
        console.log(rowCount + ' row(s) returned');
        callback(null);
      }
    }
  );

  // Print the rows read
  var result = "";
  request.on('row', function(columns) {
      columns.forEach(function(column) {
          if (column.value === null) {
              console.log('NULL');
          } else {
              result += column.value + " ";
          }
      });
      console.log(result);
      result = "";
  });

  // Execute SQL statement
  connection.execSql(request);
}

function getDepots(callback) {
  console.log('Reading Depots...');

  // Read all rows from table
  request = new Request(
    'SELECT DepotID, DepotName FROM orgDepot WHERE DeletedOn IS NULL;',
    function(err, rowCount, rows) {
      if (err) {
        callback(err);
      } else {
        console.log(rowCount + ' row(s) returned');
        callback(null);
      }
    }
  );

  // Print the rows read
  var result = "";
  request.on('row', function(columns) {
      columns.forEach(function(column) {
          if (column.value === null) {
              console.log('NULL');
          } else {
              result += column.value + " ";
          }
      });
      console.log(result);
      result = "";
  });

  // Execute SQL statement
  connection.execSql(request);
}

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected');

    // Execute queries
    async.waterfall([
      getVehicles,
      getEmployees,
      getDepots
    ])
  }
});

// Make queries
