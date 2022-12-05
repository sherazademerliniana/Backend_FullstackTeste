import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import {
  createContactService,
  findContact,
} from "../../services/contact/createContact.service";

export const createContactController = async (req: Request, res: Response) => {
  const contactCreated = await createContactService(
    req.body,
    req.params.id_client
  );

  setTimeout(async () => {
    return res
      .status(201)
      .send(instanceToPlain(await findContact(contactCreated.id)));
  }, 1000);
};

export const getContactController = async (req: Request, res: Response) => {};

export const updateContactController = async (
  req: Request,
  res: Response
) => {};

export const deleteContactController = async (
  req: Request,
  res: Response
) => {};
