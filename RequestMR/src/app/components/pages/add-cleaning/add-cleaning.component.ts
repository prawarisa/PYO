import { Component } from '@angular/core';
import { AppLayoutModule } from 'src/app/layout/app.layout.module';
import { Router } from '@angular/router'; // นำเข้า Router สำหรับการนำทาง

@Component({
  selector: 'app-add-cleaning',
  templateUrl: './add-cleaning.component.html',
  styleUrls: ['./add-cleaning.component.scss']
})
export class AddCleaningComponent {
  AppLayoutModule
  constructor(private router: Router) {} // Inject Router

  // ฟังก์ชันสำหรับปุ่ม Back
  onBack() {
    console.log('Navigating back...');
    this.router.navigate(['/pages/choose-master']); // นำทางไปยังหน้า /pages/cutting
  }
}
