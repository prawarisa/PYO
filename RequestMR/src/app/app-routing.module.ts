import { NgModule } from '@angular/core';  // นำเข้า NgModule จาก @angular/core
import { RouterModule, Routes } from '@angular/router';  // นำเข้า RouterModule และ Routes จาก @angular/router
import { AppLayoutComponent } from './layout/app.layout.component';  // นำเข้า AppLayoutComponent
import { ReturnAdminComponent } from './components/pages/return/return-admin/return-admin.component';
import { ReturnUserComponent } from './components/pages/return/return-user/return-user.component';
import { LoginComponent } from './components/auth/login/login.component';


// กำหนด routes สำหรับแอปพลิเคชัน
const routes: Routes = [
  {
    path: '', component: AppLayoutComponent,  // เส้นทางหลักที่จะโหลด AppLayoutComponent
    children: [  // เส้นทางย่อยที่อยู่ภายใต้เส้นทางหลัก
      // { path: '', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule) },  // โหลด DashboardModule
      { path: 'pages', loadChildren: () => import('./components/pages/pages.module').then(m => m.PagesModule) }  // โหลด PagesModule

    ]
  },
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },  // โหลด AuthModule สำหรับเส้นทาง /auth
  { path: 'return-admin', component: ReturnAdminComponent },
  { path: 'return-user', component: ReturnUserComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' } // ถ้าไม่พบเส้นทางที่กำหนด ให้เปลี่ยนเส้นทางไปยัง '/'


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // นำเข้า RouterModule พร้อมเส้นทางที่กำหนด
  exports: [RouterModule]  // ส่งออก RouterModule เพื่อใช้งานในโมดูลอื่น
})
export class AppRoutingModule { }  // ประกาศ AppRoutingModule
