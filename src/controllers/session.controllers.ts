import { AbstractControllerGroup } from "types";
import geoip from "geoip-country";
import { RequestHandler } from "express";
import fs from "fs";
import path from "path";

export class SessionControllerGroup extends AbstractControllerGroup {
  create: RequestHandler = (req, res, next) => {
    let { websiteId } = req.query;
    let { ip, location, clientId } = req.body;

    if (!(websiteId && true)) {
      res.status(400).send();
    } else {
      // exists ?
      this.databaseService.websites.findOne(
        { _id: websiteId },
        (err, found) => {
          if (err) {
            next(err);
          } else if (!found) {
            res.status(404).json("website not found");
          } else {
            this.databaseService.sessions.insert(
              { websiteId, ip, location, clientId, createdAt: Date.now() },
              (err, document) => {
                if (err) {
                  next(err);
                } else {
                  const sessionId = document["_id"];
                  fs.writeFile(
                    path.join(
                      __dirname,
                      `../database/recordings/${sessionId}.json`
                    ),
                    "[]",
                    (err) => {
                      if (err) next(err);
                      res.status(200).send(document);
                    }
                  );
                }
              }
            );
          }
        }
      );
    }
  };

  getAll: RequestHandler = (req, res, next) => {
    const { websiteId } = req.query;
    this.databaseService.sessions.find({ websiteId }, (err, sessions) => {
      if (err) {
        next(err);
      } else {
        res.json(
          sessions.map((session) => ({
            ...session,
            geoLocation: geoip.lookup(session.ip),
          }))
        );
      }
    });
  };

  getOne: RequestHandler = (req, res, next) => {
    const { sessionId } = req.params;

    if (!sessionId) {
      res.status(400).send();
    } else {
      this.databaseService.sessions.findOne(
        { _id: sessionId },
        (err, session) => {
          if (err) {
            next(err);
          } else {
            res.json(session);
          }
        }
      );
    }
  };

  deleteOne: RequestHandler = (req, res, next) => {
    const { sessionId } = req.params;
    this.databaseService.sessions.remove({ _id: sessionId }, (err, n) => {
      if (err) {
        next(err);
      } else {
        res.status(200).json(n);
      }
    });
  };

  deleteMany: RequestHandler = (req, res, next) => {
    const { sessionIdList } = req.body;
    this.databaseService.sessions.remove(
      { _id: { $in: sessionIdList } },
      { multi: true },
      (err, n) => {
        if (err) {
          next(err);
        } else {
          res.json(n);
        }
      }
    );
  };

  getRecordings: RequestHandler = (req, res, next) => {
    const { sessionId } = req.params;
    console.log({ sessionId, body: req.body });
    fs.readFile(
      path.resolve(`database/recordings/${sessionId}.json`),
      "utf-8",
      (err, data) => {
        data = JSON.parse(data);
        if (err) {
          next(err);
        } else {
          res.json(data);
        }
      }
    );
  };

  updateRecordings: RequestHandler = (req, res, next) => {
    const { sessionId } = req.params;

    this.databaseService.sessions.findOne(
      { _id: sessionId },
      (err, document) => {
        if (err) {
          next(err);
        } else if (!document) {
          console.error("No Document");
          res.status(404).json("No Document");
        } else {
          fs.writeFile(
            `database/recordings/${sessionId}.json`,
            JSON.stringify(req.body.events),
            (err) => {
              res.status(200).send("success");
              console.log("success");
            }
          );
        }
      }
    );
  };
}
