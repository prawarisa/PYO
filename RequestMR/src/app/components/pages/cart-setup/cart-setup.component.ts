import { Component, ViewEncapsulation  } from '@angular/core';
import Swal from 'sweetalert2'; // นำเข้า SweetAlert2 สำหรับการแสดงการแจ้งเตือน
import { Router } from '@angular/router'; // เพิ่ม Router

@Component({
  selector: 'app-cart-setup',
  templateUrl: './cart-setup.component.html',
  styleUrls: ['./cart-setup.component.scss'],
  encapsulation: ViewEncapsulation.None, // ปิดการแคปซูลสไตล์
})
export class CartSetupComponent {
  constructor(private router: Router) {} // เพิ่ม Router ใน Constructor
  // ตัวแปรสำหรับฟอร์ม
  division: string = '';
  factory: string = '';
  process: string = '';

  // ข้อมูลตาราง (จะถูกดึงจาก DB ในภายหลัง)
  items = [
    {
      itemNo: 'IT001',
      partNo: 'PT001',
      process: 'Drilling',
      mcType: 'MC-A',
      spec: 'Spec-1',
      mcNo: '123',
      qty: '100',
      case: 'Case1',
      rev: 'Rev1',
    },
    {
      itemNo: 'IT002',
      partNo: 'PT002',
      process: 'Cutting',
      mcType: 'MC-B',
      spec: 'Spec-2',
      mcNo: '456',
      qty: '200',
      case: 'Case2',
      rev: 'Rev2',
    },
  ];

  // ฟังก์ชันลบแถวข้อมูล
  deleteItem(index: number) {
    this.items.splice(index, 1);
    console.log('Item deleted at index:', index);
  }
   // ฟังก์ชันแสดง popup ยืนยันการสร้างเอกสาร
   showCreateDocPopup(): void {
    Swal.fire({
      title: 'Do you want to create a new document?',
      text: 'Please confirm to proceed.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Create',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Document Created!',
          'Your document has been created successfully.',
          'success'
        ).then(() => {
          // เมื่อผู้ใช้กด OK ให้เปลี่ยนเส้นทางไปยังหน้าอื่น
          this.router.navigate(['/pages/list-request-setup']);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Document creation has been cancelled.', 'info');
      }
    });
  }
}
