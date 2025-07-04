import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',

})
export class PieChartComponent {
  @Input() data: any;
  @Input() title: string;

  options: any;

  constructor() {
    // กำหนด Options สำหรับ Pie Chart
    this.options = {
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
    };
  }
}
