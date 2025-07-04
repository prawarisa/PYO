import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'; // นำเข้าฟังก์ชันหลักของ Angular และ lifecycle hooks
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms'; // นำเข้าฟังก์ชันที่เกี่ยวข้องกับฟอร์มสำหรับฟอร์มเชิงโต้ตอบ
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; // นำเข้าฟังก์ชันการนำทางและการเข้าถึงพารามิเตอร์เส้นทาง
import { ApiService } from 'src/app/services/api.service'; // นำเข้า ApiService สำหรับทำ HTTP requests
import { timer } from 'rxjs'; // นำเข้า timer จาก RxJS สำหรับฟังก์ชันการจับเวลา
import * as moment from 'moment'; // นำเข้า moment.js สำหรับการจัดการวันที่
import { AccountService } from 'src/app/services/account.service'; // นำเข้า AccountService สำหรับการจัดการบัญชีผู้ใช้
import { SelectItem, MessageService } from 'primeng/api'; // นำเข้าประเภทและบริการจาก PrimeNG API
import Swal from 'sweetalert2'; // นำเข้า SweetAlert2 สำหรับแสดงการแจ้งเตือน
import { ThisReceiver } from '@angular/compiler'; // นำเข้าอันนี้จาก Angular compiler (อาจไม่จำเป็น)
import { Time } from '@angular/common'; // นำเข้า Time จากโมดูล Angular common (อาจไม่จำเป็น)

import { DatePipe } from '@angular/common'; // นำเข้า DatePipe สำหรับการจัดรูปแบบวันที่
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  Div: any; // ตัวแปรสำหรับเก็บข้อมูลที่เกี่ยวข้องกับ Div
  division: any; // ตัวแปรสำหรับเก็บข้อมูลที่เกี่ยวข้องกับ division
  items: any = {}; // ตัวแปรเพื่อเก็บข้อมูลรายการ
  rowData: any = {}; // ตัวแปรเพื่อเก็บข้อมูลแถว
  item: any; // ตัวแปรสำหรับเก็บข้อมูลรายการเดี่ยว
  Rev_: any; // ตัวแปรสำหรับเก็บข้อมูล revision
  currentUser: any; // ตัวแปรสำหรับเก็บข้อมูลผู้ใช้ปัจจุบัน
  itemsInCart: any[] = []; // ตัวแปรเพื่อเก็บรายการในตะกร้า
  myForm!: FormGroup; // ตัวแปรเพื่อเก็บ FormGroup สำหรับฟอร์ม
  Empcode: string = ''; // ตัวแปรสำหรับเก็บรหัสพนักงาน
  Req_ID: any; // ตัวแปรสำหรับเก็บรหัสคำขอ
  formattedDate: string | null = ''; // ตัวแปรสำหรับเก็บวันที่ที่จัดรูปแบบแล้ว
  formattedTime: string | null = '';
  public Local: number | null = null; // ตัวแปรสำหรับเก็บข้อมูล Local
  private Doc_no: string; // ตัวแปรสำหรับเก็บหมายเลขเอกสาร
  private source: string; // ตัวแปรสำหรับเก็บแหล่งที่มา

  constructor(
    public account: AccountService, // สร้าง instance ของ AccountService
    private router: Router, // สร้าง instance ของ Router
    private route: ActivatedRoute, // สร้าง instance ของ ActivatedRoute
    private fb: FormBuilder, // สร้าง instance ของ FormBuilder
    private api: ApiService, // สร้าง instance ของ ApiService
    private messageService: MessageService, // สร้าง instance ของ MessageService
    private datePipe: DatePipe // สร้าง instance ของ DatePipe
  ) {}

  async ngOnInit() { // ฟังก์ชันที่จะทำงานเมื่อ component ถูกสร้าง
    this.currentUser = this.account.getUser(); // ดึงข้อมูลผู้ใช้ปัจจุบัน
    // ดึงข้อมูล
    const data = this.account.getData(); // ดึงข้อมูลจาก AccountService
    this.Doc_no = (this.route.snapshot.paramMap.get('Doc_no')) // รับหมายเลขเอกสารจากพารามิเตอร์เส้นทาง
    this.Local = Number(this.route.snapshot.paramMap.get('Local')); // แปลงค่าจาก string เป็น number
    this.source = this.route.snapshot.paramMap.get('source'); // รับแหล่งที่มาจากพารามิเตอร์เส้นทาง
    console.log(this.Doc_no, this.Local, this.source); // แสดงผลค่า Local และ source
    this.Showtable(); // เรียกใช้ฟังก์ชัน Showtable เพื่อแสดงข้อมูล

    this.Empcode = this.account.getEmpcode(); // ดึงรหัสพนักงาน

  }


  formatDate(data) { // ฟังก์ชันสำหรับจัดรูปแบบวันที่
    const items = data; // รับข้อมูลที่ส่งเข้ามา
    console.log(items[0].Date_of_Req); // แสดงวันที่ที่ดึงมา
    const date = new Date(items[0].Date_of_Req);
    this.formattedDate = this.datePipe.transform(date, 'dd/MM/yy', 'UTC'); // จัดรูปแบบวันที่
    this.formattedTime = this.datePipe.transform(date, 'HH:mm:ss', 'UTC'); // เปลี่ยน 'UTC' เป็นโซนเวลาที่ต้องการ
  }


  Showtable() { // ฟังก์ชันเพื่อแสดงตารางข้อมูล
    const Emp_Code = this.currentUser.Emp_Code; // รับรหัสพนักงานจากผู้ใช้ปัจจุบัน
    const Doc_no = this.Doc_no; // รับหมายเลขเอกสาร
    const Local = this.Local; // รับข้อมูล Local
    console.log(Emp_Code, Doc_no, Local); // แสดงผลค่าก่อนส่งให้แน่ใจว่าถูกต้อง

    if (Emp_Code && Doc_no && Local !== undefined) { // ตรวจสอบค่าของรหัสพนักงาน หมายเลขเอกสาร และ Local
      const data = { Emp_Code, Doc_no, Local }; // สร้าง object สำหรับส่งข้อมูล
      console.log('After', data); // แสดงค่าที่ส่งไปยัง API
      this.api.post_table_detail(data).subscribe({ // เรียกใช้งาน API เพื่อดึงข้อมูลตาราง
        next: (response) => { // รับค่าตอบกลับจาก API
          if (response.length > 0) { // ตรวจสอบว่ามีข้อมูลคืนมาหรือไม่
            this.items = response; // ดึงข้อมูลทั้งหมดจาก response
            console.log('return', this.items); // แสดงข้อมูลที่ได้
            this.formatDate(this.items); // เรียกใช้ฟังก์ชันจัดรูปแบบวันที่
          }
        },
        error: (e) => console.error('API Error:', e), // แสดงข้อผิดพลาดหากมี
      });
    }
  }
  exportExcel() {
    // ลบฟิลด์ Req_ID,EMP_Code,Local,Status ออกจากข้อมูล
    const filteredItems = this.items.map(({ Req_ID,Emp_Code,Local,Status, ...rest }) => ({
      ...rest,
      // เปลี่ยนชื่อฟิลด์
      Operator : Emp_Code,


  }));

    // กำหนดชื่อไฟล์และแปลงข้อมูลเป็นเวิร์กชีต
    const worksheet = XLSX.utils.json_to_sheet(filteredItems);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

    // แปลงเวิร์กบุ๊กเป็นบัฟเฟอร์แล้วสร้างไฟล์ประเภท Excel
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    // บันทึกไฟล์
    saveAs(blob, 'ExportedData.xlsx');
}

}
