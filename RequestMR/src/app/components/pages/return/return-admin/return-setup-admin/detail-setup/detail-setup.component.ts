import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-setup',
  templateUrl: './detail-setup.component.html',
  styleUrls: ['./detail-setup.component.scss']
})
export class DetailSetupComponent {
  // ข้อมูลสำหรับส่วนหัว
  headerInfo = {
    docNo: 'TN2411130002',
    division: 'GM',
    factory: '2',
    process: 'TURNING',
    date: new Date(), // วันที่เอกสาร
  };

  // ข้อมูลจำลองสำหรับตาราง
  tableData = [
    {
      itemNo: 'P111102A',
      partNo: 'A5870-4-M1A',
      mcType: 'B-12',
      spec: 'ADS-0238',
      mcNo: 5,
      qty: 1000,
      case: 'BRO',
      rev: 1,
      status: 'Ready',
      sentby: 'YY' ,
    },
    {
      itemNo: 'P222333B',
      partNo: 'A1234-7-B2',
      mcType: 'C-15',
      spec: 'XYZ-5678',
      mcNo: 7,
      qty: 500,
      case: 'SET',
      rev: 1,
      status: 'Waiting',
      sentby: 'YY' ,
    },
  ];

  // ข้อมูลสำหรับ Problem
  problemDetails: string = '';

  constructor(private router: Router) {}

  // ฟังก์ชันย้อนกลับ
  goBack(): void {
    this.router.navigate(['/pages/return-setup-admin']);
  }
}
