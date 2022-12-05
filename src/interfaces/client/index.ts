import { ILinks } from "../links";

export interface IClientRequest {
  full_name: string;
  links: ILinks[];
}

export interface IClientUpdate {
  full_name: string;
}
