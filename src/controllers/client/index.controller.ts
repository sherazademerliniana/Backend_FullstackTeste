import { Request, Response } from "express";
import {
  createClientService,
  findClient,
} from "../../services/client/createClient.service";
import { instanceToPlain } from "class-transformer";
import { getClientService } from "../../services/client/getClients.service";

export const createClientController = async (req: Request, res: Response) => {
  const clientCreated = await createClientService(req.body);

  setTimeout(async () => {
    return res
      .status(201)
      .send(instanceToPlain(await findClient(clientCreated.id)));
  }, 1000);
};

export const getClientController = async (req: Request, res: Response) => {
  const clientsFind = await getClientService();

  return res.status(200).send(instanceToPlain(clientsFind));
};

export const updateClientController = async (req: Request, res: Response) => {};

export const deleteClientController = async (req: Request, res: Response) => {};
