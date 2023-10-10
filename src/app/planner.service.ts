import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlannerService {
  // Mock historical inventory data (Replace with actual data)
  private historicalData: any[] = [
    { itemId: 'item1', month: 'Jan', quantity: 100 },
    { itemId: 'item1', month: 'Feb', quantity: 110 },
    { itemId: 'item1', month: 'Mar', quantity: 105 },
    { itemId: 'item2', month: 'Jan', quantity: 80 },
    { itemId: 'item2', month: 'Feb', quantity: 85 },
    { itemId: 'item2', month: 'Mar', quantity: 90 },
    // Add more data for different months and items
  ];

  constructor() { }

  getHistoricalData(): any[] {
    return this.historicalData;
  }



  // Calculate average quantity for each item
  calculateAverageQuantity(): any[] {
    const averages: any[] = [];
    const itemSet = new Set();

    // Calculate the average for each item
    this.historicalData.forEach((data) => {
      const itemId = data.itemId;
      if (!itemSet.has(itemId)) {
        itemSet.add(itemId);
        const itemData = this.historicalData.filter((d) => d.itemId === itemId);
        const totalQuantity = itemData.reduce((acc, curr) => acc + curr.quantity, 0);
        const averageQuantity = totalQuantity / itemData.length;
        averages.push({ itemId, averageQuantity });
      }
    });

    return averages;
  }

  // Provide recommendations based on average quantity
  provideRecommendations(): any[] {
    const recommendations: any[] = [];

    // Loop through average data
    this.calculateAverageQuantity().forEach((data) => {
      const itemId = data.itemId;
      const averageQuantity = data.averageQuantity;

      // Define your recommendation logic here based on your business rules
      let recommendation = 'Maintain'; // Default recommendation
      console.log('Item ID:',itemId);
      console.log('Average Quantity:',averageQuantity)
      if (averageQuantity > 80 && averageQuantity <105) {
        recommendation = 'Increase'; // Suggest increasing inventory
        console.log('Rec:Inc');
      } else if (averageQuantity < 120) {
        recommendation = 'Decrease'; // Suggest decreasing inventory
        console.log('Rec:Dec');
      }

      recommendations.push({ itemId, recommendation });
    });

    return recommendations;
  }
}
