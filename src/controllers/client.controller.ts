import createError from "http-errors";
import { RequestHandler } from "express";
import databaseService from "services/database.service";

export const create: RequestHandler = (req, res, next) => {
	const createdAt = Date.now();

	databaseService.clients.create({ createdAt }, (err, doc) => {
		if (err) {
			return next(new createError.InternalServerError());
		}

		const clientId = doc["_id"];
		res.json({ clientId });
	});
};
