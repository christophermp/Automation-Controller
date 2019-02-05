function writeMacro() {
  var Datastore = require("nedb");
  var macros = new Datastore({ filename: "macros.db", autoload: true });

  var macroName = {
    name: document.getElementById("macroName1").value,
    command: document.getElementById("macroName2").value
  };

  macros.insert(macroName, function(err, doc) {
    console.log("Inserted function:", doc.name, "With command:", doc.command);
  });
}
