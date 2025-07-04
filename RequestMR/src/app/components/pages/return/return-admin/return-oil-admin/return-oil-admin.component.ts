import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; // Import SweetAlert2

@Component({
  selector: 'app-return-oil-admin',
  templateUrl: './return-oil-admin.component.html',
  styleUrls: ['./return-oil-admin.component.scss']
})
export class ReturnOilAdminComponent {
  constructor(private router: Router) {}

  // เก็บข้อมูล Pending Card
  pendingCards = [
    {
      status: 'Waiting',
      docNo: 'TN1234567',
      partNo: 'PN987654',
      returnDate: new Date('2023-12-18'), // วันที่รีเทิร์นกลับมา
      problem: ['Issue with alignment', 'Possible material defect'],
    },
    {
      status: 'Waiting',
      docNo: 'TN7654321',
      partNo: 'PN123987',
      returnDate: new Date('2023-12-17'), // วันที่รีเทิร์นกลับมา
      problem: ['Incomplete dimensions', 'Requires rework'],
    },
  ];

  // ฟังก์ชันสำหรับไปที่หน้า Detail
  goToDetail(docNo: string): void {
    console.log('Navigating to Detail page...');
    this.router.navigate(['/pages/detail-oil']);
  }

  // ฟังก์ชันสำหรับ Confirm การทำงาน (แสดง Popup)
  confirmPending(docNo: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to confirm this pending task?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Confirm!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Pending Confirmed!');
        Swal.fire('Confirmed!', 'The task has been confirmed.', 'success');
      } else {
        console.log('Confirmation cancelled.');
      }
    });
  }

  // ฟังก์ชันสำหรับย้อนกลับ
  goBack(): void {
    console.log('Going back to previous page...');
    this.router.navigate(['/pages/return-admin']);
  }
}
