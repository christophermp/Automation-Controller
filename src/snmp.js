function snmp() {
  var snmp = require("net-snmp");
  //wrong: var oids = ["iso.3.6.1.2.1.43.8.2.1.12.1.1"];
  // correct

  var oids = ["1.3.6.1.2.1.1.5.0", "1.3.6.1.2.1.1.6.0"];

  var session = snmp.createSession("192.168.0.100", "public");

  session.get(oids, function(error, varbinds) {
    if (error) {
      console.error(error);
    } else {
      for (var i = 0; i < varbinds.length; i++)
        if (snmp.isVarbindError(varbinds[i]))
          console.error(snmp.varbindError(varbinds[i]));
        else console.log(varbinds[i].oid + " = " + varbinds[i].value);
    }
  });
}
