import { Router } from "express";
import database from "services/database";
const router = Router();

router.post("/", (req, res) => {
	const createdAt = Date.now();

	database.clients.insert({ createdAt }, (err, doc) => {
		if (err) {
			res.status(500).send(err);
		} else {
			const clientId = doc._id;
			res.json({ clientId });
		}
	});
});

export default router;
