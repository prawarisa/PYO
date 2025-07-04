import { Component, ElementRef } from '@angular/core';
import { LayoutService } from 'src/app/services/app.layout.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar',  // กำหนด selector สำหรับ component นี้
  templateUrl: './app.sidebar.component.html',  // กำหนดไฟล์ HTML ที่ใช้เป็น template
  styleUrls: ['./app.sidebar.component.scss']  // กำหนดไฟล์ SCSS ที่ใช้สำหรับสไตล์
})
export class AppSidebarComponent {
  constructor(private translate: TranslateService, public layoutService: LayoutService, public el: ElementRef) {
    this.translate.addLangs(['en', 'th']); // เพิ่มภาษาที่รองรับ
  this.translate.setDefaultLang('en'); // ตั้งค่าภาษาเริ่มต้น

  const browserLang = this.translate.getBrowserLang(); // ดึงค่าภาษาจากเบราว์เซอร์
  this.translate.use(browserLang.match(/en|th/) ? browserLang : 'en'); // ใช้ภาษา
  }
}
