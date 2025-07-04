import { Component, OnInit } from '@angular/core'; // นำเข้า Component และ OnInit จาก Angular core
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // นำเข้าคลาสที่เกี่ยวข้องกับฟอร์ม
import { ActivatedRoute, Router } from '@angular/router'; // นำเข้าคลาสสำหรับการจัดการเส้นทาง
import { AccountService } from 'src/app/services/account.service'; // นำเข้าบริการบัญชี
import { first } from 'rxjs'; // นำเข้า first operator จาก RxJS

@Component({
  selector: 'app-initialpassword', // กำหนดชื่อคอมโพเนนต์
  templateUrl: './initialpassword.component.html', // ไฟล์เทมเพลต HTML
  styleUrls: ['./initialpassword.component.scss'] // ไฟล์ CSS
})
export class InitialpasswordComponent implements OnInit {
  passwordsMatching = false; // ตัวแปรสำหรับตรวจสอบรหัสผ่านที่ตรงกัน
  isConfirmPasswordDirty = false; // ตัวแปรสำหรับตรวจสอบว่ารหัสผ่านยืนยันถูกแก้ไขแล้ว
  confirmPasswordClass = 'form-control'; // คลาส CSS สำหรับฟิลด์รหัสผ่านยืนยัน
  loading = false; // ตัวแปรสำหรับแสดงสถานะการโหลด
  submitted = false; // ตัวแปรสำหรับตรวจสอบว่าฟอร์มถูกส่งแล้ว
  error?: string; // ตัวแปรสำหรับเก็บข้อความข้อผิดพลาด
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"; // รูปแบบอีเมลที่ใช้ตรวจสอบ

  // สร้าง FormControl สำหรับรหัสผ่านใหม่
  newPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c), // ตรวจสอบว่าฟิลด์นี้จำเป็นต้องกรอก
    Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,10}$/), // รูปแบบรหัสผ่าน
  ]);

  // สร้าง FormControl สำหรับการยืนยันรหัสผ่าน
  confirmPassword = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c), // ตรวจสอบว่าฟิลด์นี้จำเป็นต้องกรอก
    Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,10}$/), // รูปแบบรหัสผ่าน
  ]);

  // สร้าง FormControl สำหรับวันเกิด
  birthday = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c), // ตรวจสอบว่าฟิลด์นี้จำเป็นต้องกรอก
    Validators.pattern(/^((19\d{2})|(20\d{2}))(((02)(0[1-9]|[1-2][0-9]))|(((0(1|[3-9]))|(1[0-2]))(0[1-9]|[1-2][0-9]|30))|((01|03|05|07|08|10|12)(31)))$/) // รูปแบบวันเกิด
  ]);

  // สร้าง FormControl สำหรับชื่อผู้ใช้
  userName = new FormControl(null, [
    (c: AbstractControl) => Validators.required(c), // ตรวจสอบว่าฟิลด์นี้จำเป็นต้องกรอก
  ]);

  // สร้าง FormGroup สำหรับฟอร์ม
  resetPasswordForm = this.formBuilder.group(
    {
      username: this.userName,
      newPassword: this.newPassword,
      confirmPassword: this.confirmPassword,
      b_date: this.birthday
    },
    {
      validator: this.ConfirmedValidator('newPassword', 'confirmPassword'), // ตรวจสอบการตรงกันของรหัสผ่าน
    }
  );

  constructor(
    private formBuilder: FormBuilder, // สร้างฟอร์ม
    private route: ActivatedRoute, // จัดการเส้นทางที่ใช้งานอยู่
    private router: Router, // จัดการการนำทาง
    private account: AccountService // ใช้บริการบัญชี
  ) {
    // ถ้าผู้ใช้เข้าสู่ระบบอยู่แล้ว นำทางไปยังหน้าแรก
    if (this.account.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    // เมื่อคอมโพเนนต์ถูกสร้างขึ้น
  }

  // ฟังก์ชันสำหรับส่งฟอร์ม
  onSubmit() {
    this.submitted = true; // ตั้งค่าตัวแปรว่าได้ส่งฟอร์มแล้ว
    if (this.resetPasswordForm.invalid) { // ตรวจสอบความถูกต้องของฟอร์ม
      return;
    }
    this.loading = true; // ตั้งค่าตัวแปรให้แสดงสถานะการโหลด
    this.account.resetpassword(this.resetPasswordForm.value) // เรียกใช้บริการรีเซ็ตรหัสผ่าน
      .subscribe({
        next: (response) => {
          console.log(response); // แสดงผลการตอบกลับ
          this.router.navigate(['/auth/login']); // นำทางไปยังหน้าเข้าสู่ระบบ
        },
        error: error => {
          this.error = error; // เก็บข้อผิดพลาด
          this.loading = false; // ยกเลิกสถานะการโหลด
        }
      });
  }

  // ฟังก์ชันตรวจสอบการตรงกันของรหัสผ่าน (ถูกคอมเมนต์ไว้)
  // checkPasswords(pw: string, cpw: string) {
  //   console.log(pw, cpw);
  //   if (pw === cpw) {
  //     this.passwordsMatching = true;
  //     this.isConfirmPasswordDirty = true;
  //     this.confirmPasswordClass = 'form-control is-valid';
  //     console.log(this.passwordsMatching);
  //   } else {
  //     this.passwordsMatching = false;
  //     this.isConfirmPasswordDirty = false;
  //     this.confirmPasswordClass = 'form-control is-invalid';
  //     console.log(this.passwordsMatching, this.isConfirmPasswordDirty);
  //   }
  // }

  // ฟังก์ชันตรวจสอบความตรงกันของรหัสผ่าน
  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName]; // รับค่าฟิลด์รหัสผ่านใหม่
      const matchingControl = formGroup.controls[matchingControlName]; // รับค่าฟิลด์รหัสผ่านยืนยัน
      if (
        matchingControl.errors && // ถ้ามีข้อผิดพลาดในฟิลด์ยืนยัน
        !matchingControl.errors['confirmedValidator'] // และไม่ใช่การตรวจสอบการตรงกัน
      ) {
        return; // ออกจากฟังก์ชัน
      }
      if (control.value !== matchingControl.value) { // ถ้ารหัสผ่านไม่ตรงกัน
        matchingControl.setErrors({ confirmedValidator: true }); // ตั้งค่าข้อผิดพลาด
      } else {
        matchingControl.setErrors(null); // ถ้าตรงกันไม่ตั้งค่าข้อผิดพลาด
      }
    };
  }
}
