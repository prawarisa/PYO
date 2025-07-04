import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; // Service สำหรับโหลดข้อมูลจาก API
import { DatePipe } from '@angular/common'; // นำเข้า DatePipe สำหรับการจัดรูปแบบวันที่
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms'; // นำเข้าฟังก์ชันที่เกี่ยวข้องกับฟอร์มสำหรับฟอร์มเชิงโต้ตอบ
import { AccountService } from 'src/app/services/account.service'; // นำเข้า AccountService สำหรับการจัดการบัญชีผู้ใช้
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router'; // นำเข้าฟังก์ชันการนำทางและการเข้าถึงพารามิเตอร์เส้นทาง
import { SelectItem, MessageService } from 'primeng/api'; // นำเข้าประเภทและบริการจาก PrimeNG API
import Swal from 'sweetalert2'; // นำเข้า SweetAlert2 สำหรับแสดงการแจ้งเตือน

@Component({
  selector: 'app-return-cuttingtool-user',
  templateUrl: './return-cuttingtool-user.component.html',
  styleUrls: ['./return-cuttingtool-user.component.scss'],
  providers: [MessageService, DatePipe], // กำหนดผู้ให้บริการที่จำเป็น
})

export class ReturnCuttingtoolUserComponent implements OnInit {
  Div: any; // ตัวแปรสำหรับเก็บข้อมูลที่เกี่ยวข้องกับ Div
  division: any; // ตัวแปรสำหรับเก็บข้อมูลที่เกี่ยวข้องกับ division
  factory: any; //
  process: any; //
  problemDescription: string = ''; // เพิ่มตัวแปรนี้ใน Class
  docNo: any; //
  items: any = {}; // ตัวแปรเพื่อเก็บข้อมูลรายการ
  rowData: any = {}; // ตัวแปรเพื่อเก็บข้อมูลแถว
  item: any; // สำหรับเก็บข้อมูลรายการเดี่ยว
  Rev_: any; // ตัวแปรสำหรับเก็บข้อมูล revision
  currentUser: any; // ตัวแปรสำหรับเก็บข้อมูลผู้ใช้ปัจจุบัน
  itemsInCart: any[] = []; // ตัวแปรเพื่อเก็บรายการในตะกร้า
  myForm!: FormGroup; // ตัวแปรเพื่อเก็บ FormGroup สำหรับฟอร์ม
  Empcode: string = ''; // ตัวแปรสำหรับเก็บรหัสพนักงาน
  Req_ID: any; // ตัวแปรสำหรับเก็บรหัสคำขอ
  Emp_Code: any;
  currentUSer: any;
  formattedDate: string | null = ''; // ตัวแปรสำหรับเก็บวันที่ที่จัดรูปแบบแล้ว
  public Local: number | null = null; // ตัวแปรสำหรับเก็บข้อมูล Local
  private Doc_no: string; // ตัวแปรสำหรับเก็บหมายเลขเอกสาร
  private source: string; // ตัวแปรสำหรับเก็บแหล่งที่มา
  constructor(
    private apiService: ApiService,
    private api: ApiService, // สร้าง instance ของ ApiService
    private datePipe: DatePipe, // สร้าง instance ของ DatePipe
    public account: AccountService, // สร้าง instance ของ AccountService
    private router: Router, // สร้าง instance ของ Router
    private route: ActivatedRoute, // สร้าง instance ของ ActivatedRoute

    ) {} // Inject ApiService

    async ngOnInit() { // ฟังก์ชันที่จะทำงานเมื่อ component ถูกสร้าง
      this.currentUser = this.account.getUser(); // ดึงข้อมูลผู้ใช้ปัจจุบัน
      // ดึงข้อมูล
      const data = this.account.getData(); // ดึงข้อมูลจาก AccountService
      this.Doc_no = (this.route.snapshot.paramMap.get('Doc_no')) // รับหมายเลขเอกสารจากพารามิเตอร์เส้นทาง
      this.Local = Number(this.route.snapshot.paramMap.get('Local')); // แปลงค่าจาก string เป็น number
      this.Emp_Code = (this.route.snapshot.paramMap.get('Emp_Code'));
      this.source = this.route.snapshot.paramMap.get('source'); // รับแหล่งที่มาจากพารามิเตอร์เส้นทาง
      console.log(this.Doc_no, this.Local, this.source); // แสดงผลค่า Local และ source
      this.Showtable(); // เรียกใช้ฟังก์ชัน Showtable เพื่อแสดงข้อมูล
      this.getUserRole();
      this.Empcode = this.account.getEmpcode(); // ดึงรหัสพนักงาน
    }


    formatDate(data) { // ฟังก์ชันสำหรับจัดรูปแบบวันที่
      const items = data; // รับข้อมูลที่ส่งเข้ามา
      console.log(items[0].Date_of_Req); // แสดงวันที่ที่ดึงมา
      this.formattedDate = this.datePipe.transform(items[0].Date_of_Req, 'dd/MM/yy'); // จัดรูปแบบวันที่
    }

  getUserRole() {
    this.currentUSer= this.account.getUser();
    const role = this.currentUSer.role; // หรือดึงผ่าน API
    this.currentUser.role === 'admin';
    this.currentUser.role === 'user';
  }
  // ฟังก์ชันโหลดข้อมูลจาก API
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
  loadTableData() {
    const data = { Emp_Code: this.currentUser?.Emp_Code, Doc_no: this.Doc_no, Local: this.Local };

    this.apiService.post_table_detail(data).subscribe({
      next: (response) => {
        console.log('Response:', response); // ตรวจสอบว่ามีฟิลด์ Case หรือไม่
        if (response && Array.isArray(response)) { // ตรวจสอบว่าเป็น Array หรือไม่
          this.items = [] // เก็บข้อมูลในตัวแปร items
          console.log('Response:', this.items); // ดูว่ามีฟิลด์ Case หรือไม่
          this.docNo = this.items[0]?.Doc_no; // กำหนดค่าให้ docNo จาก API
          this.Div = response[0]?.Division || '';
          this.factory = response[0]?.Factory || '';
          this.process = response[0]?.Process || '';
          this.formattedDate = this.datePipe.transform(response[0]?.Date_of_Req, 'dd/MM/yy') || '';
          console.log('Items loaded:', this.items);
        } else {
          console.error('Expected an Array, got:', response);
        }
      },
      error: (err) => console.error('API Error:', err),
    });
  }
  onReturn(Doc_no: string): void {
    Swal.fire({
      title: 'Return Confirmation',
      text: `Are you sure you want to return Document No: ${Doc_no}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Return',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('Returning document:', Doc_no);
        this.router.navigate(['/pages/list-return-cuttingtool']); // Example: Navigate to another page
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // ดำเนินการเพิ่มเติมหากต้องการ เช่น เรียก API หรือเปลี่ยนหน้า
        Swal.fire('Returned!', 'The document has been returned.', 'success');
      }
    });
  }


}
