import { Injectable } from '@angular/core'; // นำเข้า @Injectable เพื่อทำให้คลาสนี้สามารถใช้งาน Dependency Injection ได้
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'; // นำเข้าคลาสที่ใช้ในการจัดการ HTTP
import { Observable, throwError } from 'rxjs'; // นำเข้าคลาส Observable และฟังก์ชัน throwError จาก RxJS
import { catchError } from 'rxjs/operators'; // นำเข้าฟังก์ชัน catchError สำหรับจัดการข้อผิดพลาด

import { AccountService } from '../services/account.service'; // นำเข้าบริการ AccountService

@Injectable() // ทำให้คลาสนี้สามารถนำไปใช้กับ Dependency Injection ได้
export class ErrorInterceptor implements HttpInterceptor { // สร้างคลาส ErrorInterceptor ที่ implements HttpInterceptor
  constructor(private accountService: AccountService) { } // สร้าง constructor ที่รับ AccountService

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { // สร้างเมธอด intercept
    return next.handle(request).pipe(catchError(err => { // เรียกใช้ handle ของ next และใช้ pipe เพื่อจัดการข้อผิดพลาด
      if ([401, 403].includes(err.status) && this.accountService.userValue) { // ตรวจสอบสถานะของข้อผิดพลาด
        // ถ้าสถานะเป็น 401 หรือ 403 และผู้ใช้เข้าสู่ระบบอยู่ ให้ออกจากระบบอัตโนมัติ
        this.accountService.logout(); // เรียกใช้ฟังก์ชัน logout ของ AccountService
      }

      const error = err.error?.message || err.statusText; // ดึงข้อความข้อผิดพลาด
      console.error(err); // แสดงข้อผิดพลาดใน console
      return throwError(() => error); // ส่งข้อผิดพลาดกลับ
    }))
  }
}
