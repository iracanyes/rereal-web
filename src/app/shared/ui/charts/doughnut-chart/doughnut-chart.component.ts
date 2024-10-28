import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Chart, ChartConfiguration, registerables } from "chart.js";

@Component({
  selector: 'app-doughnut-chart',
  standalone: true,
  imports: [],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent implements AfterViewInit {
  @Input({ required: true }) myID: string = '';
  @Input() data: any;
  @Input() legendPosition: string = 'top';
  @Input() title: string = '';

  ngAfterViewInit(){
    const ctx = document.getElementById(this.myID) as HTMLCanvasElement;

    console.log('DoughnutChartComponent - Id :', this.myID);

    console.log(`ngOnInit - this.data => ${JSON.stringify(this.data)}`);
    const config = {
      type: 'doughnut',
      data: this.data,
      options: {
        responsive: true,
        aspectRatio: 2 | 1,
        maintainAspectRatio: true,
        layout: {
          autoPadding: true,
          padding: 0
        },
        plugins: {
          legend: {
            position: this.legendPosition,
            //fullSize: true,
            //maxWidth: 280,
            //maxHeight: 180,

          },
          title: {
            display: true,
            text: this.title,
            position: 'top',
            padding: 10,
            fullSize: false,
            font: {
              family: 'Inter',
              size: 14,
              weight: 'bold'
            }
          }
        }
      },
    }  as ChartConfiguration;

    Chart.register(...registerables);

    const chart = new Chart(ctx, config);


  }
}
