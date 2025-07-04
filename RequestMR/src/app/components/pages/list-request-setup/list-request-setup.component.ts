import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; // นำเข้า Router
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-request-setup',
  templateUrl: './list-request-setup.component.html',
  styleUrls: ['./list-request-setup.component.scss']
})
export class ListRequestSetupComponent {
  items: any[] = []; // เก็บข้อมูลในตาราง
  currentPage: number = 1; // หน้าปัจจุบัน
  totalPages: number = 1; // จำนวนหน้าทั้งหมด (ตัวอย่างต้องคำนวณ)
  docNo: string = '';

  constructor(private router: Router,
    private route: ActivatedRoute)
    {} // Inject Router เพื่อใช้งาน


  ngOnInit() {
    this.loadItems(); // โหลดข้อมูลเมื่อ Component เริ่มทำงาน
    // ดึงค่าพารามิเตอร์ id จากเส้นทาง
    this.route.params.subscribe(params => {
      this.docNo = params['id'];
      console.log('Document No:', this.docNo);
    });

  }

  loadItems() {
    // ตัวอย่างข้อมูลจำลอง
    this.items = [
      { Docno: 'TN2411130001', Division: 'GM', Factory: 2, Date: '2024-11-13 09:42:46', Process: 'TURNING', TotalItem: 1000, Status: 'Finished' },
      { Docno: 'TN2411130002', Division: 'GM', Factory: 2, Date: '2024-11-13 13:37:26', Process: 'TURNING', TotalItem: 1000, Status: 'Finished' },
      { Docno: 'TN2412060002', Division: 'GM', Factory: 1, Date: '2024-12-06 14:49:46', Process: 'TURNING', TotalItem: 1, Status: 'Finished' },
      { Docno: 'TN2412060004', Division: 'GM', Factory: 1, Date: '2024-12-06 16:35:40', Process: 'TURNING', TotalItem: 1, Status: 'Finished' },
    ];
  }

  goToDetail(id: string): void {
    console.log('ID being passed:', id); // ตรวจสอบค่าที่ส่งเข้าไป
    if (id) {
      this.router.navigate(['/pages/detail-request-setup', id]);
    } else {
      console.error('Error: ID is undefined or null');
    }
  }


  deleteItem(item: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to delete Doc_no: ${item.Doc_no}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.items = this.items.filter(i => i.Doc_no !== item.Doc_no);
        Swal.fire('Deleted!', 'The document has been deleted.', 'success');
      }
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // โหลดข้อมูลสำหรับหน้าที่เลือก
      console.log(`เปลี่ยนไปยังหน้าที่: ${this.currentPage}`);
    }
  }
}
