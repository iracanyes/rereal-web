import {AfterViewInit, Component, Input} from '@angular/core';
import {Chart} from "chart.js";

@Component({
  selector: 'app-stacked-bar-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './stacked-bar-line-chart.component.html',
  styleUrl: './stacked-bar-line-chart.component.scss'
})
export class StackedBarLineChartComponent implements AfterViewInit{
  @Input() myID: string = '';
  @Input() data: any;
  @Input() title: string = '';

  ngAfterViewInit() {
    // Only work after view have been set, as it retrieve Html tags based on ID
    const ctx = document.getElementById(this.myID) as HTMLCanvasElement;

    const config = {
      type: 'line',
      data: this.data,
      options: {
        plugins: {
          title: {
            display: true,
            text: this.title
          }
        },
        scales: {
          y: {
            stacked: true
          }
        }
      },
    };

    const chart = new Chart(ctx, config);
  }
}
