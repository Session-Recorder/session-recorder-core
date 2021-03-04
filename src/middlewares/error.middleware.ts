import { HttpError } from "http-errors";
import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
	console.error(err);
	if (err instanceof HttpError) return res.status(err.statusCode).json(err);
	res.status(500).json(err);
};

export default errorHandler;
