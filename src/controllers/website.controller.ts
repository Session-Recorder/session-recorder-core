import { RequestHandler } from "express";
import _ from "lodash";
import databaseService from "services/database.service";
import jwt from "jsonwebtoken";
import config from "config";

export const getAll: RequestHandler = (req, res, next) => {
	databaseService.websites.find({}, (err: any, websites: any) => {
		if (err) {
			next(err);
		} else {
			res.json(websites);
		}
	});
};

export const getOne: RequestHandler = (req, res, next) => {
	const { websiteId } = req.params;

	databaseService.websites.findOne({ _id: websiteId }, (err, website) => {
		if (err) {
			next(err);
		} else {
			res.json(website);
		}
	});
};

export const getTrackerCode: RequestHandler = (req, res, next) => {
	const payload = {
		websiteId: req.params.websiteId,
		apiUrl: config.apiUrl,
	};
	const token = jwt.sign(payload, config.jwtSecret);
	const code = `
    <script>window.sessionRecorderToken=${token};</script>
    <script src="${config.apiUrl}/bundle/index.js"></script>
    `;
	res.json(code);
};

export const create: RequestHandler = (req, res, next) => {
	const { name, domain, description } = req.body;
	databaseService.websites.insert(
		{ name, domain, description, sessions: [] },
		(err, website) => {
			if (err) {
				next(err);
			} else {
				res.status(201).json(website);
			}
		}
	);
};

export const updateOne: RequestHandler = (req, res, next) => {
	const { websiteId } = req.params;
	const data = req.body;

	databaseService.websites.update(
		{
			_id: websiteId,
		},
		{
			$set: _.pick(data, ["name", "domain", "description"]),
		},
		{}, // updateOptions
		(err: any, n: any) => {
			if (err) {
				next(err);
			} else {
				res.json(n);
			}
		}
	);
};

export const deleteOne: RequestHandler = (req, res, next) => {
	const { websiteId } = req.params;
	databaseService.websites.remove({ _id: websiteId }, (err, n) => {
		if (err) {
			next(err);
		} else {
			res.json(n);
		}
	});
};
