import { NgModule } from '@angular/core'; // นำเข้า NgModule จาก Angular core
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule สำหรับการใช้งานฟีเจอร์พื้นฐาน
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // นำเข้า FormsModule และ ReactiveFormsModule สำหรับการจัดการฟอร์ม
import { PrimengModule } from 'src/app/primeng.module'; // นำเข้าโมดูล PrimeNG
import { InitialpasswordRoutingModule } from './initialpassword-routing.module'; // นำเข้าโมดูลเส้นทางสำหรับ InitialPassword
import { InitialpasswordComponent } from './initialpassword.component'; // นำเข้าคอมโพเนนต์ Initialpassword

@NgModule({
  declarations: [InitialpasswordComponent], // ประกาศคอมโพเนนต์ที่ใช้ในโมดูลนี้
  imports: [
    CommonModule, // นำเข้า CommonModule
    FormsModule, // นำเข้า FormsModule สำหรับการจัดการฟอร์ม
    ReactiveFormsModule, // นำเข้า ReactiveFormsModule สำหรับการสร้างฟอร์มที่มีการตอบสนอง
    PrimengModule, // นำเข้าโมดูล PrimeNG
    InitialpasswordRoutingModule // นำเข้าโมดูลเส้นทางสำหรับ InitialPassword
  ]
})
export class InitialpasswordModule { } // ส่งออก InitialpasswordModule
