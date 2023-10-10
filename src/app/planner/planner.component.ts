import { Component, OnInit } from '@angular/core';
import { PlannerService } from '../planner.service';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['../procurement/procurement.component.scss'],
})
export class PlannerComponent implements OnInit {
  historicalData: any[] = [];
  averageData: any[] = [];
  recommendations: any[] = [];

  constructor(private plannerService: PlannerService) { }

  ngOnInit(): void {
    this.historicalData = this.plannerService.getHistoricalData();
    this.averageData = this.plannerService.calculateAverageQuantity();
    this.recommendations = this.plannerService.provideRecommendations();
  }
}