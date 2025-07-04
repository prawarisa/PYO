import { NgModule } from '@angular/core';  // นำเข้า NgModule จาก Angular core
import { BrowserModule } from '@angular/platform-browser';  // นำเข้า BrowserModule สำหรับแอปพลิเคชันที่รันในเบราว์เซอร์
import { FormsModule } from '@angular/forms';  // นำเข้า FormsModule สำหรับการจัดการฟอร์ม
import { HttpClientModule } from '@angular/common/http';  // นำเข้า HttpClientModule สำหรับการทำงานกับ HTTP
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // นำเข้า BrowserAnimationsModule สำหรับการใช้งานอนิเมชัน
import { RouterModule } from '@angular/router';  // นำเข้า RouterModule สำหรับการจัดการ routing
import { PrimengModule } from '../primeng.module';  // นำเข้า PrimengModule ที่กำหนดไว้ในโปรเจกต์
import { AppLayoutComponent } from './app.layout.component';  // นำเข้า AppLayoutComponent
import { AppFooterComponent } from './app.footer/app.footer.component';  // นำเข้า AppFooterComponent
import { AppTopbarComponent } from './app.topbar/app.topbar.component';  // นำเข้า AppTopbarComponent
import { AppSidebarComponent } from './app.sidebar/app.sidebar.component';  // นำเข้า AppSidebarComponent
import { AppMenuComponent } from './app.menu/app.menu.component';  // นำเข้า AppMenuComponent
import { AppMenuitemComponent } from './app.menuitem.component';  // นำเข้า AppMenuitemComponent
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // ประกาศ component ที่อยู่ในโมดูลนี้
    AppLayoutComponent,
    AppFooterComponent,
    AppTopbarComponent,
    AppSidebarComponent,
    AppMenuComponent,
    AppMenuitemComponent
  ],
  imports: [
    // โมดูลที่ใช้ในโมดูลนี้
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    PrimengModule,
    TranslateModule,
  ],
  exports: [AppLayoutComponent]  // โมดูลที่ต้องการส่งออกให้ใช้ในโมดูลอื่น
})
export class AppLayoutModule { }  // สร้างและส่งออก AppLayoutModule
