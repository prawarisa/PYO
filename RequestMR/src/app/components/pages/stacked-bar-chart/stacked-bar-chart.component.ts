import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stacked-bar-chart',
  templateUrl: './stacked-bar-chart.component.html',

})
export class StackedBarChartComponent {
  @Input() data: any;
  @Input() title: string;

  options: any;

  constructor() {
    // กำหนด Options สำหรับ Stacked Bar Chart
    this.options = {
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    };
  }
}
