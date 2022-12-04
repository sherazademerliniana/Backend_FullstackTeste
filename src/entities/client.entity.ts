import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Contact } from "./contact.entity";

@Entity()
export class Client {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  full_name: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contact: Contact[];
}
