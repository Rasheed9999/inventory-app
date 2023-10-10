import { Component, OnInit } from '@angular/core';
import { ProcurementService } from '../procurement.service';
import { InventoryService } from '../inventory.service';

@Component({
 selector: 'app-procurement',
 templateUrl: './procurement.component.html',
 styleUrls: ['./procurement.component.scss'],
})
export class ProcurementComponent implements OnInit {
 lowStockItems: any[] = [];
 inventoryData: any[] = [];
 itemId: number = 0;
 quantity: number = 0;

 constructor(private procurementService: ProcurementService) {}

 ngOnInit(): void {
   this.fetchLowStockItems();
   this.procurementService.getInventoryData().subscribe(
    (data) => {
      this.inventoryData = data;
    },
    (error) => {
      console.error('Error fetching inventory data:', error);
    });
 }


 fetchLowStockItems(): void {
   this.procurementService.getItemsWithLowStock().subscribe(
     (data) => {
       this.lowStockItems = data;
     },
     (error) => {
       console.error('Error fetching low-stock items:', error);
       // Handle errors, show error messages, etc.
     }
   );
 }

 createPurchaseOrder(): void {
   if (this.itemId && this.quantity > 0) {
     this.procurementService
       .createPurchaseOrder(this.itemId, this.quantity)
       .subscribe(
         (response) => {
           console.log('Purchase order created successfully:', response);
           // Optionally, reset input fields or show a success message
         },
         (error) => {
           console.error('Error creating purchase order:', error);
           // Handle errors, show error messages, etc.
         }
       );
   } else {
     // Handle invalid input, show validation messages, etc.
   }
 }
}