import { Component, OnDestroy, Renderer2, ViewChild } from '@angular/core';  // นำเข้าโมดูลที่จำเป็น
import { NavigationEnd, Router } from '@angular/router';  // นำเข้า NavigationEnd และ Router จาก Angular Router
import { filter, Subscription } from 'rxjs';  // นำเข้าฟังก์ชัน filter และ Subscription จาก RxJS
import { LayoutService } from '../services/app.layout.service';  // นำเข้า LayoutService
import { AppSidebarComponent } from "./app.sidebar/app.sidebar.component";  // นำเข้า AppSidebarComponent
import { AppTopbarComponent } from './app.topbar/app.topbar.component';  // นำเข้า AppTopbarComponent


@Component({
  selector: 'app-layout',  // กำหนด selector ของ component
  templateUrl: './app.layout.component.html'  // กำหนดไฟล์ template ของ component
  // styleUrls: ['./app.layout.component.scss']  // (คอมเมนต์ไว้) กำหนดไฟล์สไตล์ของ component
})
export class AppLayoutComponent implements OnDestroy {  // สร้าง class ของ component โดย implements OnDestroy
  overlayMenuOpenSubscription: Subscription;  // ประกาศตัวแปรสำหรับ Subscription
  menuOutsideClickListener: any;  // ประกาศตัวแปรสำหรับ listener คลิกนอกเมนู
  profileMenuOutsideClickListener: any;  // ประกาศตัวแปรสำหรับ listener คลิกนอกเมนูโปรไฟล์

  @ViewChild(AppSidebarComponent) appSidebar!: AppSidebarComponent;  // เข้าถึง AppSidebarComponent
  @ViewChild(AppTopbarComponent) appTopbar!: AppTopbarComponent;  // เข้าถึง AppTopbarComponent

  constructor(private layoutService: LayoutService, public renderer: Renderer2, public router: Router) {
    // Constructor สำหรับเริ่มต้น component
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      // Subscribe เพื่อฟังการเปิด overlay menu
      if (!this.menuOutsideClickListener) {
        // ตรวจสอบว่ามี listener คลิกนอกเมนูอยู่หรือไม่
        this.menuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          // สร้าง listener สำหรับคลิกนอกเมนู
          const isOutsideClicked = !(this.appSidebar.el.nativeElement.isSameNode(event.target) || this.appSidebar.el.nativeElement.contains(event.target)
            || this.appTopbar.menuButton.nativeElement.isSameNode(event.target) || this.appTopbar.menuButton.nativeElement.contains(event.target));

          if (isOutsideClicked) {
            this.hideMenu();  // ถ้าคลิกนอกให้ซ่อนเมนู
          }
        });
      }

      if (!this.profileMenuOutsideClickListener) {
        // ตรวจสอบว่ามี listener คลิกนอกเมนูโปรไฟล์อยู่หรือไม่
        this.profileMenuOutsideClickListener = this.renderer.listen('document', 'click', event => {
          // สร้าง listener สำหรับคลิกนอกเมนูโปรไฟล์
          const isOutsideClicked = !(this.appTopbar.menu.nativeElement.isSameNode(event.target) || this.appTopbar.menu.nativeElement.contains(event.target)
            || this.appTopbar.topbarMenuButton.nativeElement.isSameNode(event.target) || this.appTopbar.topbarMenuButton.nativeElement.contains(event.target));

          if (isOutsideClicked) {
            this.hideProfileMenu();  // ถ้าคลิกนอกให้ซ่อนเมนูโปรไฟล์
          }
        });
      }

      if (this.layoutService.state.staticMenuMobileActive) {
        this.blockBodyScroll();  // ถ้าเมนูอยู่ในสถานะ static ให้บล็อกการเลื่อนหน้า
      }
    });

    // Subscribe เพื่อฟังการเปลี่ยนแปลงของ routing
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.hideMenu();  // ซ่อนเมนูเมื่อมีการเปลี่ยนแปลง routing
        this.hideProfileMenu();  // ซ่อนเมนูโปรไฟล์เมื่อมีการเปลี่ยนแปลง routing
      });
  }

  hideMenu() {
    // ฟังก์ชันซ่อนเมนู
    this.layoutService.state.overlayMenuActive = false;  // ปิดการเปิดเมนู overlay
    this.layoutService.state.staticMenuMobileActive = false;  // ปิดการเปิดเมนู static ในมือถือ
    this.layoutService.state.menuHoverActive = false;  // ปิดสถานะ hover ของเมนู
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();  // ยกเลิก listener คลิกนอกเมนู
      this.menuOutsideClickListener = null;  // รีเซ็ต listener
    }
    this.unblockBodyScroll();  // เปิดให้เลื่อนหน้าได้
  }

  hideProfileMenu() {
    // ฟังก์ชันซ่อนเมนูโปรไฟล์
    this.layoutService.state.profileSidebarVisible = false;  // ปิดการแสดงเมนูโปรไฟล์
    if (this.profileMenuOutsideClickListener) {
      this.profileMenuOutsideClickListener();  // ยกเลิก listener คลิกนอกเมนูโปรไฟล์
      this.profileMenuOutsideClickListener = null;  // รีเซ็ต listener
    }
  }

  blockBodyScroll(): void {
    // ฟังก์ชันบล็อกการเลื่อนหน้า
    if (document.body.classList) {
      document.body.classList.add('blocked-scroll');  // เพิ่ม class บล็อกเลื่อน
    }
    else {
      document.body.className += ' blocked-scroll';  // สำหรับเบราว์เซอร์เก่า
    }
  }

  unblockBodyScroll(): void {
    // ฟังก์ชันเปิดให้เลื่อนหน้าได้
    if (document.body.classList) {
      document.body.classList.remove('blocked-scroll');  // ลบ class บล็อกเลื่อน
    }
    else {
      document.body.className = document.body.className.replace(new RegExp('(^|\\b)' +
        'blocked-scroll'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');  // สำหรับเบราว์เซอร์เก่า
    }
  }

  get containerClass() {
    // ฟังก์ชันเพื่อคืนค่า class สำหรับ layout
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',  // ถ้าสีพื้นหลังเป็น light
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',  // ถ้าสีพื้นหลังเป็น dark
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',  // ถ้าสถานะเมนูเป็น overlay
      'layout-static': this.layoutService.config.menuMode === 'static',  // ถ้าสถานะเมนูเป็น static
      'layout-static-inactive': this.layoutService.state.staticMenuDesktopInactive && this.layoutService.config.menuMode === 'static',  // เมนู desktop ไม่ทำงาน
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,  // ถ้าเมนู overlay ถูกเปิด
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,  // ถ้าเมนู static ในมือถือถูกเปิด
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',  // ถ้าสไตล์ input เป็น filled
      'p-ripple-disabled': !this.layoutService.config.ripple  // ถ้าคุณสมบัติ ripple ถูกปิด
    }
  }

  ngOnDestroy() {
    // ฟังก์ชันที่ถูกเรียกเมื่อ component ถูกทำลาย
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();  // ยกเลิก Subscription
    }

    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();  // ยกเลิก listener คลิกนอกเมนู
    }
  }
}
