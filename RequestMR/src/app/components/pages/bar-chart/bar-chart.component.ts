import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',

})
export class BarChartComponent {
  @Input() data: any;
  @Input() title: string;

  options: any;

  constructor() {
    // กำหนด Options สำหรับ Bar Chart
    this.options = {
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
    };
  }
}
