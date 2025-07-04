import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-request-cleaning',
  templateUrl: './list-request-cleaning.component.html',
  styleUrls: ['./list-request-cleaning.component.scss']
})
export class ListRequestCleaningComponent {
  items = [
    { docNo: 'TN2411130001', division: 'GM', factory: 2, date: '2024-11-13 09:42:46', process: 'TURNING', totalItem: 1000, status: 'Finished' },
    { docNo: 'TN2411130002', division: 'GM', factory: 2, date: '2024-11-13 13:37:26', process: 'TURNING', totalItem: 1000, status: 'Finished' },
    { docNo: 'TN2412060002', division: 'GM', factory: 1, date: '2024-12-06 14:49:46', process: 'TURNING', totalItem: 1, status: 'Finished' },
    { docNo: 'TN2412060004', division: 'GM', factory: 1, date: '2024-12-06 16:35:40', process: 'TURNING', totalItem: 1, status: 'Finished' }
  ];

  constructor(private router: Router) {}

  // เปลี่ยนไปหน้ารายละเอียด
  viewDetail(docNo: string): void {
    this.router.navigate(['/pages/detail-request-cleaning', docNo]);
  }

  // ลบรายการออกจากตาราง
  deleteItem(index: number): void {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.items.splice(index, 1);
        Swal.fire('Deleted!', 'The item has been deleted.', 'success');
      }
    });
  }
}
