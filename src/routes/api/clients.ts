import { ClientControllerGroup } from "controllers/client.controllers";
import { Router } from "express";
import databaseService from "services/database";
const clientsRouter = Router();

const clientControllerGroup = new ClientControllerGroup(databaseService);

clientsRouter.post("/", clientControllerGroup.create);

export default clientsRouter;
