import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Contact } from "./contact.entity";
import { LinksClient } from "./linkClient.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  full_name: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.client, {
    eager: true,
  })
  contact: Contact[];

  @OneToMany(() => LinksClient, (links) => links.client, {
    eager: true,
  })
  links: LinksClient[];
}
