import { Component } from '@angular/core';
import * as XLSX from 'xlsx'; // ไลบรารีสำหรับ Export Excel

@Component({
  selector: 'app-summary-oil',
  templateUrl: './summary-oil.component.html',
  styleUrls: ['./summary-oil.component.scss']
})
export class SummaryOilComponent {
  // ตัวแปรข้อมูล
  docNo = 'TN2411130001';
  division = 'GM';
  factory = '2';
  process = 'TURNING';
  dateReq = '2024-11-13';

  summaryItems = [
    {
      partNo: 'A5B70-4-M1A',
      revision: 1,
      process: 'TURNING',
      mcType: 'B-12',
      spec: 'ADS-0238',
      usage: 10000,
      mcNo: 5,
      qty: 1000,
      case: 'BRO',
      result1: 0,
      result2: 0,
      status: 'Received',
      setBy: 1000
    }
  ];

  // ฟังก์ชัน Export Excel
  exportToExcel(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.summaryItems);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Summary');
    XLSX.writeFile(wb, `summary_${this.docNo}.xlsx`);
  }
}
