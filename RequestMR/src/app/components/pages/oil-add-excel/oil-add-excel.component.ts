import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // นำเข้า Router สำหรับการนำทาง

@Component({
  selector: 'app-oil-add-excel',
  templateUrl: './oil-add-excel.component.html',
  styleUrls: ['./oil-add-excel.component.scss']
})
export class OilAddExcelComponent {
  selectedFile: File | null = null; // เก็บไฟล์ที่เลือก
  selectedFileName: string = ''; // ชื่อไฟล์ที่เลือก
  uploadProgress: number = 0; // ค่าความคืบหน้า
  showProgress: boolean = false; // ควบคุมการแสดง Progress Bar

  constructor(private router: Router) {} // Inject Router

  // ฟังก์ชันเปิด File Input
  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  // ฟังก์ชันเมื่อเลือกไฟล์
  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.selectedFile = event.target.files[0];
      this.selectedFileName = this.selectedFile.name;
      console.log('Selected file:', this.selectedFile.name);
    } else {
      this.selectedFileName = '';
    }
  }

  // ฟังก์ชันสำหรับอัปโหลดไฟล์
onUpload() {
  if (!this.selectedFile) {
    // ใช้ Swal แทน alert
    Swal.fire({
      title: 'No file selected!',
      text: 'Please select a file to upload.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
    return;
  }

  this.showProgress = true;
  this.uploadProgress = 0;

  // จำลองการอัปโหลดไฟล์ (Progress bar)
  const interval = setInterval(() => {
    if (this.uploadProgress >= 100) {
      clearInterval(interval);

      // แสดงป๊อปอัปเมื่ออัปโหลดสำเร็จ
      Swal.fire({
        title: 'Upload Successful!',
        text: `Your file "${this.selectedFileName}" has been uploaded.`,
        icon: 'success',
        confirmButtonText: 'OK',
      }).then(() => {
        this.resetUpload(); // รีเซ็ตสถานะการอัปโหลด
      });
    } else {
      this.uploadProgress += 10; // เพิ่ม progress ทีละ 10%
    }
  }, 500); // อัปเดต progress ทุก 500ms
}

  // ฟังก์ชันสำหรับรีเซ็ตสถานะการอัปโหลด
  resetUpload() {
    this.selectedFile = null;
    this.selectedFileName = '';
    this.uploadProgress = 0;
    this.showProgress = false;
  }

  // ฟังก์ชันสำหรับปุ่ม Back
  onBack() {
    console.log('Navigating back...');
    this.router.navigate(['/pages/add-oil']); // นำทางไปยังหน้า /pages/cutting
  }
}
