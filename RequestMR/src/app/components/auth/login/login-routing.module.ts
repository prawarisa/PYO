import { NgModule } from '@angular/core'; // นำเข้า NgModule จาก Angular core
import { RouterModule } from '@angular/router'; // นำเข้า RouterModule สำหรับการจัดการเส้นทาง
import { LoginComponent } from './login.component'; // นำเข้า LoginComponent

@NgModule({
  imports: [RouterModule.forChild([ // ใช้ RouterModule.forChild เพื่อกำหนดเส้นทางของโมดูลย่อย
    { path: '', component: LoginComponent } // กำหนดเส้นทางหลักให้แสดง LoginComponent
  ])],
  exports: [RouterModule] // ส่งออก RouterModule เพื่อให้สามารถใช้ในโมดูลอื่นได้
})
export class LoginRoutingModule { } // ประกาศ LoginRoutingModule
