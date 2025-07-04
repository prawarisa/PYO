import { Injectable, Output } from '@angular/core'; // นำเข้า Injectable และ Output จาก Angular core
import { Router } from '@angular/router'; // นำเข้า Router เพื่อใช้ในการนำทาง
import { HttpClient } from '@angular/common/http'; // นำเข้า HttpClient สำหรับทำ HTTP requests
import { BehaviorSubject, Observable } from 'rxjs'; // นำเข้า BehaviorSubject และ Observable จาก RxJS
import { map } from 'rxjs/operators'; // นำเข้า map สำหรับการจัดการ observable
import { User } from 'src/app/api/user'; // นำเข้า User interface จากไฟล์ user.ts

const USER_KEY = 'auth-user'; // กำหนด key สำหรับเก็บข้อมูลผู้ใช้ใน sessionStorage
const USER_Daily = 'daily_setup'; // กำหนด key สำหรับข้อมูลการตั้งค่ารายวัน
const Chart_key = 'chart_data'; // กำหนด key สำหรับข้อมูลกราฟ

const url1 = 'http://localhost:3000/api'; // กำหนด URL สำหรับ API

@Injectable({
  providedIn: 'root' // ระบุว่า service นี้จะถูกให้บริการใน root module
})
export class AccountService {
  private userSubject: BehaviorSubject<User | null>; // สร้าง BehaviorSubject สำหรับเก็บข้อมูลผู้ใช้
  public user: Observable<User | null>; // สร้าง observable สำหรับข้อมูลผู้ใช้
  @Output() isLoggedIn: boolean; // กำหนดตัวแปรสำหรับเก็บสถานะการเข้าสู่ระบบ
  private Empcode: string=''; // สร้างตัวแปรสำหรับเก็บ empcode

  setEmpcode(Emp_code:string){ // ฟังก์ชันสำหรับตั้งค่า empcode
    this.Empcode = Emp_code; // ตั้งค่า empcode
  }

  getEmpcode():string{ // ฟังก์ชันสำหรับดึง empcode
    return this.Empcode; // คืนค่า empcode
  }

  constructor( // คอนสตรัคเตอร์ของ service
    private router: Router, // เก็บ Router สำหรับนำทาง
    private http: HttpClient, // เก็บ HttpClient สำหรับทำ HTTP requests
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('user')!)); // เริ่มต้น userSubject ด้วยข้อมูลผู้ใช้จาก sessionStorage
    this.user = this.userSubject.asObservable(); // เปลี่ยน userSubject เป็น observable
  }

  public get userValue() { // ฟังก์ชันสำหรับดึงค่าผู้ใช้ปัจจุบัน
    return this.userSubject.value; // คืนค่าผู้ใช้ปัจจุบัน
  }

  appSignin(data: any): Observable<any> { // ฟังก์ชันสำหรับเข้าสู่ระบบ
    return this.http.post(`${url1}/login`, data) // ส่ง HTTP POST request เพื่อเข้าสู่ระบบ
  }

  register(user: User): Observable<any> { // ฟังก์ชันสำหรับลงทะเบียนผู้ใช้ใหม่
    return this.http.post(`${url1}/register`, user); // ส่ง HTTP POST request เพื่อสร้างผู้ใช้ใหม่
  }

  getmembers(): Observable<any> { // ฟังก์ชันสำหรับดึงรายชื่อสมาชิก
    return this.http.get(`${url1}/memberslist`); // ส่ง HTTP GET request เพื่อดึงรายชื่อสมาชิก
  }

  resetpassword(data: any): Observable<any> { // ฟังก์ชันสำหรับรีเซ็ตรหัสผ่าน
    return this.http.post(`${url1}/re_pass`, data); // ส่ง HTTP POST request เพื่อรีเซ็ตรหัสผ่าน
  }

  logout() { // ฟังก์ชันสำหรับออกจากระบบ
    sessionStorage.removeItem('user'); // ลบข้อมูลผู้ใช้จาก sessionStorage
    this.userSubject.next(null); // ตั้งค่า userSubject เป็น null
    this.router.navigate(['/auth/login']); // นำทางไปยังหน้าเข้าสู่ระบบ
  }

  Loginouttime(data: any): Observable<any> { // ฟังก์ชันสำหรับบันทึกเวลาที่ออกจากระบบ
    return this.http.post(`${url1}/Logout_time`, data) // ส่ง HTTP POST request เพื่อบันทึกเวลาที่ออกจากระบบ
  }

  public saveUser(Emp_Code : any): void { // ฟังก์ชันสำหรับบันทึกข้อมูลผู้ใช้
    window.sessionStorage.removeItem(USER_KEY); // ลบข้อมูลผู้ใช้จาก sessionStorage
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(Emp_Code)); // บันทึกข้อมูลผู้ใช้ลง sessionStorage
  }

  public removeuser(): any { // ฟังก์ชันสำหรับลบข้อมูลผู้ใช้
    window.sessionStorage.removeItem(USER_KEY); // ลบข้อมูลผู้ใช้จาก sessionStorage
  }

  public getUser(): any { // ฟังก์ชันสำหรับดึงข้อมูลผู้ใช้
    const Emp_Code = window.sessionStorage.getItem(USER_KEY); // ดึงข้อมูลผู้ใช้จาก sessionStorage
    if (Emp_Code) { // หากมีข้อมูลผู้ใช้
      return JSON.parse(Emp_Code); // คืนค่าข้อมูลผู้ใช้
    }
    return {}; // หากไม่มีข้อมูลผู้ใช้ คืนค่าเป็นวัตถุว่าง
  }

  private Doc_no: string; // กำหนดตัวแปรสำหรับหมายเลขเอกสาร
  private Local: number; // กำหนดตัวแปรสำหรับข้อมูลโลคอล
  private source: string; // กำหนดตัวแปรสำหรับแหล่งข้อมูล

  setData(Doc_no:string, Local: number, source: string) { // ฟังก์ชันสำหรับตั้งค่าข้อมูล
    this.Doc_no = Doc_no; // ตั้งค่า Doc_no
    this.Local = Local; // ตั้งค่า Local
    this.source = source; // ตั้งค่า source
  }

  getData() { // ฟังก์ชันสำหรับดึงข้อมูล
    return { Doc_no:this.Doc_no, Local: this.Local, source: this.source }; // คืนค่าข้อมูล Doc_no, Local และ source
  }

}
