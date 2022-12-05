import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Client } from "./client.entity";
import { LinksContact } from "./linkContact.entity";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  full_name: string;

  @ManyToOne((type) => Client, (client) => client.contact)
  client: Client;

  @OneToMany(() => LinksContact, (links) => links.contact, {
    eager: true,
  })
  links: LinksContact[];
}
