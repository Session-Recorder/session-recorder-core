import config from "config";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import createError from "http-errors";
import errorHandler from "middlewares/error.middleware";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";
import indexRouter from "routes/index";
import logger from "services/logger.service";

const app = express();

app.use(cors());

// database connection
mongoose
	.connect(config.mongoURI, {
		useNewUrlParser: true,
		bufferCommands: false,
		useUnifiedTopology: true,
	})
	.then(() => logger.log("info", "MongoDB successfully connected"))
	.catch((err) =>
		logger.log("error", `MongoDB connection failed. error: ${err}`)
	);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(morgan("dev"));

// parse request
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("public"));

// routers
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(new createError.NotFound("Route Not Found"));
});

app.use(errorHandler);

export default app;
