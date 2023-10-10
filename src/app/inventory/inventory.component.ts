import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  inventoryData: any[] = [];

  constructor(private inventoryService: InventoryService) { }


  ngOnInit(): void {
    this.inventoryService.getInventoryData().subscribe(
      (data) => {
        this.inventoryData = data;
 
        // Calculate low stock status for each item
        
        this.inventoryData.forEach(item => {
          
          item.isLowStock = item.quantityAvailable < item.reorderThreshold;
          console.log(`Item ${item.itemName} isLowStock: ${item.isLowStock}`);


          
        });
      },
      (error) => {
        console.error('Error fetching inventory data:', error);
      }
    );
  }
}
