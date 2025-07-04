import { NgModule } from '@angular/core'; // นำเข้า NgModule จาก @angular/core
import { RouterModule } from '@angular/router'; // นำเข้า RouterModule จาก @angular/router
import { RegisterComponent } from './register.component'; // นำเข้า RegisterComponent จากไฟล์ที่เกี่ยวข้อง

@NgModule({
  declarations: [], // ไม่มีการประกาศคอมโพเนนต์เพิ่มเติมในโมดูลนี้
  imports: [RouterModule.forChild([ // การใช้ RouterModule.forChild() เพื่อกำหนดเส้นทางย่อย
    { path: '', component: RegisterComponent } // กำหนดเส้นทางให้กับ RegisterComponent โดยใช้ path เปล่า
  ])],
  exports: [RouterModule] // ส่งออก RouterModule เพื่อให้สามารถใช้ในโมดูลอื่นได้
})
export class RegisterRoutingModule { } // สร้างคลาส RegisterRoutingModule
