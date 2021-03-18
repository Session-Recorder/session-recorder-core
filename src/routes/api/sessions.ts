import * as sessionController from "controllers/session.controller";
import { Router } from "express";

const sessionRouter = Router();

sessionRouter
	.get("/", sessionController.getAll)
	.post("/", sessionController.create)
	.post("/delete-many", sessionController.deleteMany)
	.get("/:sessionId", sessionController.getOne)
	.delete("/:sessionId", sessionController.deleteOne)
	.get("/:sessionId/recordings", sessionController.getRecordings)
	.post("/:sessionId/recordings", sessionController.updateRecordings);

export default sessionRouter;
