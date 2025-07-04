import { Injectable } from '@angular/core';  // นำเข้า Injectable จาก Angular core
import { Subject } from 'rxjs';  // นำเข้า Subject จาก RxJS สำหรับการจัดการการส่งข้อมูลแบบ observable
import { MenuChangeEvent } from './api/menuchangeevent';  // นำเข้า MenuChangeEvent ที่กำหนดไว้ในโปรเจกต์

@Injectable({
  providedIn: 'root'  // ระบุว่า service นี้จะถูกสร้างขึ้นในระดับ root ของแอปพลิเคชัน
})
export class MenuService {
  // สร้าง Subject สำหรับจัดการการเปลี่ยนแปลงสถานะของเมนู
  private menuSource = new Subject<MenuChangeEvent>();
  private resetSource = new Subject();  // สร้าง Subject สำหรับรีเซ็ตสถานะ

  // สร้าง observable เพื่อให้สามารถ subscribe ได้จากภายนอก
  menuSource$ = this.menuSource.asObservable();
  resetSource$ = this.resetSource.asObservable();

  // ฟังก์ชันสำหรับส่งเหตุการณ์การเปลี่ยนแปลงสถานะของเมนู
  onMenuStateChange(event: MenuChangeEvent) {
    this.menuSource.next(event);  // ส่งเหตุการณ์ไปยัง subscribers
  }

  // ฟังก์ชันสำหรับรีเซ็ตสถานะ
  reset() {
    this.resetSource.next(true);  // ส่งสัญญาณให้ subscribers ทราบว่าต้องการรีเซ็ต
  }
}
