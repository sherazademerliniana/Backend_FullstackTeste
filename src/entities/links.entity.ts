import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { Contact } from "./contact.entity";

@Entity()
export class Links {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @ManyToOne((type) => Client, (client) => client.links)
  client: Client;

  @ManyToOne((type) => Contact, (contact) => contact.links)
  contact: Contact;
}
