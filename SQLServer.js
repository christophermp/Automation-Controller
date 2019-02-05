function connectToDatabase(ID) {
  var sql = require("mssql");
  // Database Configuration
  var config = {
    user: "sa",
    password: "P@$$w0rd",
    server: "localhost",
    database: "WideWorldImporters",
    options: {
      instanceName: "DEV17",
      encrypt: false
    }
  };

  // connect to your database
  sql.connect(config, function(err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query("SELECT * FROM INFORMATION_SCHEMA.TABLES", function(
      err,
      recordset
    ) {
      if (err) {
        console.log("Something went wrong");
      } else {
        //Conver Return Data Object to string
        var result = JSON.stringify(recordset);
        document.getElementById(ID).innerHTML = result;
      }
    });
  });
}
