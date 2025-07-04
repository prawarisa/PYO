import { NgModule } from '@angular/core'; // นำเข้า NgModule จาก @angular/core
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule จาก @angular/common
import { AuthRoutingModule } from './auth-routing.module'; // นำเข้า AuthRoutingModule ที่กำหนดเส้นทาง
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule, // นำเข้า CommonModule ซึ่งมีการใช้ฟีเจอร์พื้นฐานของ Angular
    AuthRoutingModule, // นำเข้า AuthRoutingModule สำหรับการกำหนดเส้นทางในโมดูลนี้
    TranslateModule

  ]
})
export class AuthModule { } // สร้างคลาส AuthModule
