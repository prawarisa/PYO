import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-summary-setup',
  templateUrl: './summary-setup.component.html',
  styleUrls: ['./summary-setup.component.scss']
})
export class SummarySetupComponent implements OnInit {
  // ตัวอย่างข้อมูลฟอร์ม
  docNo = 'TN2411130001';
  division = 'GM';
  factory = 2;
  process = 'TURNING';
  dateOfReq = '13/11/24';

  // ข้อมูลตารางหลัก
  mainData = [
    {
      docNo: 'TN2411130001',
      division: 'GM',
      factory: 2,
      date: '13/11/24',
      time: '09:42:46',
      itemNo: 'P111102A',
      partNo: 'A5B70-4-M1A',
      revision: 1,
      process: 'TURNING',
      mcType: 'B-12',
      spec: 'ADS-0238',
      mcNo: 5,
      qty: 1000,
      case: 'BRO',
    }
  ];

  // ข้อมูลตารางย่อย
  subData = [
    {
      partNo: 'A5B70-4-M1A',
      revision: 1,
      process: 'TURNING',
      mcType: 'B-12',
      spec: 'ADS-0238',
      mcNo: 5,
      qty: 1000,
      case: 'BRO',
      status: 'Received',
      setBy: 1000
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  exportToExcel() {
    // ปรับ subData ให้มีฟิลด์เดียวกับ mainData
    const formattedSubData = this.subData.map(item => ({
      docNo: '',
      division: '',
      factory: null,
      date: '',
      time: '',
      itemNo: '',
      partNo: item.partNo,
      revision: item.revision,
      process: item.process,
      mcType: item.mcType,
      spec: item.spec,
      mcNo: item.mcNo,
      qty: item.qty,
      case: item.case,
      status: item.status || '',
      setBy: item.setBy || ''
    }));

    // รวม mainData กับ formattedSubData
    const combinedData = [...this.mainData, ...formattedSubData];

    // สร้าง Worksheet และ Workbook
    const worksheet = XLSX.utils.json_to_sheet(combinedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Summary Report');

    // บันทึกไฟล์ Excel
    XLSX.writeFile(workbook, 'Summary_Report.xlsx');
  }
}
