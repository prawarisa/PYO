import { Injectable } from '@angular/core'; // นำเข้า Injectable จาก Angular core
import { Subject } from 'rxjs'; // นำเข้า Subject จาก RxJS

// สร้าง interface สำหรับกำหนดโครงสร้างของ AppConfig
export interface AppConfig {
  inputStyle: string; // รูปแบบของ input
  colorScheme: string; // โทนสี
  theme: string; // ธีม
  ripple: boolean; // การแสดงเอฟเฟกต์ ripple
  menuMode: string; // โหมดเมนู
  scale: number; // ขนาด
}

// สร้าง interface สำหรับสถานะของ Layout
interface LayoutState {
  staticMenuDesktopInactive: boolean; // สถานะเมนูบนเดสก์ท็อป
  overlayMenuActive: boolean; // สถานะเมนู overlay
  profileSidebarVisible: boolean; // สถานะการแสดง sidebar ของโปรไฟล์
  configSidebarVisible: boolean; // สถานะการแสดง sidebar ของการตั้งค่า
  staticMenuMobileActive: boolean; // สถานะเมนูบนมือถือ
  menuHoverActive: boolean; // สถานะการเลื่อนเมนู
}

@Injectable({
  providedIn: 'root' // ระบุว่า service นี้จะถูกให้บริการใน root module
})
export class LayoutService {
  // กำหนดค่าเริ่มต้นสำหรับ config
  config: AppConfig = {
    ripple: false, // ปิดการแสดง ripple
    inputStyle: 'outlined', // รูปแบบ input เป็น outlined
    menuMode: 'static', // โหมดเมนูเป็น static
    colorScheme: 'light', // โทนสีเป็น light
    theme: 'lara-light-indigo', // ธีมเป็น 'lara-light-indigo'
    scale: 14, // ขนาด 14
  };

  // กำหนดค่าเริ่มต้นสำหรับสถานะ layout
  state: LayoutState = {
    staticMenuDesktopInactive: false, // เมนูบนเดสก์ท็อปไม่ซ่อน
    overlayMenuActive: false, // เมนู overlay ไม่เปิด
    profileSidebarVisible: false, // sidebar โปรไฟล์ไม่แสดง
    configSidebarVisible: false, // sidebar การตั้งค่าไม่แสดง
    staticMenuMobileActive: false, // เมนูบนมือถือไม่เปิด
    menuHoverActive: false // เลื่อนเมนูไม่เปิด
  };

  private configUpdate = new Subject<AppConfig>(); // สร้าง Subject สำหรับการอัปเดต config

  private overlayOpen = new Subject<any>(); // สร้าง Subject สำหรับการเปิด overlay

  configUpdate$ = this.configUpdate.asObservable(); // แปลง configUpdate เป็น Observable เพื่อให้สามารถ subscribe ได้

  overlayOpen$ = this.overlayOpen.asObservable(); // แปลง overlayOpen เป็น Observable

  constructor() { } // คอนสตรัคเตอร์ของ service

  // ฟังก์ชันสำหรับสลับเมนู
  onMenuToggle() {
    if (this.isOverlay()) { // ตรวจสอบว่าเมนูเป็น overlay หรือไม่
      this.state.overlayMenuActive = !this.state.overlayMenuActive; // สลับสถานะเมนู overlay
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null); // แจ้งว่า overlay เปิด
      }
    }

    if (this.isDesktop()) { // ตรวจสอบว่าเป็นอุปกรณ์เดสก์ท็อป
      this.state.staticMenuDesktopInactive = !this.state.staticMenuDesktopInactive; // สลับสถานะเมนูบนเดสก์ท็อป
    }
    else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive; // สลับสถานะเมนูบนมือถือ

      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null); // แจ้งว่า overlay เปิด
      }
    }
  }

  // ฟังก์ชันสำหรับแสดง sidebar โปรไฟล์
  showProfileSidebar() {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible; // สลับสถานะการแสดง sidebar โปรไฟล์
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null); // แจ้งว่า overlay เปิด
    }
  }

  // ฟังก์ชันสำหรับแสดง sidebar การตั้งค่า
  showConfigSidebar() {
    this.state.configSidebarVisible = true; // ตั้งค่าสถานะให้ sidebar การตั้งแสดง
  }

  // ฟังก์ชันตรวจสอบว่าเมนูเป็น overlay หรือไม่
  isOverlay() {
    return this.config.menuMode === 'overlay'; // คืนค่าความจริงตามโหมดเมนู
  }

  // ฟังก์ชันตรวจสอบว่าเป็นอุปกรณ์เดสก์ท็อปหรือไม่
  isDesktop() {
    return window.innerWidth > 1020; // คืนค่าความจริงตามความกว้างของหน้าจอ
  }

  // ฟังก์ชันตรวจสอบว่าเป็นอุปกรณ์มือถือหรือไม่
  isMobile() {
    return !this.isDesktop(); // คืนค่าความจริงตามผลจาก isDesktop
  }

  // ฟังก์ชันสำหรับอัปเดต config
  onConfigUpdate() {
    this.configUpdate.next(this.config); // แจ้งการอัปเดต config
  }
}
