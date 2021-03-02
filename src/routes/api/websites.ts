import { Router } from "express";
import databaseService from "services/database";
import { WebsiteControllerGroup } from "controllers/website.controllers";

const websitesRouter = Router();
const websiteControllerGroup = new WebsiteControllerGroup(databaseService);

websitesRouter
  .get("/", websiteControllerGroup.getAll)
  .post("/", websiteControllerGroup.create)
  .get("/:websiteId", websiteControllerGroup.getOne)
  .patch("/:websiteId", websiteControllerGroup.updateOne)
  .delete("/:websiteId", websiteControllerGroup.deleteOne)
  .get("/:websiteId/code", websiteControllerGroup.getTrackerCode);

export default websitesRouter;
