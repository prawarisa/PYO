import { Component } from '@angular/core'; // นำเข้า Component จาก Angular core
import { LayoutService } from 'src/app/services/app.layout.service'; // นำเข้า LayoutService จากตำแหน่งที่กำหนด

@Component({
  selector: 'app-footer', // ตั้งชื่อ selector สำหรับ component นี้
  templateUrl: './app.footer.component.html', // กำหนด URL ของไฟล์ HTML ที่ใช้เป็น template
  styleUrls: ['./app.footer.component.scss'] // กำหนด URL ของไฟล์ SCSS ที่ใช้สำหรับสไตล์
})
export class AppFooterComponent { // ประกาศ class สำหรับ AppFooterComponent
  constructor(public layoutService: LayoutService) { } // สร้าง constructor ที่รับ LayoutService และตั้งค่าเป็น public
}
