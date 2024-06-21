import { Supplier } from './supplier.model';

export class Product {
  idProd: number | undefined;
  productName: string | undefined;
  stockQuantity: number | undefined;
  price: number | undefined;
  supplier: Supplier | undefined;
}
