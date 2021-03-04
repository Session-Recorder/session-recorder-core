import { Router } from "express";
import websitesRouter from "./websites";
import sessionsRouter from "./sessions";
import clientsRouter from "./clients";
import * as sessionController from "controllers/session.controller";

const router = Router();

router.use("/websites", websitesRouter);
router.use("/sessions", sessionsRouter);
router.use("/clients", clientsRouter);

// TODO - Move API
router.post("/delete-sessions", sessionController.deleteMany);

export default router;
