import { Client } from './client.model';

export class Command {
  idCMD: number | undefined;
  orderDate: string | undefined;
  client: Client | undefined;
}
