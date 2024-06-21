import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[] = [];
  selectedSupplier: Supplier | null = null;

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.loadSuppliers();
  }

  loadSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(suppliers => this.suppliers = suppliers);
  }

  selectSupplier(supplier: Supplier): void {
    this.selectedSupplier = supplier;
  }

  addSupplier(supplier: Supplier): void {
    this.supplierService.createSupplier(supplier).subscribe(() => this.loadSuppliers());
  }

  updateSupplier(supplier: Supplier): void {
    if (supplier.idFour) {
      this.supplierService.updateSupplier(supplier.idFour, supplier).subscribe(() => this.loadSuppliers());
    }
  }

  deleteSupplier(id: number): void {
    this.supplierService.deleteSupplier(id).subscribe(() => this.loadSuppliers());
  }
}
