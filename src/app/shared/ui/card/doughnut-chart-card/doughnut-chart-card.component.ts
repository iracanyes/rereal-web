import { Component } from '@angular/core';
import {DoughnutChartComponent} from "@shared/ui/charts";

@Component({
  selector: 'app-doughnut-chart-card',
  standalone: true,
  imports: [
    DoughnutChartComponent
  ],
  templateUrl: './doughnut-chart-card.component.html',
  styleUrl: './doughnut-chart-card.component.scss'
})
export class DoughnutChartCardComponent {
  protected readonly title: string = 'Historique des logs';
  protected readonly myData: any = {
    labels: ['Critical errors', 'Errors', 'Warnings', 'Debug', 'Info'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [300, 250,1200,600, 850],
        backgroundColor: [
          'rgb(174,28,28)',
          'rgb(187,70,10)',
          'rgb(187,143,6)',
          'rgb(106,163,18)',
          'rgb(11,132,186)',
        ],
        hoverOffset: 4
      }
    ]
  };
}
