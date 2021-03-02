import databaseService from "services/database";
import geoip from "geoip-country";
import { RequestHandler } from "express";
import fs from "fs";
import path from "path";

export const create: RequestHandler = (req, res, next) => {
	let { websiteId } = req.query;
	let { ip, location, clientId } = req.body;

	if (!(websiteId && true)) {
		res.status(400).send();
	} else {
		// exists ?
		databaseService.websites.findOne({ _id: websiteId }, (err, found) => {
			if (err) {
				next(err);
			} else if (!found) {
				res.status(404).json("website not found");
			} else {
				databaseService.sessions.insert(
					{ websiteId, ip, location, clientId, createdAt: Date.now() },
					(err, document) => {
						if (err) {
							next(err);
						} else {
							const sessionId = document["_id"];
							fs.writeFile(
								path.join(
									__dirname,
									`../database/recordings/${sessionId}.json`
								),
								"[]",
								(err) => {
									if (err) next(err);
									res.status(200).send(document);
								}
							);
						}
					}
				);
			}
		});
	}
};

export const getAll: RequestHandler = (req, res, next) => {
	const { websiteId } = req.query;
	databaseService.sessions.find({ websiteId }, (err, sessions) => {
		if (err) {
			next(err);
		} else {
			res.json(
				sessions.map((session) => ({
					...session,
					geoLocation: geoip.lookup(session.ip),
				}))
			);
		}
	});
};

export const getOne: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;

	if (!sessionId) {
		res.status(400).send();
	} else {
		databaseService.sessions.findOne({ _id: sessionId }, (err, session) => {
			if (err) {
				next(err);
			} else {
				res.json(session);
			}
		});
	}
};

export const deleteOne: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;
	databaseService.sessions.remove({ _id: sessionId }, (err, n) => {
		if (err) {
			next(err);
		} else {
			res.status(200).json(n);
		}
	});
};

export const deleteMany: RequestHandler = (req, res, next) => {
	const { sessionIdList } = req.body;
	databaseService.sessions.remove(
		{ _id: { $in: sessionIdList } },
		{ multi: true },
		(err, n) => {
			if (err) {
				next(err);
			} else {
				res.json(n);
			}
		}
	);
};

export const getRecordings: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;
	console.log({ sessionId, body: req.body });
	fs.readFile(
		path.resolve(`database/recordings/${sessionId}.json`),
		"utf-8",
		(err, data) => {
			data = JSON.parse(data);
			if (err) {
				next(err);
			} else {
				res.json(data);
			}
		}
	);
};

export const updateRecordings: RequestHandler = (req, res, next) => {
	const { sessionId } = req.params;

	databaseService.sessions.findOne({ _id: sessionId }, (err, document) => {
		if (err) {
			next(err);
		} else if (!document) {
			console.error("No Document");
			res.status(404).json("No Document");
		} else {
			fs.writeFile(
				`database/recordings/${sessionId}.json`,
				JSON.stringify(req.body.events),
				(err) => {
					res.status(200).send("success");
					console.log("success");
				}
			);
		}
	});
};
