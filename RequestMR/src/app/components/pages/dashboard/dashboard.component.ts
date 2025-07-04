import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; // นำเข้า ApiService สำหรับการเรียก API


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
  // ตัวเลือก Dropdown
  typeOptions = [{ label: 'Cutting Tool', value: 'Cutting Tool' }, /* อื่นๆ */];
  partNoOptions: any[] = [];
  processOptions: any[] = [];
  itemNoOptions: any[] = [];
  mcTypeOptions: any[] = [];
  specOptions: any[] = [];
  mcNoOptions: any[] = [];
  startDate: Date | null = null; // วันที่เริ่มต้น
  endDate: Date | null = null;   // วันที่สิ้นสุด

  // ตัวแปรที่เก็บค่าที่ผู้ใช้เลือก
  selectedType: any;
  selectedPartNo: any;
  selectedProcess: any;
  selectedItemNo: any;
  selectedMcType: any;
  selectedSpec: any;
  selectedMcNo: any;
  selectedDate: Date | null = null;

  dashboardData: any[] = []; // เก็บข้อมูลที่ดึงมาจาก Backend
  noDataFound: boolean = false; // ตรวจสอบว่ามีข้อมูลหรือไม่

  // ตัวแปรที่เกี่ยวข้องกับ Charts
  processChartData: any = {};    // ข้อมูลของ Pie Chart สำหรับ Process
  mcTypeChartData: any = {};     // ข้อมูลของ Pie Chart สำหรับ Mc Type
  caseChartData: any = {};       // ข้อมูลของ Pie Chart สำหรับ Case
  itemNoChartData: any = {};     // ข้อมูลของ Bar Chart สำหรับ Item No
  specChartData: any = {};       // ข้อมูลของ Bar Chart สำหรับ Spec
  mcNoChartData: any = {};       // ข้อมูลของ Bar Chart สำหรับ Mc No
  stackedChartData: any = {};    // ข้อมูลของ Stacked Bar Chart
  stackedBarOptions: any = {};   // ตัวเลือกการตั้งค่าสำหรับ Stacked Bar Chart

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // โหลดตัวเลือก Dropdown
    this.loadPartNoOptions();
    this.loadProcessOptions();
    this.loaditemNoOptions();

    // ตั้งค่าเริ่มต้นสำหรับ Charts
    this.initChartData();
  }

  // ฟังก์ชันสำหรับกำหนดค่าข้อมูลเริ่มต้นให้กับ Charts
  initChartData(): void {
    this.processChartData = {
      labels: ['Process 1', 'Process 2', 'Process 3'],
      datasets: [
        {
          data: [30, 50, 20],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    this.mcTypeChartData = {
      labels: ['Type 1', 'Type 2', 'Type 3'],
      datasets: [
        {
          data: [40, 30, 30],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    this.caseChartData = {
      labels: ['Case A', 'Case B', 'Case C'],
      datasets: [
        {
          data: [25, 35, 40],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    this.itemNoChartData = {
      labels: ['Item 1', 'Item 2', 'Item 3'],
      datasets: [
        {
          label: 'Items',
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          data: [10, 15, 20],
        },
      ],
    };

    this.specChartData = {
      labels: ['Spec 1', 'Spec 2', 'Spec 3'],
      datasets: [
        {
          label: 'Specs',
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          data: [12, 18, 25],
        },
      ],
    };

    this.mcNoChartData = {
      labels: ['Machine 1', 'Machine 2', 'Machine 3'],
      datasets: [
        {
          label: 'Machines',
          backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
          data: [5, 10, 15],
        },
      ],
    };

    this.stackedChartData = {
      labels: ['January', 'February', 'March'],
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80],
        },
        {
          label: 'Dataset 2',
          backgroundColor: '#66BB6A',
          data: [28, 48, 40],
        },
      ],
    };

    this.stackedBarOptions = {
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    };
  }
  // โหลดตัวเลือก Part No
  loadPartNoOptions(): void {
    this.apiService.get_part_no().subscribe(
      (data) => {
        this.partNoOptions = data.map((item: any) => ({
          label: item.PartNo,
          value: item.PartNo,
        }));
      },
      (error) => {
        console.error('Error fetching Part No options:', error);
      }
    );
  }

  // โหลดตัวเลือก Process โดยใช้ post_process
loadProcessOptions(): void {
  const filters = {
    Type: this.selectedType?.value || null, // ถ้ามีตัวกรอง Type ส่งไปด้วย
    PartNo: this.selectedPartNo?.value || null, // ถ้ามีตัวกรอง PartNo ส่งไปด้วย
    // Date_of_Req: this.selectedDate || null, // ถ้ามีตัวกรองวันที่ส่งไปด้วย
  };

  this.apiService.post_process(filters).subscribe(
    (data) => {
      this.processOptions = data.map((item: any) => ({
        label: item.Process,
        value: item.Process,
      }));
      console.log('Process Options:', this.processOptions);
    },
    (error) => {
      console.error('Error fetching Process options:', error);
    }
  );
}

loaditemNoOptions(): void {
  const filters = {
    Type: this.selectedType?.value || null, // ถ้ามีตัวกรอง Type ส่งไปด้วย
    PartNo: this.selectedPartNo?.value || null, // ถ้ามีตัวกรอง PartNo ส่งไปด้วย
    // Date_of_Req: this.selectedDate || null, // ถ้ามีตัวกรองวันที่ส่งไปด้วย
    Process: this.selectedProcess?.value || null, //
  };

  this.apiService.post_item_no(filters).subscribe(
    (data) => {
      this.itemNoOptions = data.map((item: any) => ({
        label: item.ItemNo,
        value: item.ItemNo,
      }));
      console.log('Item Options:', this.processOptions);
    },
    (error) => {
      console.error('Error fetching Item options:', error);
    }
  );
}


  // ฟังก์ชันสำหรับเรียก API
  onSearch(): void {
    const filters = {
      Type: this.selectedType?.value || null,
      PartNo: this.selectedPartNo?.value || null,
      Process: this.selectedProcess?.value || null,
      ItemNo: this.selectedItemNo?.value || null,
      McType: this.selectedMcType?.value || null,
      Spec: this.selectedSpec?.value || null,
      McNo: this.selectedMcNo?.value || null,
      Date_of_Req: this.selectedDate || null, // ใช้ Date_of_Req เป็นฟิลด์ตัวกรอง
    };

    this.apiService.post_dashboard_data(filters).subscribe(
      (data) => {
        if (data.length === 0) {
          this.noDataFound = true; // ถ้าไม่มีข้อมูล
        } else {
          this.noDataFound = false;
          this.dashboardData = data; // เก็บข้อมูลที่ดึงมาจาก Backend
        }
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
        this.noDataFound = true;
      }
    );
  }
}
// export class DashboardComponent {
//   // ตัวเลือก dropdown ต้องดึงข้อมูลจากDB
//   typeOptions = [
//     { label: 'Cutting Tool', value: 'Cutting Tool', color: 'black' },
//     { label: 'Cutting Oil', value: 'Cutting Oil', color: 'black'  },
//     { label: 'Grinding Material', value: 'Grinding Material', color: 'black'  },
//     { label: 'Machine Set Up Tool', value: 'Machine Set Up Tool', color: 'black'  },
//     { label: 'Cleaning Solution', value: 'Cleaning Solution', color: 'black'  },
//     { label: 'Other', value: 'Other', color: 'black'  },
//   ]
//   partNoOptions = [
//     { label: 'Part 001', value: 'Part001', color: 'blue' },
//     { label: 'Part 002', value: 'Part002', color: 'green' },
//     { label: 'Part 003', value: 'Part003', color: 'red' },
//   ];


//   processOptions = [
//     { label: 'Process A', value: 'ProcessA' },
//     { label: 'Process B', value: 'ProcessB' },
//   ];

//   itemNoOptions = [
//     { label: 'Item 001', value: 'Item001' },
//     { label: 'Item 002', value: 'Item002' },
//   ];

//   mcTypeOptions = [
//     { label: 'Type A', value: 'TypeA' },
//     { label: 'Type B', value: 'TypeB' },
//   ];

//   specOptions = [
//     { label: 'Spec 001', value: 'Spec001' },
//     { label: 'Spec 002', value: 'Spec002' },
//   ];

//   mcNoOptions = [
//     { label: 'MC 001', value: 'MC001' },
//     { label: 'MC 002', value: 'MC002' },
//   ];


//   // ข้อมูลที่เลือก
//   selectedType: { label: string; value: string; color: string } | null = null;
//   selectedPartNo: { label: string; value: string; color: string } | null = null;
//   selectedProcess: string;
//   selectedItemNo: string;
//   selectedMcType: string;
//   selectedSpec: string;
//   selectedMcNo: string;
//   selectedColor: string = 'black'; // Default color
//   startDate: Date;
//   endDate: Date;
//   selectedPartNoColor: string = 'black';


//   // ข้อมูลสำหรับพายชาร์ต
//    // Mock Data

//    processChartData = this.preparePieChart([
//     { label: 'Process A', value: 40 },
//     { label: 'Process B', value: 60 },
//   ]);
//   mcTypeChartData = this.preparePieChart([
//     { label: 'MC Type 1', value: 50 },
//     { label: 'MC Type 2', value: 50 },
//   ]);
//    caseChartData = this.preparePieChart([
//     { label: 'case A', value: 40 },
//     { label: 'case B', value: 50 },
//     { label: 'case C', value: 10 },
//   ]);
//   itemNoChartData = {
//     labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
//     datasets: [
//       {
//         label: 'Values',
//         data: [20, 30, 20, 30, 20, 30],
//         backgroundColor: [
//           '#FF6384', // สีสำหรับ Item 1
//           '#36A2EB', // สีสำหรับ Item 2
//           '#FFCE56', // สีสำหรับ Item 3
//           '#4BC0C0', // สีสำหรับ Item 4
//           '#9966FF', // สีสำหรับ Item 5
//           '#FF9F40', // สีสำหรับ Item 6
//         ],
//       },
//     ],
//   };
//   specChartData = this.prepareBarChart([
//     { label: 'Spec 1', value: 10 },
//     { label: 'Spec 2', value: 40 },
//   ]);
//   mcNoChartData = this.prepareBarChart([
//     { label: 'mc no. 1', value: 10 },
//     { label: 'mc no. 2', value: 70 },
//   ]);
//   stackedChartData = this.prepareStackedBarChart({
//     labels: [
//       'January', 'February', 'March', 'April', 'May', 'June',
//       'July', 'August', 'September', 'October', 'November', 'December'
//     ],
//     datasets: [
//       {
//         label: 'Process A',
//         data: [10, 20, 30, 25, 15, 20, 30, 35, 40, 45, 50, 55],
//         backgroundColor: '#FF6384'
//       },
//       {
//         label: 'Process B',
//         data: [15, 25, 35, 30, 20, 25, 35, 40, 45, 50, 55, 60],
//         backgroundColor: '#36A2EB'
//       },
//     ],
//   });

//   // summaryData = { totalProcesses: 10, mostUsedProcess: 'Process B' };
//   // caseChartData = this.preparePieChart([
//   //   { label: 'Case 1', value: 30 },
//   //   { label: 'Case 2', value: 70 },
//   // ]);
//   stackedBarOptions = {
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top', // ตำแหน่งของคำอธิบาย
//       },
//     },
//     scales: {
//       x: {
//         stacked: true, // เปิดใช้งานการแสดงแบบซ้อนกันบนแกน X
//       },
//       y: {
//         stacked: true, // เปิดใช้งานการแสดงแบบซ้อนกันบนแกน Y
//       },
//     },

//   };

//   ngOnInit() {}

//   // Helper functions to prepare chart data
//   preparePieChart(data: any): any {
//     return {
//       labels: data.map((item: any) => item.label),
//       datasets: [
//         {
//           data: data.map((item: any) => item.value),
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//         },
//       ],
//     };
//   }

//   prepareBarChart(data: any): any {
//     return {
//       labels: data.map((item: any) => item.label),
//       datasets: [
//         {
//           label: 'Values',
//           data: data.map((item: any) => item.value),
//           backgroundColor: '#36A2EB',
//         },
//       ],
//     };
//   }

//   prepareStackedBarChart(data: any): any {
//     return {
//       labels: data.labels,
//       datasets: data.datasets,
//     };
//   }

//   onSearch() {
//     console.log('Searching...');
//     //
//     console.log('Select Part No:', this.selectedPartNo);
//     console.log('Select Process:', this.selectedProcess);
//     console.log('Select Item No:', this.selectedItemNo);
//   }

//    // ติดตามการเปลี่ยนแปลงค่าใน ngOnChanges (หรืออัปเดตใน getColor)
//   ngOnChanges(): void {
//     this.updateColor();
//   }

//   // ฟังก์ชันอัปเดตสี (ไม่จำเป็นในกรณีนี้)
//   updateColor(): void {
//     console.log('Selected Part No:', this.selectedPartNo);

//   }
//   onTypeChange(selected: any) {
//     this.selectedType = selected;
//   }
// }
