import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-return-cuttingtool',
  templateUrl: './detail-return-cuttingtool.component.html',
  styleUrls: ['./detail-return-cuttingtool.component.scss']
})
export class DetailReturnCuttingtoolComponent implements OnInit {
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
        Usage:'',
        MC_no: 5,
        Qty: 1000,
        Case_: 'BRO',
        Result1:'',
        Result2: '',
        Result3: '',
        Result4: '',
        Result5: '',
        Result6: '',
        Rev: '1',
        Status: 'Ready',
        Set_by: 'YY'
      }
    ];
    // Set formattedDate
    this.formattedDate = '14/11/24'; // Example date
  }

   // ฟังก์ชัน Back
   onBack(): void {
    this.router.navigate(['/pages/list-return-cuttingtool']); // เปลี่ยน '/your-back-route' เป็น route ที่คุณต้องการไป
  }
}
