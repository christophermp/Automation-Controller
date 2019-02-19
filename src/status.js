function updateIndicator() {
  let indicator = document.getElementById("indicator");
  indicator.className = navigator.onLine
    ? "badge badge-pill badge-success"
    : "badge badge-pill badge-danger";
  indicator.textContent = navigator.onLine ? "online" : "offline";
}

function ping() {
  var ping = require("ping");
  //var hosts = ["192.168.0.100", "google.com", "yahoo.com"];
  var hosts = [document.getElementById("ipAddress").value];
  // edited host.forEach
  hosts.forEach(function (host) {
    ping.sys.probe(host, function (isAlive) {
      var msg = isAlive
        ? "host " + host + " is alive"
        : "host " + host + " is dead";
      console.log(msg);
      document.getElementById("pingStatus").innerHTML =
        "Pinging " + msg;
    });
  });
}

function scanner() {
  var evilscan = require('evilscan');

  var options = {
    target: '10.0.0.161',
    port: '21-23',
    status: 'TROU', // Timeout, Refused, Open, Unreachable
    banner: true
  };

  var scanner = new evilscan(options);

  scanner.on('result', function (data) {
    // fired when item is matching options
    console.log(data);
    document.getElementById("pingStatus").innerHTML =
      JSON.stringify(data, undefined, 2);
  });

  scanner.on('error', function (err) {
    throw new Error(data.toString());
  });

  scanner.on('done', function () {
    // finished !
  });

  scanner.run();
}