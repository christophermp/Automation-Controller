/*function runMacro() {
  var python = require("python-shell");
  var path = require("path");
  let { PythonShell } = require("python-shell");
  PythonShell.run("./Echo_Client.py", null, function(err) {
    if (err) throw err;
    console.log("finished");
  });
}
*/
function runMacro() {
  var net = require("net");

  var config = {
    host: "192.168.0.100",
    port: 9600
  };

  var move = {
    forward: "run lightsOff \r\n",
    backward: "READER_BWD"
  };

  var client = new net.Socket();

  client.connect(
    {
      host: config.host,
      port: config.port
    },
    function() {
      console.log("connected to " + config.host + ":" + config.port);
      client.write(move.forward, function() {
        console.log("move forward command sent");
      });
    }
  );

  client.on("data", function(data) {
    var str = data.toString();

    if (str === "ACK") {
      setTimeout(function() {
        console.log("ACK received");
        client.write(move.backward, function() {
          console.log("move backward sent");
          client.end();
        });
      }, 3000);
    }
  });

  client.on("error", function(err) {
    console.log("Error : ", err);
  });

  client.on("close", function() {
    console.log("socket closed");
  });
}
