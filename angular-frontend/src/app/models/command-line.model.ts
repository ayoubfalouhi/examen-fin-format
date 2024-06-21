import { Command } from './command.model';
import { Product } from './product.model';

export class CommandLine {
  idOrderLine: number | undefined;
  quantity: number | undefined;
  order: Command | undefined;
  product: Product | undefined;
}
