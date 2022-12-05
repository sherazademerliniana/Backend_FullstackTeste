import AppDataSource from "../../data-source";
import { IContactUpdate } from "../../interfaces/contact";
import { Contact } from "../../entities/contact.entity";
import { AppError } from "../../errors/AppError";

export const updateContactService = async (
  { full_name }: IContactUpdate,
  id: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contactFind = await contactRepository.findOneBy({ id: id });

  if (!contactFind) {
    throw new AppError("User not exists", 404);
  }

  await contactRepository.update(id, { full_name: full_name });
};
