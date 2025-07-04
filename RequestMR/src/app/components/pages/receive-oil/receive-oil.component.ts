import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive-oil',
  templateUrl: './receive-oil.component.html',
  styleUrls: ['./receive-oil.component.scss']
})
export class ReceiveOilComponent {
  // ข้อมูลตาราง
  tableData = [
    {
      docNo: 'TN2411130003',
      division: 'GM',
      factory: '2',
      date: '2024-11-13 15:43:57',
      process: 'TURNING',
      status: 'Arranged',
    },
    {
      docNo: 'TN2411130004',
      division: 'GM',
      factory: '2',
      date: '2024-11-13 16:10:19',
      process: 'TURNING',
      status: 'Arranged',
    },
    {
      docNo: 'TN2411140001',
      division: 'GM',
      factory: '2',
      date: '2024-11-14 08:03:49',
      process: 'TURNING',
      status: 'Arranged',
    },
    {
      docNo: 'TN2412060003',
      division: 'GM',
      factory: '3',
      date: '2024-12-06 16:05:07',
      process: 'TURNING',
      status: 'Arranged',
    },
  ];

  constructor(private router: Router) {}

  // ฟังก์ชันสำหรับดูรายละเอียด
  goToDetail(docNo: string): void {
    this.router.navigate(['/pages/detail-request-oil', docNo]);
  }
}
