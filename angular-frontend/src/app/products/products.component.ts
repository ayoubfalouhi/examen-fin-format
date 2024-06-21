import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { Supplier } from '../models/supplier.model';
import { ProductService } from '../product.service';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  suppliers: Supplier[] = [];
  selectedProduct: Product | null = null;

  constructor(private productService: ProductService, private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadSuppliers();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  loadSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(suppliers => this.suppliers = suppliers);
  }

  selectProduct(product: Product): void {
    this.selectedProduct = product;
  }

  addProduct(product: Product): void {
    this.productService.createProduct(product).subscribe(() => this.loadProducts());
  }

  updateProduct(product: Product): void {
    if (product.idProd) {
      this.productService.updateProduct(product.idProd, product).subscribe(() => this.loadProducts());
    }
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => this.loadProducts());
  }

  filterProductsBySupplier(idFour: number): void {
    this.productService.getProductsBySupplier(idFour).subscribe(products => this.products = products);
  }
}
