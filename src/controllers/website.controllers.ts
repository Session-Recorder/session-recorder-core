import { AbstractControllerGroup } from "types";
import { RequestHandler } from "express";
import _ from "lodash";
import { apiUrl } from "config";

export class WebsiteControllerGroup extends AbstractControllerGroup {
  getAll: RequestHandler = (req, res, next) => {
    this.databaseService.websites.find({}, (err: any, websites: any) => {
      if (err) {
        next(err);
      } else {
        res.json(websites);
      }
    });
  };

  getOne: RequestHandler = (req, res, next) => {
    const { websiteId } = req.params;

    this.databaseService.websites.findOne(
      { _id: websiteId },
      (err, website) => {
        if (err) {
          next(err);
        } else {
          res.json(website);
        }
      }
    );
  };

  getTrackerCode: RequestHandler = (req, res, next) => {
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
  };

  create: RequestHandler = (req, res, next) => {
    const { name, domain, description } = req.body;
    this.databaseService.websites.insert(
      { name, domain, description, sessions: [] },
      (err, website) => {
        if (err) {
          next(err);
        } else {
          res.status(201).json(website);
        }
      }
    );
  };

  updateOne: RequestHandler = (req, res, next) => {
    const { websiteId } = req.params;
    const data = req.body;

    this.databaseService.websites.update(
      {
        _id: websiteId,
      },
      {
        $set: _.pick(data, ["name", "domain", "description"]),
      },
      {}, // updateOptions
      (err: any, n: any) => {
        if (err) {
          next(err);
        } else {
          res.json(n);
        }
      }
    );
  };

  deleteOne: RequestHandler = (req, res, next) => {
    const { websiteId } = req.params;
    this.databaseService.websites.remove({ _id: websiteId }, (err, n) => {
      if (err) {
        next(err);
      } else {
        res.json(n);
      }
    });
  };
}
