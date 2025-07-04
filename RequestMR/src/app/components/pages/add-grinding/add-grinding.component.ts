import { Component } from '@angular/core';
import { AppLayoutModule } from 'src/app/layout/app.layout.module';
import { Router } from '@angular/router'; // นำเข้า Router สำหรับการนำทาง
@Component({
  selector: 'app-add-grinding',
  templateUrl: './add-grinding.component.html',
  styleUrls: ['./add-grinding.component.scss']
})
export class AddGrindingComponent {
  AppLayoutModule
  constructor(private router: Router) {} // Inject Router

  // ฟังก์ชันสำหรับปุ่ม Back
  onBack() {
    console.log('Navigating back...');
    this.router.navigate(['/pages/choose-master']); // นำทางไปยังหน้า /pages/cutting
  }
}
