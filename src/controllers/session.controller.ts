import databaseService from "services/database.service";
import geoip from "geoip-country";
import { RequestHandler } from "express";
import fs from "fs";
import path from "path";
import createError from "http-errors";
import logger from "services/logger.service";

export const create: RequestHandler = (req, res, next) => {
	let { websiteId } = req.query;
	let { ip, location, clientId } = req.body;

	if (!(websiteId && true)) {
		return next(new createError.BadRequest());
	}
	// exists ?
	databaseService.websites.findOne({ _id: websiteId }, (err, found) => {
		if (err) return next(err);
		if (!found) return next(new createError.NotFound("website not found"));

		databaseService.sessions.insert(
			{ websiteId, ip, location, clientId, createdAt: Date.now() },
			(err, document) => {
				if (err) return next(err);

				const sessionId = document["_id"];
				fs.writeFile(
					path.join(__dirname, `../database/recordings/${sessionId}.json`),
					"[]",
					(err) => {
						if (err) next(err);
						res.status(200).send(document);
					}
				);
			}
		);
	});
};

export const getAll: RequestHandler = (req, res, next) => {
	const { websiteId } = req.query;
	databaseService.sessions.find({ websiteId }, (err, sessions) => {
		if (err) return next(err);
		res.json(
			sessions.map((session) => ({
				...session,
				geoLocation: geoip.lookup(session.ip),
			}))
		);
	});
};

export const getOne: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;
	if (!sessionId) return next(new createError.BadRequest());

	databaseService.sessions.findOne({ _id: sessionId }, (err, session) => {
		if (err) return next(err);
		res.json(session);
	});
};

export const deleteOne: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;

	databaseService.sessions.remove({ _id: sessionId }, (err, n) => {
		if (err) return next(err);
		res.status(200).json(n);
	});
};

export const deleteMany: RequestHandler = (req, res, next) => {
	const { sessionIdList } = req.body;
	databaseService.sessions.remove(
		{ _id: { $in: sessionIdList } },
		{ multi: true },
		(err, n) => {
			if (err) return next(err);
			res.json(n);
		}
	);
};

export const getRecordings: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;
	logger.info(JSON.stringify({ sessionId, body: req.body }, null, 2));
	fs.readFile(
		path.resolve(`database/recordings/${sessionId}.json`),
		"utf-8",
		(err, data) => {
			if (err) return next(err);
			res.json(JSON.parse(data));
		}
	);
};

export const updateRecordings: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;

	databaseService.sessions.findOne({ _id: sessionId }, (err, document) => {
		if (err) return next(err);
		if (!document) {
			logger.warn("No Document");
			return next(new createError.NotFound("No Document"));
		}

		fs.writeFile(
			`database/recordings/${sessionId}.json`,
			JSON.stringify(req.body.events),
			(err) => {
				res.status(200).send("success");
				logger.info("success");
			}
		);
	});
};
