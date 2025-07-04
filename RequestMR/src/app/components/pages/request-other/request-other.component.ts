import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-request-other',
  templateUrl: './request-other.component.html',
  styleUrls: ['./request-other.component.scss']
})
export class RequestOtherComponent {
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

  constructor() {
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
    console.log('Selected Process:', this.process_?.OPIST_Process);
    console.log('Selected Machine Type:', this.machineGroup?.OPIST_MC);

    // ตรวจสอบว่ามีการเลือก Process และ Machine Group หรือไม่
    if (!this.process_ || !this.machineGroup) {
      console.warn('Process or Machine Group is not selected');
      this.filteredItems = []; // ไม่แสดงข้อมูลหากยังไม่มีการเลือก
      this.showTable = false; // ซ่อนตาราง
      return;
    }

    // กรองข้อมูล
    this.filteredItems = this.items.filter(
      (item) =>
        item.OPIST_Process === this.process_.OPIST_Process &&
        item.OPIST_MC === this.machineGroup.OPIST_MC
    );

    console.log('Filtered Items:', this.filteredItems);

    // กำหนดการแสดงตาราง
    this.showTable = this.filteredItems.length > 0;
  }

  // ฟังก์ชันแสดงตารางสำหรับ Setup
  showSetup(): void {
    this.filterItems(); // กรองข้อมูล
    console.log('Filtered Items (Setup):', this.filteredItems);

    // ล็อคค่า Case เป็น "Setup" สำหรับแถวที่กรองได้
    this.filteredItems.forEach(item => {
      item.selectedCase = 'Setup'; // ตั้งค่า Case เป็น "Setup"
      item.isCaseLocked = true;   // ล็อคค่า Case
    });

    this.showTable = this.filteredItems.length > 0; // แสดงตารางเฉพาะเมื่อมีข้อมูลที่กรองได้
  }

  // ฟังก์ชันแสดงตารางสำหรับ Other
  showOther(): void {
    this.filterItems(); // กรองข้อมูล
    console.log('Filtered Items (Other):', this.filteredItems);

    // ปลดล็อคค่า Case สำหรับแถวที่กรองได้
    this.filteredItems.forEach(item => {
      item.isCaseLocked = false; // ปลดล็อคค่า Case
      item.selectedCase = null; // ให้ผู้ใช้เลือกค่าเอง
    });

    this.showTable = this.filteredItems.length > 0; // แสดงตารางเฉพาะเมื่อมีข้อมูลที่กรองได้
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
        this.addToCart(); // เรียกฟังก์ชันสำหรับเพิ่มข้อมูลลงในตะกร้า
        Swal.fire('Added!', 'The items have been added to your cart.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'No items were added to the cart.', 'error');
      }
    });
  }

  // ฟังก์ชันสำหรับเพิ่มข้อมูลลงในตะกร้า
  addToCart(): void {
    console.log('Items added to the cart!'); // คุณสามารถเพิ่มการทำงานเพิ่มเติมที่นี่
  }
}
