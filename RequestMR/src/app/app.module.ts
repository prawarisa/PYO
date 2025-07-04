import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'; // นำเข้า NgModule และ NO_ERRORS_SCHEMA
import { BrowserModule } from '@angular/platform-browser'; // นำเข้า BrowserModule

import { AppRoutingModule } from './app-routing.module'; // นำเข้าโมดูลสำหรับการจัดการเส้นทาง
import { AppComponent } from './app.component'; // นำเข้า AppComponent ซึ่งเป็นคอมโพเนนต์หลัก
import { AuthModule } from './components/auth/auth.module'; // นำเข้า AuthModule สำหรับการจัดการการรับรองความถูกต้อง
import { AppLayoutModule } from './layout/app.layout.module'; // นำเข้า AppLayoutModule สำหรับการจัดการเลย์เอาท์
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // นำเข้าโมดูลสำหรับการทำอนิเมชัน
import { DatePipe } from '@angular/common'; // นำเข้า DatePipe สำหรับการจัดการวันที่
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { ReturnAdminModule } from './components/pages/return/return-admin/return-admin.module';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { PagesModule } from './components/pages/pages.module'; // นำเข้า PagesModule สำหรับจัดการเพจ
import { ReturnRoutingModule } from './components/pages/return/return-routing.module';
import { ReturnUserModule } from './components/pages/return/return-user/return-user.module';
// เปลี่ยนภาษา
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent // ประกาศ AppComponent ในโมดูลนี้

  ],
  imports: [
    BrowserModule, // เพิ่ม BrowserModule เพื่อให้ Angular ทำงานในเบราว์เซอร์
    AppRoutingModule, // เพิ่ม AppRoutingModule สำหรับการจัดการเส้นทาง
    AuthModule, // เพิ่ม AuthModule สำหรับการจัดการการรับรองความถูกต้อง
    AppLayoutModule, // เพิ่ม AppLayoutModule สำหรับจัดการเลย์เอาท์
    BrowserAnimationsModule, // เพิ่ม BrowserAnimationsModule สำหรับอนิเมชัน
    PagesModule, // เพิ่ม PagesModule สำหรับเพจต่าง ๆ
    DropdownModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    CalendarModule,
    MultiSelectModule,
    TableModule,
    CardModule,
    DialogModule,
    SweetAlert2Module,
    ReturnRoutingModule,
    ReturnUserModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),

  ],
  schemas: [NO_ERRORS_SCHEMA], // ใช้ NO_ERRORS_SCHEMA เพื่อละเว้นข้อผิดพลาดเกี่ยวกับคอมโพเนนต์ที่ไม่รู้จัก
  providers: [DatePipe], // กำหนด DatePipe เป็น provider ในโมดูล
  bootstrap: [AppComponent] // ระบุว่า AppComponent จะถูกบูตแรกรับใช้ในแอปพลิเคชัน
})
export class AppModule { } // ประกาศคลาส AppModule
