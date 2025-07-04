import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-receive-setup',
  templateUrl: './receive-setup.component.html',
  styleUrls: ['./receive-setup.component.scss']
})
export class ReceiveSetupComponent implements OnInit {
  receiveList: any[] = []; // เก็บข้อมูลรายการ
  currentPage: number = 1; // หน้าปัจจุบัน
  pageSize: number = 5; // จำนวนข้อมูลต่อหน้า
  totalPages: number = 1;

  constructor(private router: Router) { } // Inject Router เพื่อใช้งาน
  ngOnInit(): void {
    this.loadReceiveData();
  }

  loadReceiveData() {
    // ข้อมูลตัวอย่าง
    const allData = [
      { docNo: 'TN2411130003', division: 'GM', factory: 2, date: '2024-11-13 15:43:57', process: 'TURNING', status: 'Arranged' },
      { docNo: 'TN2411130004', division: 'GM', factory: 2, date: '2024-11-13 16:10:19', process: 'TURNING', status: 'Arranged' },
      { docNo: 'TN2411140001', division: 'GM', factory: 2, date: '2024-11-14 08:03:49', process: 'TURNING', status: 'Arranged' },
      { docNo: 'TN2412060003', division: 'GM', factory: 3, date: '2024-12-06 16:05:07', process: 'TURNING', status: 'Arranged' },
    ];

    // จำลองการแบ่งหน้าข้อมูล
    this.totalPages = Math.ceil(allData.length / this.pageSize);
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.receiveList = allData.slice(start, end);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadReceiveData();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadReceiveData();
    }
  }

  goToDetail(id: string): void {
    this.router.navigate(['/pages/detail-request-setup', id]); // นำทางไปยังหน้ารายละเอียด
  }
}
