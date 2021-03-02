import { SessionControllerGroup } from "controllers/session.controllers";
import { Router } from "express";
import databaseService from "services/database";

const sessionsRouter = Router();
const sessionControllerGroup = new SessionControllerGroup(databaseService);

sessionsRouter
  .get("/", sessionControllerGroup.getAll)
  .post("/", sessionControllerGroup.create)
  .get("/:sessionId", sessionControllerGroup.getOne)
  .delete("/:sessionId", sessionControllerGroup.deleteOne)
  .get("/:sessionId/recordings", sessionControllerGroup.getRecordings)
  .post("/:sessionId/recordings", sessionControllerGroup.updateRecordings);

export default sessionsRouter;
