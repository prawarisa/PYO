import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-request-cleaning',
  templateUrl: './detail-request-cleaning.component.html',
  styleUrls: ['./detail-request-cleaning.component.scss']
})
export class DetailRequestCleaningComponent {
   // ข้อมูลในช่อง input (ฟอร์ม)
   docData = {
    docNo: '',
    division: '',
    factory: '',
    process: '',
    dateOfReq: '',
  };

  // ข้อมูลตาราง
  tableData: any[] = [];
  constructor(
    private router: Router,

    ) {}

  ngOnInit(): void {
    this.loadTableData();
  }

  // จำลองข้อมูลในตาราง
  loadTableData(): void {
    this.tableData = [
      {
        itemNo: 'ITEM001',
        partNo: 'PART001',
        mcType: 'Type A',
        spec: 'Spec 1',
        mcNo: 'MC001',
        qty: 5,
        case: 'Top up',
        rev: 'Rev 1',
        status: 'Pending',
        sentBy: '',
      },
      {
        itemNo: 'ITEM002',
        partNo: 'PART002',
        mcType: 'Type B',
        spec: 'Spec 2',
        mcNo: 'MC002',
        qty: 3,
        case: 'Clean Tank',
        rev: 'Rev 2',
        status: 'Completed',
        sentBy: '',
      },
      {
        itemNo: 'ITEM003',
        partNo: 'PART003',
        mcType: 'Type C',
        spec: 'Spec 3',
        mcNo: 'MC003',
        qty: 7,
        case: 'Inspection',
        rev: 'Rev 3',
        status: 'In Progress',
        sentBy: '',
      },
    ];
  }
  onReturn(): void {
    console.log('Return button clicked'); // แค่แสดงข้อความใน console เพื่อดูว่าเรียกฟังก์ชันหรือไม่
    this.router.navigate(['/pages/return-cleaning-user']); // เปลี่ยนหน้าเป็นหน้า��ี่ต้องการ
  }
}
