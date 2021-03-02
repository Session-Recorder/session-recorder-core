import * as clientController from "controllers/client.controller";
import { Router } from "express";
const clientRouter = Router();

clientRouter.post("/", clientController.create);

export default clientRouter;
