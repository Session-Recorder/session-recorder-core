import { Router } from "express";
import apiRouter from "./api/index";

const indexRouter = Router();

indexRouter.use("/api", apiRouter);
indexRouter.get("/", (_, res) => {
	res.json({
		message: "API Enterance",
	});
});

export default indexRouter;
