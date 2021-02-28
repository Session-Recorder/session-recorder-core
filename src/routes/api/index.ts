import { Router } from "express";
import websitesRouter from "./websites";
import sessionsRouter from "./sessions";
import clientsRouter from "./clients";
import database from "../../services/database";
const apiUrl = "http://sebastianrcnt.iptime.org:3000";
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

router.get("/code/:websiteId", (req, res) => {
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
});

export default router;
