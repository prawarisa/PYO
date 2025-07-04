import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // นำเข้า Router สำหรับการนำทาง
@Component({
  selector: 'app-set-up-add-master',
  templateUrl: './set-up-add-master.component.html',
  styleUrls: ['./set-up-add-master.component.scss']
})
export class SetUpAddMasterComponent {
  constructor(private router: Router) {} // Inject Router
  // Form Data
  formData = {
    itemNo: '',
    partNo: '',
    process: '',
    mcName: '',
    mcType: '',
    spec: '',
    usage: '',
    remark: '',
  };

  selectedFile: File | null = null;

  // ฟังก์ชันสำหรับจัดการเมื่อเลือกไฟล์
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      console.log('Selected file:', this.selectedFile);
    }
  }


  // ฟังก์ชันสำหรับจัดการเมื่อกด Submit
  onSubmit() {
    Swal.fire({
      title: 'Do You Want to Add?',
      text: 'Please confirm to add this item.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Add',
      cancelButtonText: 'Don\'t Add',
    }).then((result) => {
      if (result.isConfirmed) {
        this.saveData();
      } else {
        console.log('User cancelled.');
      }
    });
  }

  // Save Data
  saveData() {
    // บันทึกข้อมูล
    console.log('Saved Data:', this.formData);

    // แสดงป๊อปอัปสำเร็จ
    Swal.fire({
      title: 'Added Successfully!',
      text: 'The item has been added.',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    }).then(() => {
      // Reset form
      this.formData = {
        itemNo: '',
        partNo: '',
        process: '',
        mcName: '',
        mcType: '',
        spec: '',
        usage: '',
        remark: '',
      };
    });
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
        this.router.navigate(['/pages/add-set-up']); // ใช้ Router เพื่อนำทาง
      }
    });
  }
}
