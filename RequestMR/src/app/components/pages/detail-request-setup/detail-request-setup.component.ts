import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-request-setup',
  templateUrl: './detail-request-setup.component.html',
  styleUrls: ['./detail-request-setup.component.scss']
})
export class DetailRequestSetupComponent  implements OnInit {
  docId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) {}

  ngOnInit(): void {
    // ดึงค่าพารามิเตอร์ id จากเส้นทาง
    this.docId = this.route.snapshot.paramMap.get('id');
    console.log('Doc ID:', this.docId);
  }
   // ตัวอย่างข้อมูลสำหรับแสดงในตาราง
   items = [
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
      accept: '',
      receive: '',
      return: '',
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
      accept: '',
      receive: '',
      return: '',
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
      accept: '',
      receive: '',
      return: '',
    },
  ];
  onReturn(): void {
    console.log('Return button clicked'); // แค่แสดงข้อความใน console เพื่อดูว่าเรียกฟังก์ชันหรือไม่
    this.router.navigate(['/pages/return-setup-user']); // เปลี่ยนหน้าเป็นหน้า��ี่ต้องการ
  }
}
