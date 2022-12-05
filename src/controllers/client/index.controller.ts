import { Request, Response } from "express";
import {
  createClientService,
  findClient,
} from "../../services/client/createClient.service";
import { instanceToPlain } from "class-transformer";
import { getClientService } from "../../services/client/getClients.service";
import { deleteClientService } from "../../services/client/deleteClient.service";
import { updateClientService } from "../../services/client/updateClient.service";

export const createClientController = async (req: Request, res: Response) => {
  try {
    const clientCreated = await createClientService(req.body);
    setTimeout(async () => {
      return res
        .status(201)
        .send(instanceToPlain(await findClient(clientCreated.id)));
    }, 1000);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export const getClientController = async (req: Request, res: Response) => {
  const clientsFind = await getClientService();

  return res.status(200).send(instanceToPlain(clientsFind));
};

export const updateClientController = async (req: Request, res: Response) => {
  await updateClientService(req.body, req.params.id);

  return res.status(200).send();
};

export const deleteClientController = async (req: Request, res: Response) => {
  await deleteClientService(req.params.id);

  return res.status(204).send();
};
