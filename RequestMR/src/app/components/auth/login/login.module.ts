import { NgModule } from '@angular/core'; // นำเข้า NgModule จาก Angular core
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule สำหรับการใช้งานฟีเจอร์พื้นฐาน
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // นำเข้า FormsModule และ ReactiveFormsModule สำหรับการจัดการฟอร์ม
import { LoginRoutingModule } from './login-routing.module'; // นำเข้าโมดูลเส้นทางสำหรับ Login
import { LoginComponent } from './login.component'; // นำเข้าคอมโพเนนต์ Login
import { PrimengModule } from 'src/app/primeng.module'; // นำเข้าโมดูล PrimeNG

@NgModule({
  declarations: [LoginComponent], // ประกาศคอมโพเนนต์ที่ใช้ในโมดูลนี้
  imports: [
    CommonModule, // นำเข้า CommonModule
    FormsModule, // นำเข้า FormsModule สำหรับการจัดการฟอร์ม
    ReactiveFormsModule, // นำเข้า ReactiveFormsModule สำหรับการสร้างฟอร์มที่มีการตอบสนอง
    LoginRoutingModule, // นำเข้าโมดูลเส้นทางสำหรับ Login
    PrimengModule // นำเข้าโมดูล PrimeNG
  ]
})
export class LoginModule { } // ส่งออก LoginModule
