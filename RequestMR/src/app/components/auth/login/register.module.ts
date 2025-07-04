import { NgModule } from '@angular/core'; // นำเข้า NgModule จาก Angular core
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule สำหรับฟังก์ชันพื้นฐานใน Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // นำเข้า FormsModule และ ReactiveFormsModule สำหรับจัดการฟอร์ม
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // นำเข้า HttpClientModule และ HTTP_INTERCEPTORS สำหรับการจัดการ HTTP
import { PrimengModule } from 'src/app/primeng.module'; // นำเข้าโมดูล PrimeNG
import { RegisterComponent } from './register.component'; // นำเข้า RegisterComponent
import { RegisterRoutingModule } from './register-routing.module'; // นำเข้าโมดูลการนำทางสำหรับการลงทะเบียน
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from '../../../_helpers'; // นำเข้า interceptors และ fake backend provider

@NgModule({
  declarations: [RegisterComponent], // ประกาศ RegisterComponent ในโมดูล
  imports: [
    CommonModule, // เพิ่ม CommonModule
    FormsModule, // เพิ่ม FormsModule สำหรับฟอร์ม
    ReactiveFormsModule, // เพิ่ม ReactiveFormsModule สำหรับฟอร์มแบบ Reactive
    RegisterRoutingModule, // เพิ่มโมดูลการนำทางสำหรับการลงทะเบียน
    PrimengModule // เพิ่มโมดูล PrimeNG
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, // ใช้ JwtInterceptor สำหรับจัดการ JSON Web Tokens
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, // ใช้ ErrorInterceptor สำหรับจัดการข้อผิดพลาด

    // provider ที่ใช้สำหรับสร้าง fake backend
    fakeBackendProvider // ใช้ fakeBackendProvider เพื่อจำลอง backend สำหรับการทดสอบ
  ],
})
export class RegisterModule { } // ประกาศ RegisterModule
