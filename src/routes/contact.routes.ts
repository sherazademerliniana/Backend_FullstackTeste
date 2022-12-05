import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  getContactController,
  updateContactController,
} from "../controllers/contact/index.controller";

export const contactRouter = Router();

contactRouter.post("/:id_client", createContactController);
contactRouter.get("", getContactController);
contactRouter.delete("/:id", deleteContactController);
contactRouter.patch("/:id", updateContactController);
