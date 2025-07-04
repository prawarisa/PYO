import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-oil',
  templateUrl: './request-oil.component.html',
  styleUrls: ['./request-oil.component.scss']
})
export class RequestOilComponent {
  // ตัวเลือกใน Dropdown
  Div = [
    { label: 'GM', value: 'GM' },
    { label: 'PMC', value: 'PMC' }
  ];

  Fac = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' }
  ];

  req_process = [
    { OPIST_Process: 'Drilling' },
    { OPIST_Process: 'Cutting' },
    { OPIST_Process: 'Grinding' }
  ];

  req_mc = [
    { OPIST_MC: 'MC-A' },
    { OPIST_MC: 'MC-B' },
    { OPIST_MC: 'MC-C' }
  ];

  cases = [
    { label: 'Top up', value: 'Top up' },
    { label: 'Clean Tank', value: 'Clean Tank' }

  ];

  // ตัวแปรสำหรับจัดการฟอร์ม
  div_ = null; // ค่า Div ที่เลือก
  fac_ = null; // ค่า Fac ที่เลือก
  process_ = null; // ค่า Process ที่เลือก
  machineGroup = null; // ค่า Machine Type ที่เลือก

  showTable = false; // ควบคุมการแสดงผลของตาราง
  items: any[] = []; // ข้อมูลทั้งหมดในตาราง
  filteredItems: any[] = []; // ข้อมูลที่กรองตามเงื่อนไข

  constructor(private router: Router) {
    this.initializeItems();
  }

  // กำหนดข้อมูลจำลองในตาราง
  initializeItems(): void {
    this.items = [
      {
        OPIST_ItemNo: 'P001',
        OPIST_Process: 'Drilling',
        OPIST_MC: 'MC-A',
        SPEC: 'Spec-A',
        MC_no: '',
        Qty: '',
        selectedCase: null
      },
      {
        OPIST_ItemNo: 'P002',
        OPIST_Process: 'Drilling',
        OPIST_MC: 'MC-A',
        SPEC: 'Spec-A',
        MC_no: '',
        Qty: '',
        selectedCase: null
      },
      {
        OPIST_ItemNo: 'P002',
        OPIST_Process: 'Cutting',
        OPIST_MC: 'MC-B',
        SPEC: 'Spec-B',
        MC_no: '',
        Qty: '',
        selectedCase: null
      },
      {
        OPIST_ItemNo: 'P003',
        OPIST_Process: 'Grinding',
        OPIST_MC: 'MC-C',
        SPEC: 'Spec-C',
        MC_no: '',
        Qty: '',
        selectedCase: null
      }
    ];
  }

  // ฟังก์ชันกรองข้อมูลในตารางตาม Process และ MC Type ที่เลือก
  filterItems(): void {
    if (!this.process_ || !this.machineGroup) {
      this.filteredItems = [];
      this.showTable = false;
      return;
    }

    // กรองข้อมูล
    this.filteredItems = this.items.filter(
      (item) =>
        item.OPIST_Process === this.process_.OPIST_Process &&
        item.OPIST_MC === this.machineGroup.OPIST_MC
    );

    // ล็อคค่า Case เป็น "Setup" (ใช้เฉพาะ value)
    this.filteredItems.forEach((item) => {
      item.selectedCase = 'Setup'; // กำหนดค่า value ตรงกับ dropdown
    });

    this.showTable = this.filteredItems.length > 0;
    console.log('Filtered Items:', this.filteredItems);
  }

  showSetup(): void {
    this.filterItems(); // กรองข้อมูลตาม Process และ MC Type

    // ล็อคค่า Case เป็น 'Setup'
    this.filteredItems.forEach((item) => {
      item.lockedCase = 'Setup'; // ฟิลด์ใหม่สำหรับล็อคค่า
      item.selectedCase = null; // ไม่ต้องใช้ dropdown
    });

    console.log('Filtered Items (Setup):', this.filteredItems);
  }


  // ฟังก์ชันแสดงตารางสำหรับ Other
  showOther(): void {
    this.filterItems(); // กรองข้อมูลตาม Process และ MC Type

    // ปลดล็อค dropdown และให้แสดงค่า "Top up" กับ "Clean Tank"
    this.filteredItems.forEach((item) => {
      item.lockedCase = null; // ปลดล็อค dropdown
      item.selectedCase = null; // รีเซ็ตค่า Case
    });

    console.log('Filtered Items (Other):', this.filteredItems);
  }


  // ฟังก์ชันล้างข้อมูลและซ่อนตาราง
  cleardata(): void {
    this.div_ = []; // เคลียร์ข้อมูลที่กรอง
    this.fac_ = []; // เคลียร์ข้อมูลที่กรอง
    this.process_ =[]; // เคลียร์ข้อมูลที่กรอง
    this.machineGroup = []; // เคลียร์ข้อมูลที่กรอง
    this.filteredItems = []; // เคลียร์ข้อมูลที่กรอง
    this.showTable = false; // ซ่อนตาราง
    console.log('Form cleared and table hidden!');
  }
   // Popup สำหรับ Add to Cart
   addToCartPopup(): void {
    Swal.fire({
      title: 'Add to Cart',
      text: 'Are you sure you want to add these items to the cart?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, add them!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.addToCart(); // เพิ่มข้อมูลลงตะกร้า

        // แสดงป๊อปอัพสำเร็จ พร้อมปุ่ม OK
        Swal.fire({
          icon: 'success',
          title: 'Added!',
          text: 'The items have been added to your cart.',
          confirmButtonText: 'OK', // ปุ่ม OK ที่ให้ผู้ใช้กด
        }).then(() => {
          // เมื่อกด OK ให้เปลี่ยนหน้าไปยัง cart-oil
          this.router.navigate(['/pages/cart-oil']);
        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // ถ้าผู้ใช้กด Cancel
        Swal.fire('Cancelled', 'No items were added to the cart.', 'error');
      }
    });
  }
  // ฟังก์ชันสำหรับเพิ่มข้อมูลลงในตะกร้า
  addToCart(): void {
    console.log('Items added to the cart!'); // คุณสามารถเพิ่มการทำงานเพิ่มเติมที่นี่
  }
}
