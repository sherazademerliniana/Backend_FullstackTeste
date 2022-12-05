import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";

import { AppError } from "../../errors/AppError";

export const deleteClientService = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const contactFind = await clientRepository.findOneBy({ id: id });

  if (!contactFind) {
    throw new AppError("User not exists", 404);
  }

  await clientRepository.delete(id);
};
