import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

import { AppError } from "../../errors/AppError";

export const deleteContactService = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactFind = await contactRepository.findOneBy({ id: id });

  if (!contactFind) {
    throw new AppError("User not exists", 404);
  }

  await contactRepository.delete(id);
};
