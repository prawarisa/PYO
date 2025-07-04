import { Component } from '@angular/core';

@Component({
  selector: 'app-return-admin',
  templateUrl: './return-admin.component.html',
  styleUrls: ['./return-admin.component.scss']
})
export class ReturnAdminComponent {
  AppLayoutModule
  request: number = 0; // ค่าเริ่มต้นเป็น 0 ของcuttingtool
  // อันนี้ดึงดาต้า
  // inprogress: any;
  // receive: any;
  cuttingOilRequest: number = 5; // ค่าแจ้งเตือนสำหรับ Cutting Oil (ตัวอย่าง)
  grindingMaterialCount: number = 0;
  machineSetupCount: number = 0;
  cleaningSolutionCount: number = 0;
  otherCount: number = 0;

  ngOnInit() {
    this.loadMockData(); // เรียกใช้ฟังก์ชันโหลดข้อมูล
  }
  calculateRequestCounts(data: any) {
    // ดึงค่าจริงสำหรับ Cutting Tool จาก API
    this.request = data.filter((item: any) => item.Category === 'Cutting Tool' && item.Status === 'Waiting').length;

    // ค่า Mock สำหรับหมวดหมู่อื่น
    this.request = 10;
    this.cuttingOilRequest = 5; // ตัวอย่างค่า Mock
    this.grindingMaterialCount = 1; // ตัวอย่างค่า Mock
    this.machineSetupCount = 0; // ตัวอย่างค่า Mock
    this.cleaningSolutionCount = 3; // ตัวอย่างค่า Mock
    this.otherCount = 4; // ตัวอย่างค่า Mock
  }
  loadMockData() {
    this.request = 10;
    this.cuttingOilRequest = 5; // ตัวอย่างค่า
    this.grindingMaterialCount = 1;
    this.machineSetupCount = 0;
    this.cleaningSolutionCount = 3;
    this.otherCount = 4;
  }
}

