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

@Component({
  selector: 'app-detail-request', // ตั้งค่า selector สำหรับ component นี้
  templateUrl: './detail-request.component.html', // กำหนด URL ของไฟล์ template
  styleUrls: ['./detail-request.component.scss'], // กำหนด URL ของไฟล์สไตล์
  providers: [MessageService, DatePipe], // กำหนดผู้ให้บริการที่จำเป็น
})
export class DetailRequestComponent { // ประกาศ class สำหรับ component นี้
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
  Emp_Code: any;
  currentUSer: any;
  formattedDate: string | null = ''; // ตัวแปรสำหรับเก็บวันที่ที่จัดรูปแบบแล้ว
  isAdmin: boolean = false; // ตรวจสอบบทบาท admin
  isUser: boolean = false; // ตรวจสอบบทบาท user
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
    this.currentUser = this.account.getUser();
    const role = this.currentUser.role;

    // ตรวจสอบบทบาท
    this.isAdmin = role === 'admin'; // true หากเป็น admin
    this.isUser = ['user-cuttingtool', 'user-oil', 'user-grinding', 'user-setup', 'user-other'].includes(role); // ตรวจสอบหลายบทบาท
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
  Accept(data: any) { // ประกาศฟังก์ชัน Accept ที่รับพารามิเตอร์ data
    if (!data.Set_by) { // ตรวจสอบว่า Set_by ไม่ว่าง
      Swal.fire({ // แสดงการแจ้งเตือนด้วย SweetAlert
        icon: 'warning', // ไอคอนของการแจ้งเตือน
        title: 'Input Set by first', // ข้อความหัวเรื่อง
        confirmButtonText: 'OK', // ข้อความปุ่มยืนยัน
      });
      return; // ออกจากฟังก์ชันถ้าหาก Set_by ว่าง
    }

    console.log('Accept', data); // แสดงข้อมูลที่ถูกส่งเข้าม
    Swal.fire({ // แสดงการแจ้งเตือนเพื่อยืนยันการตรวจสอบ
      title: 'Have you prepared\nitem no : '+data.Item_no+' yet?', // ข้อความหัวเรื่อง
      showDenyButton: true, // แสดงปุ่มปฏิเสธ
      confirmButtonText: 'Yes', // ข้อความปุ่มยืนยัน
      denyButtonText: 'No', // ข้อความปุ่มไม่ยืนยัน
    }).then((result) => { // รอการตอบกลับจากผู้ใช้
      if (result.isConfirmed) { // ถ้าผู้ใช้คลิก 'Yes'
        const data1 = { // สร้าง object สำหรับข้อมูลที่จะส่งไปยัง API
          Req_ID: data.Req_ID, // เพิ่ม Req_ID
          Status: data.Status, // เพิ่ม Status
          Set_by: data.Set_by, // ใช้ Set_by จาก data
          Local: data.Local, // เพิ่ม Local
        };
        console.log('Data for API:', data1); // แสดงข้อมูลที่ถูกส่งไปยัง API

        this.api.post_set_by(data1).subscribe({ // เรียกใช้งาน API
          next: async (response) => { // รับค่าตอบกลับจาก API
            console.log('API Response:', response); // แสดงข้อมูลที่ตอบกลับ
            Swal.fire({ // แสดงการแจ้งเตือนว่าการดำเนินการสำเร็จ
              icon: 'success',
              title: 'Accept Complete!', // ข้อความหัวเรื่อง
              confirmButtonColor: '#3085d6', // สีของปุ่มยืนยัน
              confirmButtonText: 'OK', // ข้อความปุ่มยืนยัน
            }).then((result) => { // รอการตอบกลับจากผู้ใช้
              if (result.isConfirmed) {
                window.location.reload(); // Refresh หน้าหลังจากกด OK
              }
            });
          },
          error: (e) => { // จัดการข้อผิดพลาดถ้ามี
            console.error('Error:', e); // แสดงข้อผิดพลาดใน console
            Swal.fire({ // แสดงการแจ้งเตือนว่ามีข้อผิดพลาด
              icon: 'error',
              title: 'Oops...', // ข้อความหัวเรื่อง
              text: 'Cannot accept the item!', // ข้อความเพิ่มเติม
            });
          },
        });
      }
    });
  }
  Receive(data: any) { // ประกาศฟังก์ชัน Receive ที่รับพารามิเตอร์ data
    console.log('Receive', data); // แสดงข้อมูลที่ถูกส่งเข้าม
    Swal.fire({ // แสดงการแจ้งเตือนเพื่อยืนยันการตรวจสอบ
      title: 'Did you check item?', // ข้อความหัวเรื่อง
      showDenyButton: true, // แสดงปุ่มปฏิเสธ
      confirmButtonText: 'Yes', // ข้อความปุ่มยืนยัน
      denyButtonText: 'No', // ข้อความปุ่มไม่ยืนยัน
    }).then((result) => { // รอการตอบกลับจากผู้ใช้
      if (result.isConfirmed) { // ถ้าผู้ใช้คลิก 'Yes'
        const data1 = { // สร้าง object สำหรับข้อมูลที่จะส่งไปยัง API
          Req_ID: data.Req_ID, // เพิ่ม Req_ID
          Status: data.Status, // เพิ่ม Status
          Local: data.Local, // เพิ่ม Local
        };
        console.log('Data for API:', data1); // แสดงข้อมูลที่ถูกส่งไปยัง API

        this.api.post_receive(data1).subscribe({ // เรียกใช้งาน API
          next: async (response) => { // รับค่าตอบกลับจาก API
            console.log('API Response:', response); // แสดงข้อมูลที่ตอบกลับ
            Swal.fire({ // แสดงการแจ้งเตือนว่าการดำเนินการสำเร็จ
              icon: 'success',
              title: 'Receive Complete!', // ข้อความหัวเรื่อง
              confirmButtonColor: '#3085d6', // สีของปุ่มยืนยัน
              confirmButtonText: 'OK', // ข้อความปุ่มยืนยัน
            }).then((result) => { // รอการตอบกลับจากผู้ใช้
              if (result.isConfirmed) {
                window.location.reload(); // Refresh หน้าหลังจากกด OK
              }
            });
          },
          error: (e) => { // จัดการข้อผิดพลาดถ้ามี
            console.error('Error:', e); // แสดงข้อผิดพลาดใน console
            Swal.fire({ // แสดงการแจ้งเตือนว่ามีข้อผิดพลาด
              icon: 'error',
              title: 'Oops...', // ข้อความหัวเรื่อง
              text: 'Cannot accept the item!', // ข้อความเพิ่มเติม
            });
          },
        });
      }
    });
  }
  onReturn(Doc_no: string, Local: string): void {
    console.log('return', Doc_no, Local); // แสดงข้อมูล Doc_no และ Local ที่จะ Return

    // ทำการเปลี่ยนหน้าไปยัง Return โดยตรง
    console.log('Returning document:', Doc_no, Local);
    this.router.navigate(['/pages/return-cuttingtool-user', Doc_no, Local]); // ส่ง Doc_no และ Local ไปยังหน้า Return
  }



}
