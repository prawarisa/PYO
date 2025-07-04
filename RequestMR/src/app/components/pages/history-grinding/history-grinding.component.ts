import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-grinding',
  templateUrl: './history-grinding.component.html',
  styleUrls: ['./history-grinding.component.scss']
})
export class HistoryGrindingComponent {
  // ข้อมูลตาราง History
  historyData = [
    {
      docNo: 'TN2411130001',
      division: 'GM',
      factory: '2',
      date: '2024-11-13 09:42:46',
      process: 'TURNING',
      status: 'Finished',
    },
    {
      docNo: 'TN2411130002',
      division: 'GM',
      factory: '2',
      date: '2024-11-13 13:37:26',
      process: 'TURNING',
      status: 'Finished',
    },
    {
      docNo: 'TN2412060002',
      division: 'GM',
      factory: '1',
      date: '2024-12-06 14:49:46',
      process: 'TURNING',
      status: 'Finished',
    },
    {
      docNo: 'TN2412060004',
      division: 'GM',
      factory: '1',
      date: '2024-12-06 16:35:40',
      process: 'TURNING',
      status: 'Finished',
    },
  ];

  constructor(private router: Router) {}

  // ฟังก์ชันสำหรับดูรายละเอียด
  viewDetail(docNo: string): void {
    this.router.navigate(['/pages/summary-grinding', docNo]);
  }
}
