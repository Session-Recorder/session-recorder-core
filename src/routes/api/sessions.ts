import { Router } from "express";
import { readFile, writeFile } from "fs";
import geoip from "geoip-country";
import { join, resolve } from "path";
import database from "../../services/database";

const router = Router();

router.get("/", (req, res) => {
	const { websiteId } = req.query;
	database.sessions.find({ websiteId }, (err, sessions) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.json(
				sessions.map((session) => ({
					...session,
					geoLocation: geoip.lookup(session.ip),
				}))
			);
		}
	});
});

router.get("/:sessionId", (req, res) => {
	const { sessionId } = req.params;

	if (!sessionId) {
		res.status(400).send();
	} else {
		database.sessions.findOne({ _id: sessionId }, (err, session) => {
			if (err) {
				res.status(500).json(err);
			} else {
				res.json(session);
			}
		});
	}
});

router.delete("/:sessionId", (req, res) => {
	const { sessionId } = req.params;
	database.sessions.remove({ _id: sessionId }, (err, n) => {
		if (err) {
			res.status(500).json(err);
		} else {
			res.status(200).json(n);
		}
	});
});

router.get("/:sessionId/recordings", (req, res) => {
	const { sessionId } = req.params;
	console.log({ sessionId, body: req.body });
	readFile(
		resolve(`database/recordings/${sessionId}.json`),
		"utf-8",
		(err, data) => {
			if (err) {
				res.status(500).json(err);
			} else {
				res.json(JSON.parse(data));
			}
		}
	);
});

// record saving
router.post("/:sessionId/recordings", (req, res) => {
	const { sessionId } = req.params;

	database.sessions.findOne({ _id: sessionId }, (err, document) => {
		if (err) {
			res.status(500).json(err);
		} else if (!document) {
			res.status(404).json("No Document");
		} else {
			writeFile(
				join(__dirname, `../database/recordings/${sessionId}.json`),
				JSON.stringify(req.body.events),
				(err) => {
					res.status(200).send("success");
				}
			);
		}
	});
});

router.post("/", (req, res) => {
	let { websiteId } = req.query;
	let { ip, location, clientId } = req.body;

	if (!(websiteId && true)) {
		res.status(400).send();
	} else {
		// exists ?
		database.websites.findOne({ _id: websiteId }, (err, found) => {
			if (err) {
				res.status(500).json(err);
			} else if (!found) {
				res.status(404).json("website not found");
			} else {
				database.sessions.insert(
					{ websiteId, ip, location, clientId, createdAt: Date.now() },
					(err, document) => {
						if (err) {
							res.status(500).json(err);
						} else {
							const sessionId = document._id;
							writeFile(
								join(__dirname, `../database/recordings/${sessionId}.json`),
								"[]",
								(err) => {
									res.status(200).send(document);
								}
							);
						}
					}
				);
			}
		});
	}
});

export default router;
