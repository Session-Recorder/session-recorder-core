import { Router } from "express";
import websitesRouter from "./websites";
import sessionsRouter from "./sessions";
import clientsRouter from "./clients";
import database from "services/database";

const router = Router();

router.use("/websites", websitesRouter);
router.use("/sessions", sessionsRouter);
router.use("/clients", clientsRouter);

router.post("/delete-sessions", (req, res) => {
	const { sessionIdList } = req.body;
	database.sessions.remove(
		{ _id: { $in: sessionIdList } },
		{ multi: true },
		(err, n) => {
			if (err) {
				res.status(500).json(err);
			} else {
				res.status(200).json(n);
			}
		}
	);
});

export default router;
