import express from "express";
import { readFile, writeFile } from "fs";
import { join, resolve } from "path";
const apiUrl = "http://sebastianrcnt.iptime.org:3000";
import _ from "lodash";
import geoip from "geoip-country";
import database from "services/database";

const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.send("Central API");
});

indexRouter.get("/api/code/:websiteId", (req, res) => {
  const { websiteId } = req.params;
  const code = `
  <script>
    window.sessionRecorderConfig = {
      websiteId: "${websiteId}",
      apiUrl: "${apiUrl}",
    };
  </script>
  <script src="${apiUrl}/bundle/index.js"></script>
  `;
  res.json(code);
});

indexRouter.post("/api/clients", (req, res) => {
  const createdAt = Date.now();

  database.clients.insert({ createdAt }, (err, doc) => {
    if (err) {
      res.status(500).send(err);
    } else {
      const clientId = doc._id;
      res.json({ clientId });
    }
  });
});

indexRouter.get("/api/websites", (req, res) => {
  database.websites.find({}, (err, websites) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(websites);
    }
  });
});

indexRouter.post("/api/websites", (req, res) => {
  const { name, domain, description } = req.body;

  database.websites.insert(
    { name, domain, description, sessions: [] },
    (err, website) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send("Created");
      }
    }
  );
});

indexRouter.get("/api/websites/:websiteId", (req, res) => {
  const { websiteId } = req.params;

  database.websites.findOne({ _id: websiteId }, (err, website) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(website);
    }
  });
});

indexRouter.patch("/api/websites/:websiteId", (req, res) => {
  const { websiteId } = req.params;
  const data = req.body;

  console.log({ data });
  database.websites.update(
    {
      _id: websiteId,
    },
    {
      $set: _.pick(data, ["name", "domain", "description"]),
    },
    (err, n) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(n);
      }
    }
  );
});

indexRouter.delete("/api/websites/:websiteId", (req, res) => {
  const { websiteId } = req.params;
  database.websites.remove({ _id: websiteId }, (err, n) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(n);
    }
  });
});

indexRouter.get("/api/sessions", (req, res) => {
  const { websiteId } = req.query;
  database.sessions.find({ websiteId }, (err, sessions) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(
        sessions.map((session) => ({
          ...session,
          geoLocation: geoip.lookup(session.ip),
        }))
      );
    }
  });
});

indexRouter.get("/api/sessions/:sessionId", (req, res) => {
  const { sessionId } = req.params;

  if (!sessionId) {
    res.status(400).send();
  } else {
    database.sessions.findOne({ _id: sessionId }, (err, session) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(session);
      }
    });
  }
});

indexRouter.delete("/api/sessions/:sessionId", (req, res) => {
  const { sessionId } = req.params;
  database.sessions.remove({ _id: sessionId }, (err, n) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(n);
    }
  });
});

indexRouter.post("/api/delete-sessions/", (req, res) => {
  const { sessionIdList } = req.body;
  database.sessions.remove(
    { _id: { $in: sessionIdList } },
    { multi: true },
    (err, n) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(n);
      }
    }
  );
});

indexRouter.get("/api/sessions/:sessionId/recordings", (req, res) => {
  const { sessionId } = req.params;
  console.log({ sessionId, body: req.body });
  readFile(
    resolve(`database/recordings/${sessionId}.json`),
    "utf-8",
    (err, data) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.json(JSON.parse(data));
      }
    }
  );
});

indexRouter.post("/api/sessions/:sessionId/recordings", (req, res) => {
  const { sessionId } = req.params;

  database.sessions.findOne({ _id: sessionId }, (err, document) => {
    if (err) {
      res.status(500).json(err);
    } else if (!document) {
      res.status(404).json("No Document");
    } else {
      writeFile(
        join(__dirname, `../database/recordings/${sessionId}.json`),
        JSON.stringify(req.body.events),
        (err) => {
          res.status(200).send("success");
        }
      );
    }
  });
});

indexRouter.post("/api/sessions", (req, res) => {
  let { websiteId } = req.query;
  let { ip, location, clientId } = req.body;

  if (!(websiteId && true)) {
    res.status(400).send();
  } else {
    // exists ?
    database.websites.findOne({ _id: websiteId }, (err, found) => {
      if (err) {
        res.status(500).json(err);
      } else if (!found) {
        res.status(404).json("website not found");
      } else {
        database.sessions.insert(
          { websiteId, ip, location, clientId, createdAt: Date.now() },
          (err, document) => {
            if (err) {
              res.status(500).json(err);
            } else {
              const sessionId = document._id;
              writeFile(
                join(__dirname, `../database/recordings/${sessionId}.json`),
                "[]",
                (err) => {
                  res.status(200).send(document);
                }
              );
            }
          }
        );
      }
    });
  }
});

export default indexRouter;
