import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-return-other-user',
  templateUrl: './return-other-user.component.html',
  styleUrls: ['./return-other-user.component.scss']
})
export class ReturnOtherUserComponent implements OnInit {
  items: any[] = []; // Data for the table
  formattedDate: string = ''; // Formatted date
  problemDescription: string = ''; // Problem description

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Mock data for demonstration
    this.items = [
      {
        Doc_no: 'TN2411140001',
        Division: 'GM',
        Factory: '2',
        Process: 'TURNING',
        Item_no: 'P111102A',
        Part_no: 'A5B70-4-M1A',
        MC_type: 'B-12',
        Spec: 'ADS-0238',
        MC_no: 5,
        Qty: 1000,
        Case_: 'BRO',
        Rev: '1',
        Status: 'Ready',
        Set_by: 'YY'
      }
    ];
    // Set formattedDate
    this.formattedDate = '14/11/24'; // Example date
  }

  onReturn(docNo: string): void {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to return Document No: ${docNo}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Return',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Returned!', `Document No: ${docNo} has been returned.`, 'success');

        // Logic to navigate or process after return
        this.router.navigate(['/pages/list-return-other']); // Example: Navigate to another page
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Return action was cancelled.', 'error');
      }
    });
  }
}
