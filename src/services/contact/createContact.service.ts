import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { LinksContact } from "../../entities/linkContact.entity";
import { ILinks } from "../../interfaces/links";
import { IContact } from "../../interfaces/contact";

export const createContactService = async (
  { full_name, links }: IContact,
  id_client: string
) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const contact = contactRepository.create({
    full_name,
    client: { id: id_client },
  });
  await contactRepository.save(contact);

  await createLinks(contact.id, links);

  return contact;
};

const createLinks = (id_contact: string, links: ILinks[]) => {
  const linkContactRepository = AppDataSource.getRepository(LinksContact);

  const linksCreated = links.map(async ({ email, telephone }) => {
    const newLink = linkContactRepository.create({
      email,
      telephone,
      contact: { id: id_contact },
    });

    await linkContactRepository.save(newLink);

    return newLink;
  });

  return linksCreated;
};

export const findContact = async (id: string) => {
  const contactRepository = AppDataSource.getRepository(Contact);

  const findContact = await contactRepository.findOneBy({
    id: id,
  });

  return findContact;
};
