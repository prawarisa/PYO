import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history-setup',
  templateUrl: './history-setup.component.html',
  styleUrls: ['./history-setup.component.scss']
})
export class HistorySetupComponent implements OnInit {
  items: any[] = []; // Data for the table

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadHistoryData(); // Load mock data
  }

  // Mock data for the table
  loadHistoryData() {
    this.items = [
      { docNo: 'TN2411130001', division: 'GM', factory: 2, date: '2024-11-13 09:42:46', process: 'TURNING', status: 'Finished' },
      { docNo: 'TN2411130002', division: 'GM', factory: 2, date: '2024-11-13 13:37:26', process: 'TURNING', status: 'Finished' },
      { docNo: 'TN2412060002', division: 'GM', factory: 1, date: '2024-12-06 14:49:46', process: 'TURNING', status: 'Finished' },
      { docNo: 'TN2412060004', division: 'GM', factory: 1, date: '2024-12-06 16:35:40', process: 'TURNING', status: 'Finished' },
    ];
  }

  // Navigate to detail page with the document number
  viewDetail(docNo: string) {
    console.log('Viewing details for Doc No:', docNo);
    this.router.navigate(['/pages/summary-setup', docNo]); // Navigate to summary page
  }
}
