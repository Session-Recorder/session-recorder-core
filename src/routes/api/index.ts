import { Router } from "express";
import websitesRouter from "./websites";
import sessionsRouter from "./sessions";
import clientsRouter from "./clients";
import databaseService from "services/database";
import { SessionControllerGroup } from "controllers/session.controllers";

const router = Router();
const sessionControllerGroup = new SessionControllerGroup(databaseService);

router.use("/websites", websitesRouter);
router.use("/sessions", sessionsRouter);
router.use("/clients", clientsRouter);

// TODO - Move API
router.post("/delete-sessions", sessionControllerGroup.deleteMany);

export default router;
