import { RequestHandler } from "express";
import databaseService from "services/database";
import { AbstractControllerGroup } from "types";

export class ClientControllerGroup extends AbstractControllerGroup {
  create: RequestHandler = (req, res) => {
    const createdAt = Date.now();

    this.databaseService.clients.insert({ createdAt }, (err, doc) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const clientId = doc["_id"];
        res.json({ clientId });
      }
    });
  };
}
