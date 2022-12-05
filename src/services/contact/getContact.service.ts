import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";

export const getContactService = async () => {
  const clientRepository = AppDataSource.getRepository(Contact);

  const clients = clientRepository.find();

  return clients;
};
