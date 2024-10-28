import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Chart, ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent implements AfterViewInit {
  @Input() myId: string = '';
  @Input() data: any;
  @Input() title: string = '';

  ngAfterViewInit() {
    const ctx = document.getElementById(this.myId) as HTMLCanvasElement;

    const config = {
      type: 'pie',
      data: this.data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: this.title
          }
        }
      },
    } as ChartConfiguration;

    const chart = new Chart(ctx, config);
  }
}
