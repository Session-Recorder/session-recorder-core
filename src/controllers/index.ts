import { Router } from "express";
import apiRouter from "../routes/api/index";

const router = Router();

router.use("/api", apiRouter);
router.get("/", (_, res) => {
	res.json({
		message: "API Enterance"
	})
});

export default router;
