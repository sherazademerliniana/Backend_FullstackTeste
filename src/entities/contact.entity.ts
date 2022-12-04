import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";

@Entity()
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  full_name: string;

  @ManyToOne((type) => Client, (client) => client.contact)
  client: Client;
}
