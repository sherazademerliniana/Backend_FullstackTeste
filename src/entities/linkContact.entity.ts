import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";
import { Exclude } from "class-transformer";

@Entity()
export class LinksContact {
  @PrimaryGeneratedColumn("uuid")
  @Exclude()
  readonly id: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @ManyToOne((type) => Contact, (contact) => contact.links, {
    onDelete: "CASCADE",
  })
  contact: Contact;
}
