import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root',
})
export class ProcurementService {
 private apiUrl = 'http://localhost:8080'; 
 //private apiUrl = 'http://localhost:8080/procurement/purchase-order';
 private apiUrl1 = 'http://localhost:8080/getInventorys'; // Replace with your API endpoint


 

 getInventoryData(): Observable<any[]> {
  
   return this.http.get<any[]>(this.apiUrl1,);
 }
                                          

 constructor(private http: HttpClient) {}

 // Existing method for creating purchase orders
 createPurchaseOrder(itemId: number, quantity: number): Observable<any> {
 
  
   const url=`${this.apiUrl}/procurement/purchase-order/${itemId}/${quantity}`;
   console.log(url);
   return this.http.post<any>(url,null);
 }

 // New method to fetch items with low stock
 getItemsWithLowStock(): Observable<any[]> {
   return this.http.get<any[]>(`${this.apiUrl}/procurement/low-stock-items`);
 }
}