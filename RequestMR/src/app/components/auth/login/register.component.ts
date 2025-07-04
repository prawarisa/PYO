import { Component, OnInit } from '@angular/core'; // นำเข้า Component และ OnInit จาก Angular core
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // นำเข้า FormBuilder, FormControl, FormGroup และ Validators สำหรับจัดการฟอร์ม
import { ActivatedRoute, Router } from '@angular/router'; // นำเข้า ActivatedRoute และ Router สำหรับการจัดการเส้นทาง
import { AccountService } from 'src/app/services/account.service'; // นำเข้า AccountService สำหรับการจัดการบัญชีผู้ใช้
import { first } from 'rxjs'; // นำเข้า first จาก rxjs
import Swal from 'sweetalert2'; // นำเข้า Swal สำหรับการแสดง Alert

@Component({
  selector: 'app-register', // กำหนด selector สำหรับคอมโพเนนต์นี้
  templateUrl: './register.component.html', // กำหนดเทมเพลต HTML
  styleUrls: ['./register.component.scss'] // กำหนดไฟล์สไตล์ SCSS
})
export class RegisterComponent implements OnInit {
  regisform!: FormGroup; // กำหนดตัวแปร regisform สำหรับฟอร์มลงทะเบียน
  loading = false; // กำหนดสถานะการโหลด
  submitted = false; // กำหนดสถานะการส่งข้อมูล
  error?: string; // กำหนดตัวแปรสำหรับเก็บข้อผิดพลาด
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; // รูปแบบการตรวจสอบอีเมล
  newPassword = new FormControl(null, [ // สร้าง FormControl สำหรับรหัสผ่านใหม่พร้อมการตรวจสอบ
    (c: AbstractControl) => Validators.required(c), // ตรวจสอบให้แน่ใจว่ามีค่ารหัสผ่าน
    Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,30}$/), // รูปแบบรหัสผ่านที่ต้องการ
  ]);

  constructor(
    private formBuilder: FormBuilder, // Inject FormBuilder สำหรับจัดการฟอร์ม
    private route: ActivatedRoute, // Inject ActivatedRoute สำหรับการเข้าถึงข้อมูลเส้นทาง
    private router: Router, // Inject Router สำหรับการนำทาง
    private account: AccountService // Inject AccountService สำหรับการจัดการบัญชีผู้ใช้
  ) {
    // เปลี่ยนเส้นทางไปยังหน้าแรกหากผู้ใช้เข้าสู่ระบบอยู่แล้ว
    if (this.account.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    // สร้างฟอร์มด้วย FormBuilder
    this.regisform = this.formBuilder.group({
      Emp_Code : ['', Validators.required], // กำหนดฟิลด์รหัสพนักงานและตรวจสอบว่าจำเป็นต้องกรอก
      Emp_Pwd : this.newPassword, // ใช้ FormControl สำหรับรหัสผ่านใหม่
    });
  }

  get f() { return this.regisform.controls; } // กำหนดตัวแปรเพื่อเข้าถึงฟิลด์ในฟอร์ม

  onSubmit() {
    this.submitted = true; // ตั้งค่าสถานะการส่งข้อมูลเป็น true
    // รีเซ็ตข้อความแสดงข้อผิดพลาดเมื่อส่งข้อมูล
    this.error = '';
    // หยุดการทำงานหากฟอร์มไม่ถูกต้อง
    if (this.regisform.invalid) {
      return;
    }
    console.log(this.regisform.value); // แสดงค่าฟอร์มในคอนโซล
    this.loading = true; // ตั้งค่าสถานะการโหลดเป็น true
    this.account.register(this.regisform.value) // เรียกใช้ฟังก์ชัน register จาก AccountService
      .pipe(first()) // ใช้ first() เพื่อรับค่าครั้งแรก
      .subscribe({
        next: (response) => { // ถ้าการลงทะเบียนสำเร็จ
          console.log(response) // แสดงผลลัพธ์ในคอนโซล

          // แสดง alert ว่าการลงทะเบียนสำเร็จ
          Swal.fire({
            icon: 'success',
            title: 'Register Successful!',
            confirmButtonColor: 'success',
            confirmButtonText: 'OK'
          }).then((result) => { // เมื่อกดปุ่ม OK
            if (result.isConfirmed) {
              this.router.navigate(['/auth/login']); // เปลี่ยนเส้นทางไปยังหน้าลงชื่อเข้าใช้
            }
          })
        },
        error: error => { // หากเกิดข้อผิดพลาด
          this.error = error; // เก็บข้อความข้อผิดพลาด
          this.loading = false; // ตั้งค่าสถานะการโหลดเป็น false
        }
      });
  }

}
