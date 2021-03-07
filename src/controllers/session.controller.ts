import { eventWithTime } from "rrweb/typings/types";
import { RequestHandler } from "express";
import fs from "fs";
import geoip from "geoip-country";
import createError from "http-errors";
import path from "path";
import databaseService from "services/database.service";
import logger from "services/logger.service";
import { Types } from "mongoose";

export const create: RequestHandler = (req, res, next) => {
	let { websiteId } = req.query;
	let { ip, location, clientId } = req.body;

	if (!websiteId) {
		return next(new createError.BadRequest());
	}
	// exists ?
	databaseService.websites.findOne({ _id: websiteId }, {}, {}, (err, found) => {
		if (err) return next(err);
		if (!found) return next(new createError.NotFound("website not found"));

		databaseService.sessions.create(
			{ websiteId, ip, location, clientId, createdAt: Date.now() },
			(err, document) => {
				if (err) return next(err);

				const sessionId = document["_id"];
				fs.writeFile(
					path.join(__dirname, `../../database/recordings/${sessionId}.json`),
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
	databaseService.sessions.find(
		{ websiteId: websiteId.toString() },
		{},
		{},
		(err, sessions) => {
			console.log(sessions);
			if (err) return next(err);
			res.json(
				sessions.map((session) => ({
					...session.toObject(),
					geoLocation: geoip.lookup(session.ip),
				}))
			);
		}
	);
};

export const getOne: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;
	if (!sessionId) return next(new createError.BadRequest());

	databaseService.sessions.findOne(
		{ _id: sessionId },
		{},
		{},
		(err, session) => {
			if (err) return next(err);
			res.json(session.toObject());
		}
	);
};

export const deleteOne: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;

	databaseService.sessions.deleteOne({ _id: sessionId }, {}, (err) => {
		if (err) return next(err);
		res.status(204).send();
	});
};

export const deleteMany: RequestHandler = (req, res, next) => {
	const { sessionIdList } = req.body;
	databaseService.sessions.deleteMany(
		{ _id: { $in: sessionIdList } },
		{},
		(err) => {
			if (err) return next(err);
			res.status(204).send();
		}
	);
};

export const getRecordings: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;
	logger.info(JSON.stringify({ sessionId, body: req.body }, null, 2));
	fs.readFile(
		path.join(__dirname, `../../database/recordings/${sessionId}.json`),
		"utf-8",
		(err, data) => {
			if (err) return next(err);
			res.json(JSON.parse(data));
		}
	);
};

export const updateRecordings: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;

	databaseService.sessions.findOne(
		{ _id: sessionId },
		{},
		{},
		(err, document) => {
			if (err) return next(err);
			if (!document) {
				logger.warn("No Document");
				return next(new createError.NotFound("No Document"));
			}

			const filePath = path.join(
				__dirname,
				`../../database/recordings/${sessionId}.json`
			);
			fs.readFile(filePath, (err, data) => {
				if (err) return next(err);
				const events: Array<eventWithTime> = JSON.parse(data.toString());
				events.push(...req.body.events);
				fs.writeFile(filePath, JSON.stringify(events), {}, (err) => {
					if (err) return next(err);
					res.sendStatus(200);
					logger.info("successfully saved");
				});
			});
		}
	);
};
