import { Component } from '@angular/core';
import {DoughnutChartComponent, StackedBarLineChartComponent} from "@shared/ui/charts";

@Component({
  selector: 'app-report-resume-chart',
  standalone: true,
  imports: [
    DoughnutChartComponent,
    StackedBarLineChartComponent
  ],
  templateUrl: './report-resume-chart.component.html',
  styleUrl: './report-resume-chart.component.scss'
})
export class ReportResumeChartComponent {
  protected readonly title: string = 'Historique des problèmes traités'
  protected readonly myData: any =  {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [26,32,15,51,2,19,67,84,51,32,34,64],
        borderColor: 'rgb(49,46,129)',
        backgroundColor: 'rgb(99,102,141)',
        stack: 'combined',
        type: 'bar'
      },
      {
        label: 'Dataset 2',
        data: [26,32,15,51,2,19,67,84,51,32,34,64],
        borderColor: 'rgb(131,24,67)',
        backgroundColor: 'rgb(219,39,119)',
        stack: 'combined'
      }
    ]
  };
}
