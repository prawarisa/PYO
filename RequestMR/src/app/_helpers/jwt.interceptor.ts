import { Injectable } from '@angular/core'; // นำเข้า Injectable decorator จาก Angular core
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'; // นำเข้าคลาสที่ใช้สำหรับการจัดการคำขอ HTTP
import { Observable } from 'rxjs'; // นำเข้า Observable จาก RxJS

import { environment } from 'src/environments/environment'; // นำเข้าค่าคอนฟิกจากไฟล์ environment
import { AccountService } from '../services/account.service'; // นำเข้าบริการ AccountService

@Injectable() // ใช้ decorator Injectable เพื่อให้สามารถใช้บริการใน DI (Dependency Injection)
export class JwtInterceptor implements HttpInterceptor { // สร้างคลาส JwtInterceptor ที่ implements HttpInterceptor
    constructor(private accountService: AccountService) { } // สร้าง constructor เพื่อฉีดบริการ AccountService

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { // ฟังก์ชัน intercept
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.accountService.userValue; // ดึงค่าผู้ใช้จาก AccountService
        const isLoggedIn = user?.token; // ตรวจสอบว่าผู้ใช้ล็อกอินอยู่หรือไม่
        const isApiUrl = request.url.startsWith(environment.apiUrl); // ตรวจสอบว่าคำขอส่งไปยัง API URL หรือไม่
        if (isLoggedIn && isApiUrl) { // ถ้าผู้ใช้ล็อกอินและเป็นคำขอที่ส่งไปยัง API
            request = request.clone({ // ทำการคัดลอกคำขอ
                setHeaders: { Authorization: `Bearer ${user.token}` } // เพิ่ม Authorization header ด้วย JWT
            });
        }

        return next.handle(request); // ส่งต่อคำขอไปยัง HttpHandler ถัดไป
    }
}
