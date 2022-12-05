import { ILinks } from "../links";

export interface IContact {
  full_name: string;
  links: ILinks[];
}

export interface IContactUpdate {
  full_name: string;
}
