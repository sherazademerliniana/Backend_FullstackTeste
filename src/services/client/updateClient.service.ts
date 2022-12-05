import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { IClientUpdate } from "../../interfaces/client";

import { AppError } from "../../errors/AppError";

export const updateClientService = async (
  { full_name }: IClientUpdate,
  id: string
) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const clientFind = await clientRepository.findOneBy({ id: id });

  if (!clientFind) {
    throw new AppError("User not exists", 404);
  }

  await clientRepository.update(id, { full_name: full_name });
};
