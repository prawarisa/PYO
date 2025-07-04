import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';  // นำเข้าคลาสและไลบรารีที่จำเป็น
import { NavigationExtras, Router } from '@angular/router';  // นำเข้า NavigationExtras และ Router สำหรับการนำทาง
import { ApiService } from 'src/app/services/api.service';  // นำเข้า ApiService สำหรับการเรียก API
import { AccountService } from 'src/app/services/account.service';  // นำเข้า AccountService สำหรับจัดการบัญชีผู้ใช้
import { Observable, Subject, Subscription, timer } from 'rxjs';  // นำเข้า RxJS สำหรับการจัดการ observable
import Swal from 'sweetalert2';  // นำเข้า SweetAlert2 สำหรับการแสดงการแจ้งเตือน
import { ConfirmationService, MessageService, FilterMatchMode, FilterService, SelectItem } from 'primeng/api';  // นำเข้าบริการจาก PrimeNG

@Component({
  selector: 'app-receive',  // ตั้งชื่อ selector สำหรับ component
  templateUrl: './receive.component.html',  // กำหนดไฟล์ HTML สำหรับ template
  styleUrls: ['./receive.component.scss']  // กำหนดไฟล์ SCSS สำหรับสไตล์
})
export class ReceiveComponent {  // กำหนดคลาส ReceiveComponent
  Div: any;  // ประกาศตัวแปร Div
  division: any;  // ประกาศตัวแปร division
  item: any;  // ประกาศตัวแปร item
  Rev_: any;  // ประกาศตัวแปร Rev_
  private reset$ = new Subject();  // สร้าง Subject สำหรับ reset
  timer$: Observable<any>;  // ประกาศตัวแปรสำหรับ observable timer
  subscription: Subscription;  // ประกาศตัวแปร subscription
  matchModeOptions: SelectItem[];  // ประกาศตัวแปรสำหรับ match mode options
  @ViewChild('filter') filter!: ElementRef;  // เข้าถึง element ของ filter โดยใช้ ViewChild
  currentUser: any;  // ประกาศตัวแปรสำหรับเก็บข้อมูลผู้ใช้ปัจจุบัน
  ReqID: any;  // ประกาศตัวแปร ReqID
  public items: any[]=[];  // ประกาศตัวแปรสำหรับเก็บรายการ
  visible: boolean = false;  // กำหนดสถานะ visibility ของ dialog เป็น false
  visible1: boolean = false;  // กำหนดสถานะ visibility อื่น ๆ
  isLoading = true;  // กำหนดสถานะการโหลดข้อมูลเป็น true
  visibleheader: boolean = false;  // กำหนดสถานะ visibility ของ header เป็น false
  usefor: any;  // ประกาศตัวแปร usefor
  visibledialog: boolean = false;  // กำหนดสถานะ visibility ของ dialog เป็น false
  confirmdata: any;  // ประกาศตัวแปร confirmdata
  Empcode: string = '';  // ประกาศตัวแปร Empcode และกำหนดเป็นสตริงว่าง

  constructor(  // กำหนด constructor สำหรับคลาส
    public account: AccountService,  // แทรก AccountService
    private router: Router,  // แทรก Router
    private api: ApiService,  // แทรก ApiService
    private filterService: FilterService  // แทรก FilterService
  ) {}

  async ngOnInit() {  // ใช้ async ใน ngOnInit เพื่อให้สามารถทำงานกับข้อมูลแบบอะซิงโครนัส
    this.currentUser = this.account.getUser();  // รับข้อมูลผู้ใช้ปัจจุบัน
    //get data
    this.Showtable();  // เรียกใช้ฟังก์ชัน Showtable เพื่อดึงข้อมูล
    this.Empcode = this.account.getEmpcode();  // รับรหัสพนักงาน
  }

  Showtable() {  // ฟังก์ชันเพื่อดึงข้อมูลและแสดงในตาราง
    const Emp_Code = this.currentUser.Emp_Code;  // รับรหัสพนักงานจากผู้ใช้ปัจจุบัน
    const Local = 2;  // กำหนดค่า Local เป็น 2

    console.log(Emp_Code, Local); // ตรวจสอบค่าที่จะส่งไปยัง API
    if (Emp_Code && Local !== undefined) {  // ตรวจสอบว่าค่า Emp_Code และ Local ไม่เป็น undefined
      const data = { Emp_Code, Local };  // สร้างอ็อบเจ็กต์ data สำหรับส่งไปยัง API
      console.log('receive_list', data); // ตรวจสอบข้อมูลที่ส่งไปยัง API

      this.api.Get_receive_list(data).subscribe({
        next: (response) => {
          console.log('API Response:', response);
          if (response.length > 0) {
            // กรองข้อมูลที่ Local == 2 และ Emp_Code ตรงกับผู้ใช้ปัจจุบัน
            this.items = response.filter((item: any) => item.Local == 2 && item.Emp_Code == Emp_Code);
            console.log('Filtered Items (Local == 2 and Emp_Code matches):', this.items);
          } else {
            this.items = []; // ถ้าไม่มีข้อมูล ให้กำหนดเป็นอาร์เรย์ว่าง
            console.log('No items found for Local == 2 and current user');
          }
        },
        error: (e) => {
          console.error('API Error:', e);
        },
      });
    }
  }



  Nav_Detail(Doc_no: string, Local: number) {  // ฟังก์ชันเพื่อการนำทางไปยังหน้ารายละเอียด
    console.log(Doc_no, Local);  // แสดงเลขที่เอกสารและ Local ที่จะนำทางไป
    this.router.navigate(['/pages/detail-request', Doc_no, Local, 'receive']);  // นำทางไปยังหน้ารายละเอียด
  }
}
