import AppDataSource from "../../data-source";
import { Client } from "../../entities/client.entity";
import { LinksClient } from "../../entities/linkClient.entity";
import { IClientRequest } from "../../interfaces/client";
import { ILinks } from "../../interfaces/links";

export const createClientService = async ({
  full_name,
  links,
}: IClientRequest) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const client = clientRepository.create({
    full_name,
  });
  await clientRepository.save(client);

  await createLinks(client.id, links);

  return client;
};

const createLinks = (id_client: string, links: ILinks[]) => {
  const linkClientRepository = AppDataSource.getRepository(LinksClient);

  const linksCreated = links.map(async ({ email, telephone }) => {
    const newLink = linkClientRepository.create({
      email,
      telephone,
      client: { id: id_client },
    });

    await linkClientRepository.save(newLink);

    return newLink;
  });

  return linksCreated;
};

export const findClient = async (id: string) => {
  const clientRepository = AppDataSource.getRepository(Client);

  const findClient = await clientRepository.findOneBy({
    id: id,
  });

  return findClient;
};
