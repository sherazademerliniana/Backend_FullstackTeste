import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import {
  createContactService,
  findContact,
} from "../../services/contact/createContact.service";
import { getContactService } from "../../services/contact/getContact.service";
import { deleteContactService } from "../../services/contact/deleteContact.service";

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

export const getContactController = async (req: Request, res: Response) => {
  const contactsFind = await getContactService();

  return res.status(200).send(contactsFind);
};

export const updateContactController = async (
  req: Request,
  res: Response
) => {};

export const deleteContactController = async (req: Request, res: Response) => {
  await deleteContactService(req.params.id);

  return res.status(204).send();
};
