import { Router } from "express";
import * as websiteController from "controllers/website.controller";

const websiteRouter = Router();

websiteRouter
	.get("/", websiteController.getAll)
	.post("/", websiteController.create)
	.get("/:websiteId", websiteController.getOne)
	.patch("/:websiteId", websiteController.updateOne)
	.delete("/:websiteId", websiteController.deleteOne)
	.get("/:websiteId/code", websiteController.getTrackerCode);

export default websiteRouter;
