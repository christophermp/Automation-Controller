function updateIndicator() {
  let indicator = document.getElementById("indicator");
  indicator.className = navigator.onLine
    ? "badge badge-pill badge-success"
    : "badge badge-pill badge-danger";
  indicator.textContent = navigator.onLine ? "online" : "offline";
}

function ping() {
  var ping = require("ping");
  var hosts = ["192.168.0.100", "google.com", "yahoo.com"];
  hosts.forEach(function(host) {
    ping.sys.probe(host, function(isAlive) {
      var msg = isAlive
        ? "host " + host + " is alive"
        : "host " + host + " is dead";
      console.log(msg);
      document.getElementById("macroSent").innerHTML =
        "Macro: " + name + " is sent!";
    });
  });
}
