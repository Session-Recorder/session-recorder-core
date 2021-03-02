import { RequestHandler } from "express";
import databaseService from "services/database";

export const create: RequestHandler = (req, res) => {
	const createdAt = Date.now();

	databaseService.clients.insert({ createdAt }, (err, doc) => {
		if (err) {
			res.status(500).send(err);
		} else {
			const clientId = doc["_id"];
			res.json({ clientId });
		}
	});
};
