import { NgModule } from '@angular/core'; // นำเข้า NgModule เพื่อกำหนดโมดูล
import { RouterModule } from '@angular/router'; // นำเข้า RouterModule เพื่อใช้ในการจัดการเส้นทาง
import { InitialpasswordComponent } from './initialpassword.component'; // นำเข้า InitialpasswordComponent ซึ่งเป็นคอมโพเนนต์ที่จัดการการตั้งค่ารหัสผ่านเริ่มต้น

@NgModule({
  imports: [RouterModule.forChild([ // นำเข้า RouterModule และกำหนดเส้นทางลูก
    { path: '', component: InitialpasswordComponent } // กำหนดเส้นทางหลัก (path) ที่ใช้แสดง InitialpasswordComponent
  ])],
  exports: [RouterModule] // ส่งออก RouterModule เพื่อให้สามารถใช้ในโมดูลอื่น ๆ ได้
})
export class InitialpasswordRoutingModule { } // ประกาศคลาส InitialpasswordRoutingModule
