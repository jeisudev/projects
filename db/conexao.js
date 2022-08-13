var Connection = require('tedious').Connection;  
var config = {  
    server: 'your_server.database.windows.net',  
    authentication: {
        type: 'default',
        options: {
            userName: 'your_username', 
            password: 'your_password'  
        }
    },
    options: {
        
        encrypt: true,
        database: 'your_database' 
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
     
    console.log("Connected");  
    executeStatement1();  
});

connection.connect();

var Request = require('tedious').Request  
var TYPES = require('tedious').TYPES;  

function executeStatement1() {  
    request = new Request("INSERT SalesLT.Product (Name, ProductNumber, StandardCost, ListPrice, SellStartDate) OUTPUT INSERTED.ProductID VALUES (@Name, @Number, @Cost, @Price, CURRENT_TIMESTAMP);", function(err) {  
     if (err) {  
        console.log(err);}  
    });  
    request.addParameter('Name', TYPES.NVarChar,'SQL Server Express 2014');  
    request.addParameter('Number', TYPES.NVarChar , 'SQLEXPRESS2014');  
    request.addParameter('Cost', TYPES.Int, 11);  
    request.addParameter('Price', TYPES.Int,11);  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
          if (column.value === null) {  
            console.log('NULL');  
          } else {  
            console.log("Product id of inserted item is " + column.value);  
          }  
        });  
    });

    request.on("requestCompleted", function (rowCount, more) {
        connection.close();
    });
    connection.execSql(request); 