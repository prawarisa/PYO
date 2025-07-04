import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-request-setup',
  templateUrl: './request-setup.component.html',
  styleUrls: ['./request-setup.component.scss']
})
export class RequestSetupComponent {

  // Dropdown options
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
  req_part = [
    { OPIST_PartNo: 'Part001' },
    { OPIST_PartNo: 'Part002' },
    { OPIST_PartNo: 'Part003' }
  ];

  part_no: string | null = null; // เก็บ Part No
  rev_: string | null = null; // เก็บ Rev(Drawing)


  cases = [
    { label: 'Case1', value: 'Case1' },
    { label: 'Case2', value: 'Case2' }
  ];

  // Form variables
  currentUser: any = { Emp_Code: '12345' }; // ตัวอย่างข้อมูลผู้ใช้ที่เข้าสู่ระบบ
  isDaily: boolean = false; // ตัวแปรสำหรับตรวจสอบว่าอยู่ในโหมด Daily หรือไม่
  div_ = null;
  fac_ = null;
  process_ = null;
  machineGroup = null;
  isSetup: boolean = false;
  item = { selectedCase: null };
  wantSetupTool: boolean = true; // ค่าเริ่มต้นของ Checkbox

  showTable = false; // Controls table visibility
  items: any[] = []; // All table data
  filteredItems: any[] = []; // Filtered table data

  constructor(private router: Router) {
    this.initializeItems();

  }

  // Mock data for the table
  initializeItems(): void {
    this.items = [
      {
        ITEM_NO: '001',
        OPIST_PartNo: 'P001',
        OPIST_Process: 'Drilling',
        OPIST_MC: 'MC-A',
        SPEC: 'Spec-A',
        MC_no: '',
        Qty: '',
        selectedCase: null
      },
      {
        ITEM_NO: '002',
        OPIST_PartNo: 'P002',
        OPIST_Process: 'Cutting',
        OPIST_MC: 'MC-B',
        SPEC: 'Spec-B',
        MC_no: '',
        Qty: '',
        selectedCase: null
      },
      {
        ITEM_NO: '003',
        OPIST_PartNo: 'P003',
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



  // Clears form and hides table
  cleardata(): void {
    this. part_no = null;
    this.div_ = null;
    this.fac_ = null;
    this.process_ = null;
    this.machineGroup = null;
    this.filteredItems = [];
    this.showTable = false;
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

      Swal.fire({
        title: 'Added!',
        text: 'The items have been added to your cart.',
        icon: 'success',
        confirmButtonText: 'Go to Cart'
      }).then(() => {
        this.router.navigate(['/pages/cart-setup']); // เปลี่ยนเส้นทางไปที่ '/cart'
      });
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
