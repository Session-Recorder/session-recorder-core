const Datastore = require("nedb");

const websites = new Datastore({
  filename: "./database/websites.db",
  autoload: true,
});

const sessions = new Datastore({
  filename: "./database/sessions.db",
  autoload: true,
});

const clients = new Datastore({
  filename: "./database/clients.db",
  autoload: "true",
});

const recordings = new Datastore({
  filename: "./database/recordings.db",
  autoload: "true",
});

const database = {
  websites,
  sessions,
  clients,
  recordings,
};

module.exports = database;
// todo - change to mongodb