import { Component, OnInit } from '@angular/core';
import { AppLayoutModule } from 'src/app/layout/app.layout.module';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { LayoutService } from 'src/app/services/app.layout.service';

@Component({
  selector: 'app-list-choose-admin',
  templateUrl: './list-choose-admin.component.html',
  styleUrls: ['./list-choose-admin.component.scss']
})
export class ListChooseAdminComponent implements OnInit {
  request: number = 0; // ค่าเริ่มต้นเป็น 0 ของcuttingtool
  inprogress: any;
  receive: any;
  cuttingOilRequest: number = 5; // ค่าแจ้งเตือนสำหรับ Cutting Oil (ตัวอย่าง)
  grindingMaterialCount: number = 0;
  machineSetupCount: number = 0;
  cleaningSolutionCount: number = 0;
  otherCount: number = 0;

  constructor(private api: ApiService,
    public layoutService: LayoutService,
    private router: Router,

    ) {}
    ngOnInit() {
      // โหลดข้อมูลจำนวนแจ้งเตือน (ตัวอย่าง)
      this.Status_List_Request(); // เรียกฟังก์ชันเพื่อโหลดข้อมูล
      this.loadMockData(); // เรียกใช้ฟังก์ชันโหลดข้อมูล
    }
    loadRequestCounts() {
      this.api.get_list_table().subscribe({
        next: (response) => {
          this.calculateRequestCounts(response);
        },
        error: (error) => console.error(error)
      });
    }
    Status_List_Request() {
      this.api.get_list_table()
        .subscribe({
          next: async (response) => {
            // console.log(response);
            this.Status_waiting(response);
            this.Status_inprogress(response);
            this.Status_receive(response);
          },
          error: (e) => console.error(e)
        });
    }
    Status_waiting(data: any) {
      this.request = 0;
      for (let i = 0; i < data.length; i++) {
        // console.log('Status',data[i].Status);

        if (data[i].Status === 'Waiting') {
          this.request = this.request + 1;
          // console.log(this.request);
      }
    }
  }
  Status_inprogress(data: any) {
    this.inprogress = 0;
    for (let i = 0; i < data.length; i++) {
      // console.log('Status',data[i].Status);

      if (data[i].Status === 'Waiting') {
        this.inprogress = this.inprogress + 1;
        // console.log(this.inprogress);
    }
  }
  }
  Status_receive(data: any) {
    this.receive = 0;
    for (let i = 0; i < data.length; i++) {
      // console.log('Status',data[i].Status);

      if (data[i].Status === 'Waiting') {
        this.receive = this.receive + 1;
        // console.log(this.receive);
    }
  }
  }
  calculateRequestCounts(data: any) {
    // ดึงค่าจริงสำหรับ Cutting Tool จาก API
    this.request = data.filter((item: any) => item.Category === 'Cutting Tool' && item.Status === 'Waiting').length;

    // ค่า Mock สำหรับหมวดหมู่อื่น
    this.cuttingOilRequest = 5; // ตัวอย่างค่า Mock
    this.grindingMaterialCount = 1; // ตัวอย่างค่า Mock
    this.machineSetupCount = 0; // ตัวอย่างค่า Mock
    this.cleaningSolutionCount = 3; // ตัวอย่างค่า Mock
    this.otherCount = 4; // ตัวอย่างค่า Mock
  }
  loadMockData() {
    this.cuttingOilRequest = 5; // ตัวอย่างค่า
    this.grindingMaterialCount = 1;
    this.machineSetupCount = 0;
    this.cleaningSolutionCount = 3;
    this.otherCount = 4;
  }
}
