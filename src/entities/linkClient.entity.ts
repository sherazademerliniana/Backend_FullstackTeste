import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { Exclude } from "class-transformer";

@Entity()
export class LinksClient {
  @PrimaryGeneratedColumn("uuid")
  @Exclude()
  readonly id: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @ManyToOne((type) => Client, (client) => client.links, {
    onDelete: "CASCADE",
  })
  client: Client;
}
