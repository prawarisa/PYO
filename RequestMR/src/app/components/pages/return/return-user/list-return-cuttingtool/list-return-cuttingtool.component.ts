import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-return-cuttingtool',
  templateUrl: './list-return-cuttingtool.component.html',
  styleUrls: ['./list-return-cuttingtool.component.scss']
})
export class ListReturnCuttingtoolComponent {
  constructor(private router: Router) {}
  // ข้อมูลตัวอย่าง
  items = [
    {
      status: 'Waiting',
      docNo: 'XXXXXXX',
      partNo: 'XXXXXXX',
      problem: 'XXXXXXXXXXXXXXXXXX',
      actions: ['Detail'],
    },
    {
      status: 'Confirm',
      docNo: 'XXXXXXX',
      partNo: 'XXXXXXX',
      problem: 'XXXXXXXXXXXXXXXXXX',
      actions: ['Detail', 'Confirm', 'Return'],
    },
  ];

  // ฟังก์ชันเมื่อกดปุ่ม Detail
  onDetail(docNo: string): void {
    console.log('Detail clicked for Doc No:', docNo);
    this.router.navigate(['/pages/detail-return-cuttingtool']); // เปลี่ยนหน้าเป็นหน้า /pages/return-cleaning
  }

  // ฟังก์ชันเมื่อกดปุ่ม Confirm
  onConfirm(docNo: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to confirm this document: ${docNo}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4caf50', // สีเขียว
      cancelButtonColor: '#d33',    // สีแดง
      confirmButtonText: 'Yes, Confirm',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // ถ้าผู้ใช้กดยืนยัน
        Swal.fire({
          title: 'Confirmed!',
          text: `Document ${docNo} has been confirmed.`,
          icon: 'success',
          confirmButtonColor: '#4caf50',
        });

        // คุณสามารถเพิ่มฟังก์ชันอื่นที่ต้องการ เช่นการเรียก API
        console.log('Confirmed document:', docNo);
      } else {
        // ถ้าผู้ใช้กดยกเลิก
        console.log('Confirmation canceled for document:', docNo);
      }
    });
  }

  // ฟังก์ชันเมื่อกดปุ่ม Return
  onReturn(docNo: string): void {
    console.log('Return clicked for Doc No:', docNo);
    this.router.navigate(['/pages/return-cuttingtool-user']); // เปลี่ยนหน้าเป็นหน้า /pages/return-cleaning
  }
}
