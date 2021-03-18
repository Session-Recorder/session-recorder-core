import { Router } from "express";
import websitesRouter from "./websites";
import sessionsRouter from "./sessions";
import clientsRouter from "./clients";

const router = Router();

router.use("/websites", websitesRouter);
router.use("/sessions", sessionsRouter);
router.use("/clients", clientsRouter);

export default router;
