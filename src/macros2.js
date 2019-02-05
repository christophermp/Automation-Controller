function runMacro2() {
  var net = require("net");

  var config = {
    host: "192.168.0.100",
    port: 9600
  };
  var name = document.getElementById("macro").value;
  var move = {
    forward: name + " \r\n",
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
