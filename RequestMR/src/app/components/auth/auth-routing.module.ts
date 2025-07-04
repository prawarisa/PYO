import { NgModule } from '@angular/core'; // นำเข้า NgModule จาก @angular/core
import { RouterModule } from '@angular/router'; // นำเข้า RouterModule จาก @angular/router

@NgModule({
  imports: [RouterModule.forChild([ // การใช้ RouterModule.forChild() เพื่อกำหนดเส้นทางย่อย
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, // กำหนดเส้นทางสำหรับหน้าล็อกอิน
    { path: 'register', loadChildren: () => import('./login/register.module').then(m => m.RegisterModule) }, // กำหนดเส้นทางสำหรับหน้าลงทะเบียน
    { path: 'forgotpass', loadChildren: () => import('./login/initialpassword.module').then(m => m.InitialpasswordModule) }, // กำหนดเส้นทางสำหรับหน้าลืมรหัสผ่าน
    { path: '**', redirectTo: '/notfound' } // ถ้าเส้นทางไม่ตรงกับที่กำหนด จะเปลี่ยนเส้นทางไปยังหน้าที่ไม่พบ (not found)
  ])],
  exports: [RouterModule] // ส่งออก RouterModule เพื่อให้สามารถใช้ในโมดูลอื่นได้
})
export class AuthRoutingModule { } // สร้างคลาส AuthRoutingModule
