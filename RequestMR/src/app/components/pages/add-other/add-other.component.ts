import { Component } from '@angular/core';
import { AppLayoutModule } from 'src/app/layout/app.layout.module';
import { Router } from '@angular/router'; // นำเข้า Router สำหรับการนำทาง
@Component({
  selector: 'app-add-other',
  templateUrl: './add-other.component.html',
  styleUrls: ['./add-other.component.scss']
})
export class AddOtherComponent {
  AppLayoutModule
  constructor(private router: Router) {} // Inject Router

  // ฟังก์ชันสำหรับปุ่ม Back
  onBack() {
    console.log('Navigating back...');
    this.router.navigate(['/pages/choose-master']); // นำทางไปยังหน้า /pages/cutting
  }
}
