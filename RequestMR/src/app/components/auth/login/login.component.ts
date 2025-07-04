import { AccountService } from './../../../services/account.service'; // นำเข้า AccountService สำหรับการจัดการบัญชีผู้ใช้
import { Component, OnInit, Output } from '@angular/core'; // นำเข้า Component และ OnInit จาก Angular core
import { Router, ActivatedRoute, RouterLink } from '@angular/router'; // นำเข้า Router และ ActivatedRoute สำหรับการนำทาง
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // นำเข้า FormBuilder และ Validators สำหรับการจัดการฟอร์ม
import { LayoutService } from 'src/app/services/app.layout.service'; // นำเข้า LayoutService
import { MessageService } from 'primeng/api'; // นำเข้า MessageService สำหรับการแสดงข้อความ
import { first } from 'rxjs/operators'; // นำเข้า first operator จาก RxJS
import { timer } from 'rxjs'; // นำเข้า timer จาก RxJS
import * as CryptoJS from 'crypto-js'; // นำเข้า CryptoJS สำหรับการเข้ารหัสข้อมูล




@Component({
  selector: 'app-login', // ชื่อคอมโพเนนต์
  templateUrl: './login.component.html', // ไฟล์ HTML ที่ใช้สำหรับคอมโพเนนต์
  styleUrls: ['./login.component.scss'], // ไฟล์ SCSS ที่ใช้สำหรับคอมโพเนนต์
  providers: [MessageService], // ให้บริการ MessageService
})
export class LoginComponent implements OnInit { // ประกาศคอมโพเนนต์ LoginComponent
  loginform!: FormGroup; // สร้างฟอร์มสำหรับการเข้าสู่ระบบ
  loading = false; // สถานะการโหลด
  submitted = false; // สถานะการส่งฟอร์ม
  error?: string; // ข้อความแสดงข้อผิดพลาด
  Emp: string; // ตัวแปรเก็บรหัสพนักงาน
  password: any; // ตัวแปรเก็บรหัสผ่าน
  currentUser: any; // ตัวแปรเก็บข้อมูลผู้ใช้ปัจจุบัน
  conversionEncryptOutput: string; // ตัวแปรสำหรับการเข้ารหัส
  currentLanguage: string = 'en';

  @Output() isLoggedIn: boolean; // สถานะการล็อกอิน
  visible: boolean = false; // สถานะการแสดงผล
  Empcode: string = ''; // ตัวแปรเก็บรหัสพนักงาน

  constructor(
    private fb: FormBuilder, // สร้างอินสแตนซ์ของ FormBuilder
    private route: ActivatedRoute, // สร้างอินสแตนซ์ของ ActivatedRoute
    private router: Router, // สร้างอินสแตนซ์ของ Router
    public layoutService: LayoutService, // สร้างอินสแตนซ์ของ LayoutService
    public accountService: AccountService, // สร้างอินสแตนซ์ของ AccountService
    private messageService: MessageService, // สร้างอินสแตนซ์ของ MessageService

    ) {


      }

  // ส่ง Empcode ไปยัง request โดยผ่าน AccountService
  onLogin() {
    this.accountService.setEmpcode(this.Empcode); // ตั้งค่า Empcode ใน AccountService
    // ใช้ค่าภาษาปัจจุบันโดยไม่เปลี่ยนแปลง

  }


  // เก็บค่า username, password ลงใน formgroup
  async ngOnInit() {

    this.loginform = this.fb.group({ // สร้างฟอร์มสำหรับเข้าสู่ระบบ
      Emp_Code: ['', Validators.required], // ฟิลด์รหัสพนักงาน (จำเป็นต้องกรอก)
      Emp_Pwd: ['', Validators.required], // ฟิลด์รหัสผ่าน (จำเป็นต้องกรอก)
    });
  }

  get f() {
    return this.loginform.controls; // คืนค่าฟิลด์ของฟอร์ม
  }

  // ปุ่ม Sign in
  onSubmit() {
    const data = { // สร้างอ็อบเจ็กต์ข้อมูลสำหรับส่งไปยัง API
      Emp_Code: this.Emp.toUpperCase(), // แปลงรหัสพนักงานเป็นตัวพิมพ์ใหญ่
      Emp_Pwd: this.password, // รหัสผ่าน
    };
    console.log(data); // แสดงข้อมูลใน console

    this.accountService.appSignin(data).subscribe({ // เรียกใช้ฟังก์ชันเข้าสู่ระบบจาก AccountService
      next: (response) => { // เมื่อได้รับการตอบกลับจาก API
        console.log('API Response:', response); // แสดงผลลัพธ์จาก API

        if (response.auth === true) { // ถ้าการยืนยันตัวตนสำเร็จ
          console.log('Login Successful:', response); // แสดงผลลัพธ์การเข้าสู่ระบบ
          this.accountService.saveUser(response.user); // บันทึกข้อมูลผู้ใช้ใน AccountService
          this.isLoggedIn = true; // ตั้งค่าสถานะการล็อกอิน
          this.router.navigate(['request']); // นำทางไปยังหน้า request
          this.messageService.add({ // แสดงข้อความสำเร็จ
            severity: 'success',
            summary: 'Success',
            detail: response.message || 'Login success',
          });
        } else {
          // แสดงข้อความตาม response.message ที่ส่งมาจาก backend
          let errorMessage = response.message || 'Oops... รหัสพนักงานหรือรหัสผ่านไม่ถูกต้อง!';
          this.messageService.add({ // แสดงข้อความแสดงข้อผิดพลาด
            severity: 'error',
            summary: 'Error',
            detail: errorMessage,
          });
        }
      },
      error: (error) => { // ถ้ามีข้อผิดพลาดในการเรียก API
        console.log('Error:', error); // แสดงข้อผิดพลาดใน console
        this.messageService.add({ // แสดงข้อความแสดงข้อผิดพลาด
          severity: 'error',
          summary: 'Error',
          detail: 'Oops... รหัสพนักงานหรือรหัสผ่านไม่ถูกต้อง!',
        });
        this.loading = false; // ปิดสถานะการโหลด
      },
    });
  }

  logout() {
    // เรียก service logout และ redirect ไปหน้า login
    this.accountService.logout(); // เรียกใช้ฟังก์ชัน logout จาก AccountService
    this.router.navigate(['/login']); // นำทางไปยังหน้า login
    this.messageService.add({ // แสดงข้อความเมื่อออกจากระบบ
      severity: 'info',
      summary: 'Logged Out',
      detail: 'Session expired. Please login again.',
    });
  }

  emp_loginout() {
    this.currentUser = this.accountService.getUser(); // ดึงข้อมูลผู้ใช้ปัจจุบันจาก AccountService
    const data = {
      Emp_Code: this.currentUser.MemberCode, // รหัสพนักงานจากข้อมูลผู้ใช้
      Numcheck: '0', // ค่าที่ใช้สำหรับการตรวจสอบ
    };
    console.log(data); // แสดงข้อมูลใน console
    this.accountService.Loginouttime(data).subscribe({ // เรียกใช้ฟังก์ชันบันทึกเวลาที่ออกจากระบบ
      next: (response) => {
        console.log(response); // แสดงผลลัพธ์จาก API
      },
      error: (e) => console.error(e), // แสดงข้อผิดพลาดใน console
    });
  }
}
