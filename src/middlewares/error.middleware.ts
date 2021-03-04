import { HttpError } from "http-errors";
import { ErrorRequestHandler } from "express";
import logger from "services/logger.service";

const errorHandler: ErrorRequestHandler = (err: Error, req, res, next) => {
	logger.log("warn", err.message);
	if (err instanceof HttpError) return res.status(err.statusCode).json(err);
	res.status(500).json(err);
};

export default errorHandler;
