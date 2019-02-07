var Datastore = require("nedb");
var users = new Datastore();
var users = new Datastore({ filename: "users.db", autoload: true });
var tweets = new Datastore({ filename: "tweets.db", autoload: true });
var messages = new Datastore({ filename: "messages.db", autoload: true });
var macros = new Datastore({ filename: "macros.db", autoload: true });
var people = [];

var scott = {
  name: "Scott Robinson",
  age: 28,
  twitter: "@ScottWRobinson"
};

var elon = {
  name: "Elon Musk",
  age: 44,
  twitter: "@elonmusk"
};

var jack = {
  name: "Jack Dorsey",
  age: 39,
  twitter: "@jack"
};

var lights100 = {
  name: "Lighis 100%",
  command: "lights100"
};

people.push(scott, elon, jack);

users.insert(people, function(err, docs) {
  docs.forEach(function(d) {
    console.log("Saved user:", d.name);
  });
});

macros.insert(lights100, function(err, doc) {
  console.log("Inserted", doc.name, "with ID", doc._id);
});
