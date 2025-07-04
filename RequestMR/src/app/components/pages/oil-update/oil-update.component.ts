import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // นำเข้า Router สำหรับการนำทาง


@Component({
  selector: 'app-oil-update',
  templateUrl: './oil-update.component.html',
  styleUrls: ['./oil-update.component.scss']
})
export class OilUpdateComponent {
  // ตัวเลือก Dropdown
 itemNoOptions = [
  { label: 'Item 001', value: { partNo: 'Part001', process: 'Drilling', mcName: 'Machine001', mcType: 'TypeA', spec: 'Spec1', usage: 'High', remark: 'N/A', image: 'https://amadine.com/assets/img/articles/ui-design/contemporary-ui-design@2x.jpg' } },
  { label: 'Item 002', value: { partNo: 'Part002', process: 'Cutting', mcName: 'Machine002', mcType: 'TypeB', spec: 'Spec2', usage: 'Medium', remark: 'N/A', image: 'https://via.placeholder.com/150' } },
  { label: 'Item 003', value: { partNo: 'Part003', process: 'Grinding', mcName: 'Machine003', mcType: 'TypeC', spec: 'Spec3', usage: 'Low', remark: 'N/A', image: 'https://via.placeholder.com/150' } },
];

  // ตัวแปรสำหรับเก็บค่าที่เลือก
  selectedItem: any = null;

  // ข้อมูลในฟอร์ม
  formData = {
    partNo: '',
    process: '',
    mcName: '',
    mcType: '',
    spec: '',
    usage: '',
    remark: '',
    image: '', // รูปภาพปัจจุบันจากฐานข้อมูล
  };

  selectedFile: File | null = null; // เก็บไฟล์ใหม่
  currentImageUrl: string = ''; // เก็บ URL ของรูปภาพปัจจุบัน
  constructor(private router: Router) {} // Inject Router

  // เมื่อเลือก Item No จาก Dropdown
  onItemSelect(event: any) {
    if (this.selectedItem && this.selectedItem.value) {
      const selectedValue = this.selectedItem.value;

      // อัปเดตข้อมูลในฟอร์ม
      this.formData = {
        partNo: selectedValue.partNo || '',
        process: selectedValue.process || '',
        mcName: selectedValue.mcName || '',
        mcType: selectedValue.mcType || '',
        spec: selectedValue.spec || '',
        usage: selectedValue.usage || '',
        remark: selectedValue.remark || '',
        image: selectedValue.image || '',
      };

      // แสดงรูปภาพปัจจุบัน
      this.currentImageUrl = selectedValue.image || 'https://via.placeholder.com/150';
    } else {
      this.resetForm(); // รีเซ็ตฟอร์มหากไม่มีการเลือก
    }
  }

  // ฟังก์ชันสำหรับอัปโหลดไฟล์
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0]; // เก็บไฟล์ใหม่
      this.currentImageUrl = URL.createObjectURL(this.selectedFile); // แสดงรูปใหม่แบบ preview
      console.log('New selected file:', this.selectedFile);
    }
  }

  // ฟังก์ชันที่เรียกเมื่อกดปุ่ม Save
  onSubmit() {
    Swal.fire({
      title: 'Do You Want to Update?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Update',
      cancelButtonText: "Don't Update",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Update Master Complete!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          // Reset form หลังบันทึกสำเร็จ
          this.resetForm();
        });
        console.log('Data Saved:', this.formData);
      } else {
        console.log('Save Cancelled');
      }
    });
  }

  // ฟังก์ชันสำหรับรีเซ็ตฟอร์ม
  resetForm() {
    this.formData = {
      partNo: '',
      process: '',
      mcName: '',
      mcType: '',
      spec: '',
      usage: '',
      remark: '',
      image: '',
    };
    this.currentImageUrl = ''; // ล้างรูปภาพปัจจุบัน
    this.selectedFile = null; // ล้างไฟล์ใหม่
  }
  // ฟังก์ชันสำหรับจัดการปุ่ม Back
  onBack() {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'Any unsaved changes will be lost.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Go Back',
      cancelButtonText: 'Stay',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Navigating back...');
        this.router.navigate(['/pages/add-oil']); // ใช้ Router เพื่อนำทาง
      }
    });
  }
}
