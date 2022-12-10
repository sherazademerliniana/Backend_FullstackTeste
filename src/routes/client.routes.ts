import { Router } from "express";
import {
  createClientController,
  deleteClientController,
  getClientController,
  updateClientController,
} from "../controllers/client/index.controller";

export const clientRouter = Router();

clientRouter.post("/:id_client", createClientController);
clientRouter.get("", getClientController);
clientRouter.delete("/:id", deleteClientController);
clientRouter.patch("/:id", updateClientController);
