import { Injectable } from '@angular/core'; // นำเข้า @Injectable เพื่อทำให้คลาสนี้สามารถใช้งาน Dependency Injection ได้
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http'; // นำเข้าคลาสที่ใช้ในการจัดการ HTTP
import { Observable, of, throwError } from 'rxjs'; // นำเข้าคลาส Observable และฟังก์ชัน of, throwError จาก RxJS
import { delay, materialize, dematerialize } from 'rxjs/operators'; // นำเข้าฟังก์ชันสำหรับการจัดการ observable

// ข้อมูลผู้ใช้จำลอง
let users = [{ id: 1, firstName: 'Jason', lastName: 'Watmore', username: 'test', password: 'test' }];

@Injectable() // ทำให้คลาสนี้สามารถนำไปใช้กับ Dependency Injection ได้
export class FakeBackendInterceptor implements HttpInterceptor { // สร้างคลาส FakeBackendInterceptor ที่ implements HttpInterceptor
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { // สร้างเมธอด intercept
        const { url, method, headers, body } = request; // ทำการ destructure ข้อมูลจาก request

        return handleRoute(); // เรียกใช้ฟังก์ชัน handleRoute

        function handleRoute() { // ฟังก์ชันจัดการ routing
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST': // ตรวจสอบ URL และ method
                    return authenticate(); // เรียกใช้ฟังก์ชัน authenticate
                default:
                    // ส่งผ่านคำขอที่ไม่ได้รับการจัดการ
                    return next.handle(request);
            }
        }

        // ฟังก์ชันจัดการการเข้าสู่ระบบ
        function authenticate() {
            const { username, password } = body; // ดึง username และ password จาก body
            const user = users.find(x => x.username === username && x.password === password); // ค้นหาผู้ใช้ที่ตรงกับ username และ password
            if (!user) return error('Username or password is incorrect'); // ถ้าไม่พบผู้ใช้ให้ส่งข้อผิดพลาด
            return ok({
                ...basicDetails(user), // ส่งข้อมูลพื้นฐานของผู้ใช้
                token: 'fake-jwt-token' // ส่ง token จำลอง
            })
        }

        // ฟังก์ชันช่วยในการตอบสนองที่ถูกต้อง
        function ok(body?: any) {
            return of(new HttpResponse({ status: 200, body })) // ส่ง HttpResponse ที่มีสถานะ 200
                .pipe(delay(500)); // หน่วงเวลาเพื่อจำลองการเรียก API
        }

        // ฟังก์ชันช่วยในการตอบสนองที่มีข้อผิดพลาด
        function error(message: string) {
            return throwError(() => ({ error: { message } })) // ส่งข้อผิดพลาด
                .pipe(materialize(), delay(500), dematerialize()); // จัดการการหน่วงเวลาแม้จะเกิดข้อผิดพลาด
        }

        // ฟังก์ชันช่วยในการดึงข้อมูลพื้นฐานของผู้ใช้
        function basicDetails(user: any) {
            const { id, username, firstName, lastName } = user; // ดึงข้อมูลพื้นฐานของผู้ใช้
            return { id, username, firstName, lastName }; // ส่งคืนข้อมูลพื้นฐาน
        }
    }
}

// สร้าง provider สำหรับ fake backend
export const fakeBackendProvider = {
    // ใช้ fake backend แทนบริการ Http สำหรับการพัฒนาที่ไม่มี backend
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true // ยืนยันว่าจะมี interceptor หลายตัว
};
