import { Router } from "express";
import apiRouter from "./api/index";

const router = Router();
router.use("/api", apiRouter);

router.get("/", (_, res) => {
	res.send("Central API");
});

export default router;
