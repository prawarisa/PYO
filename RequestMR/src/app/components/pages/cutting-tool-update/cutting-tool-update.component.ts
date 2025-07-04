import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // นำเข้า Router สำหรับการนำทาง

@Component({
  selector: 'app-cutting-tool-update',
  templateUrl: './cutting-tool-update.component.html',
  styleUrls: ['./cutting-tool-update.component.scss'],
})
export class CuttingToolUpdateComponent {
  // Dropdown Options
  noOptions = [
    { label: 'No. 001', value: '001' },
    { label: 'No. 002', value: '002' },
    { label: 'No. 003', value: '003' },
  ];

  itemNoOptions = [
    { label: 'Item 001', value: { no: '001', partNo: 'Part001', process: 'Drilling', mcName: 'Machine001', mcType: 'TypeA', spec: 'Spec1', usage: 'High', remark: 'N/A', image: 'https://via.placeholder.com/150' } },
    { label: 'Item 002', value: { no: '001', partNo: 'Part002', process: 'Cutting', mcName: 'Machine002', mcType: 'TypeB', spec: 'Spec2', usage: 'Medium', remark: 'N/A', image: 'https://via.placeholder.com/150' } },
    { label: 'Item 003', value: { no: '002', partNo: 'Part003', process: 'Grinding', mcName: 'Machine003', mcType: 'TypeC', spec: 'Spec3', usage: 'Low', remark: 'N/A', image: 'https://via.placeholder.com/150' } },
    { label: 'Item 004', value: { no: '002', partNo: 'Part004', process: 'Milling', mcName: 'Machine004', mcType: 'TypeD', spec: 'Spec4', usage: 'High', remark: 'N/A', image: 'https://via.placeholder.com/150' } },
  ];

  // ตัวแปรสำหรับเก็บค่าที่เลือก
  selectedNo: any = null;
  selectedItem: any = null;
  filteredItemNoOptions: any[] = [...this.itemNoOptions]; // ตั้งค่าเริ่มต้นเป็นรายการทั้งหมด


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

  // เมื่อเลือก No.
  // ตรวจสอบการเลือก No. และกรองรายการ
  onNoSelect(event: any) {
    console.log('Selected No:', this.selectedNo); // ตรวจสอบค่า No. ที่เลือก
    console.log('Item No Options:', this.itemNoOptions); // ตรวจสอบรายการทั้งหมด

    if (this.selectedNo) {
      this.filteredItemNoOptions = this.itemNoOptions.filter(
        (item) => item.value.no === String(this.selectedNo.value)
      );

      console.log('Filtered Item No Options:', this.filteredItemNoOptions); // ตรวจสอบรายการที่กรองได้
      this.selectedItem = null; // รีเซ็ตค่า Item No.
      this.resetForm(); // รีเซ็ตฟอร์ม
    } else {
      this.filteredItemNoOptions = []; // ถ้าไม่มี No. ที่เลือก ให้ล้างรายการ Item No.
      console.log('No selected, clearing filtered items.');
    }
  }
  // เมื่อเลือก Item No.
  onItemSelect(event: any) {
    if (this.selectedItem) {
      const selectedValue = this.selectedItem.value;

      // เติมข้อมูลในฟอร์ม
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

      this.currentImageUrl = selectedValue.image || 'https://via.placeholder.com/150';
    } else {
      this.resetForm(); // รีเซ็ตฟอร์มถ้าไม่มีการเลือก
    }
      // แสดงรูปภาพปัจจุบัน
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
        this.router.navigate(['/pages/add-cuttingtool']); // ใช้ Router เพื่อนำทาง
      }
    });
  }
}
