import { Component } from '@angular/core';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-cart-other',
  templateUrl: './cart-other.component.html',
  styleUrls: ['./cart-other.component.scss']
})
export class CartOtherComponent {
  division: string = '';
  factory: string = '';
  process: string = '';

  items = [
    { itemNo: 'IT001', partNo: 'PT001', process: 'Drilling', mcType: 'MC-A', spec: 'Spec-1', mcNo: 123, qty: 100, case: 'Case1'},
    { itemNo: 'IT002', partNo: 'PT002', process: 'Cutting', mcType: 'MC-B', spec: 'Spec-2', mcNo: 456, qty: 200, case: 'Case2' }
  ];
  constructor(private router: Router) {} // Inject Router

  // ฟังก์ชันลบแถวจากตาราง พร้อม Popup ยืนยัน
deleteRow(index: number): void {
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you really want to delete this item?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      this.items.splice(index, 1); // ลบข้อมูลจากตาราง
      Swal.fire('Deleted!', 'The item has been deleted.', 'success');
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire('Cancelled', 'The item is safe.', 'info');
    }
  });
}


  // ฟังก์ชันแสดง Popup เมื่อกดปุ่ม Create Doc no.
  createDoc(): void {
    Swal.fire({
      title: 'Confirm Create Doc No.',
      text: `Division: ${this.division || 'N/A'} | Factory: ${this.factory || 'N/A'} | Process: ${this.process || 'N/A'}`,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Create',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success!', 'Doc no. has been created.', 'success').then(() => {
          // เปลี่ยนไปยังหน้าใหม่
          this.router.navigate(['/pages/list-request-other']); // ใส่ path ที่ต้องการนำทาง
        });
      } else {
        Swal.fire('Cancelled', 'Operation has been cancelled.', 'error');
      }
    });
  }
}
