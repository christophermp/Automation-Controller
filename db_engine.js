var Datastore = require("nedb");
var users = new Datastore({ filename: "users.db", autoload: true });
var tweets = new Datastore({ filename: "tweets.db", autoload: true });
var messages = new Datastore({ filename: "messages.db", autoload: true });
var macros = new Datastore({ filename: "macros.db", autoload: true });
