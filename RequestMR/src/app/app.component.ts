import { Component } from '@angular/core'; // นำเข้า Component จาก Angular Core
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root', // ชื่อที่ใช้ใน HTML เพื่อเรียกใช้งานคอมโพเนนต์นี้
  templateUrl: './app.component.html', // เส้นทางไปยังไฟล์เทมเพลต HTML ของคอมโพเนนต์
  styleUrls: ['./app.component.scss'] // เส้นทางไปยังไฟล์ SCSS สำหรับการจัดรูปแบบคอมโพเนนต์
})
export class AppComponent { // ประกาศคลาส AppComponent
  title = 'RequestMR'; // ตัวแปรที่เก็บชื่อโปรเจกต์ หรือหัวข้อที่ต้องการแสดง
  currentLanguage = 'en'; // กำหนดภาษาปัจจุบันเริ่มต้น

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'th']); // เพิ่มภาษาที่รองรับ
    this.translate.setDefaultLang(this.currentLanguage); // กำหนดภาษาเริ่มต้น
  }

  switchLanguage(lang: string) {
    this.currentLanguage = lang; // เปลี่ยนค่าภาษาปัจจุบัน
    this.translate.use(lang); // ใช้ฟังก์ชัน translate เปลี่ยนภาษา
  }
}
