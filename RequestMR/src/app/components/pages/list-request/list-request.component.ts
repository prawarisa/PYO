import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';  // นำเข้าโมดูลที่จำเป็นสำหรับการสร้าง Component
import { NavigationExtras, Router } from '@angular/router';  // นำเข้าโมดูลสำหรับการทำงานกับการนำทาง
import { ApiService } from 'src/app/services/api.service';  // นำเข้าบริการ API
import { AccountService } from 'src/app/services/account.service';  // นำเข้าบริการบัญชี
import { Observable, Subject, Subscription, timer } from 'rxjs';  // นำเข้าโมดูล RxJS สำหรับการทำงานกับ Observable
import Swal from 'sweetalert2';  // นำเข้า SweetAlert2 สำหรับการแสดงการแจ้งเตือน
import { ConfirmationService, MessageService, FilterMatchMode, FilterService, SelectItem } from 'primeng/api';  // นำเข้าบริการต่าง ๆ จาก PrimeNG

@Component({
  selector: 'app-list-request',  // กำหนด Selector สำหรับ Component
  templateUrl: './list-request.component.html',  // กำหนด HTML template ของ Component
  styleUrls: ['./list-request.component.scss'],  // กำหนดไฟล์ SCSS สำหรับ Component
  providers: [MessageService],  // กำหนด providers ที่จำเป็นสำหรับ Component
})
export class ListRequestComponent {  // กำหนดชื่อ Class สำหรับ Component
  Div: any;  // ตัวแปรสำหรับเก็บข้อมูลส่วนแบ่ง
  division: any;  // ตัวแปรสำหรับเก็บข้อมูลส่วนแบ่ง (ไม่แน่นอน)
  item: any;  // ตัวแปรสำหรับเก็บข้อมูลของรายการ
  Rev_: any;  // ตัวแปรสำหรับเก็บข้อมูล Rev (revision)
  private reset$ = new Subject();  // สร้าง Subject สำหรับการจัดการเหตุการณ์
  timer$: Observable<any>;  // ตัวแปร Observable สำหรับจัดการเวลา
  subscription: Subscription;  // ตัวแปรสำหรับ Subscription ของ Observable
  matchModeOptions: SelectItem[];  // ตัวแปรสำหรับเก็บตัวเลือกการกรอง
  @ViewChild('filter') filter!: ElementRef;  // ใช้ ViewChild เพื่อเข้าถึงอิลิเมนต์ DOM
  currentUser: any;  // ตัวแปรสำหรับเก็บข้อมูลผู้ใช้ปัจจุบัน
  ReqID: any;  // ตัวแปรสำหรับเก็บ Request ID (ไม่แน่นอน)
  public items: any[]=[];  // ตัวแปรสำหรับเก็บรายการ
  visible: boolean = false;  // ตัวแปรสำหรับควบคุมการแสดงผล
  visible1: boolean = false;  // ตัวแปรสำหรับควบคุมการแสดงผลเพิ่มเติม
  isLoading = true;  // ตัวแปรสำหรับควบคุมสถานะการโหลดข้อมูล
  visibleheader: boolean = false;  // ตัวแปรสำหรับควบคุมการแสดงผลหัวข้อ
  usefor: any;  // ตัวแปรสำหรับเก็บข้อมูลการใช้งาน
  visibledialog: boolean = false;  // ตัวแปรสำหรับควบคุมการแสดงผล Dialog
  confirmdata: any;  // ตัวแปรสำหรับเก็บข้อมูลการยืนยัน (ไม่แน่นอน)
  Empcode: string = '';  // ตัวแปรสำหรับเก็บรหัสพนักงาน

  constructor(  // คอนสตรัคเตอร์สำหรับการกำหนดค่าเบื้องต้น
    public account: AccountService,  // กำหนดบริการบัญชี
    private router: Router,  // กำหนดบริการ Router
    private api: ApiService,  // กำหนดบริการ API
    private filterService: FilterService  // กำหนดบริการ Filter
  ) {}

  async ngOnInit() {  // เมธอดสำหรับการเริ่มต้น Component
    this.currentUser = this.account.getUser();  // ดึงข้อมูลผู้ใช้ปัจจุบัน
    //get data
    this.Showtable();  // เรียกเมธอด Showtable เพื่อโหลดข้อมูล
    this.Empcode = this.account.getEmpcode();  // ดึงรหัสพนักงานจากบริการบัญชี

  }

  Showtable() {
    const Emp_Code = this.currentUser.Emp_Code;
    const Local = 1; // ตัวแปร Local ถูกกำหนดให้เป็น 1

    console.log(Emp_Code, Local);
    if (Emp_Code && Local !== undefined) {
      const data = { Emp_Code, Local }; // ส่งค่า Emp_Code และ Local ไปยัง API
      console.log('List_Queue', data);

      this.api.post_list_queue(data).subscribe({
        next: (response) => {
          console.log(response);
          if (response.length > 0) {
            // กรองข้อมูลที่ Local == 1
            this.items = response.filter((item: any) => item.Local == 1);
            console.log(this.items);
          } else {
            this.items = []; // ถ้าไม่มีข้อมูลที่ตรงกับ Local == 1
          }
        },
        error: (e) => console.error('API Error:', e),
      });
    }
  }



  deleteAct(data: any) {  // เมธอดสำหรับลบรายการ
    console.log('Data to delete:', data); // แสดงข้อมูลที่ถูกส่งเข้ามา
    Swal.fire({  // แสดง SweetAlert2 เพื่อยืนยันการลบ
      title: 'Do you want to delete \ndoc : '+ data.Doc_no + ' ?',
      showDenyButton: true,  // แสดงปุ่มไม่ลบ
      confirmButtonText: 'Delete',  // ข้อความสำหรับปุ่มยืนยันการลบ
      denyButtonText: `Don't Delete`,  // ข้อความสำหรับปุ่มไม่ลบ
    }).then((result) => {  // จัดการผลลัพธ์จากการยืนยัน
      if (result.isConfirmed) {  // ถ้าผู้ใช้ยืนยันการลบ
        const data1 = {
          Doc_no: data.Doc_no,  // สร้างอ็อบเจ็กต์ข้อมูลสำหรับลบ
        };
        console.log('Data for API:', data1); // แสดงข้อมูลที่ถูกส่งไปยัง API
        this.api.delete_doc_no(data1).subscribe({  // เรียก API เพื่อลบรายการ
          next: async (response) => {  // ถ้าเรียกสำเร็จ
            console.log('API Response:', response);  // แสดงผลข้อมูลจาก API
            Swal.fire({  // แสดงข้อความยืนยันการลบสำเร็จ
              icon: 'success',
              title: 'Delete Complete!',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK',
            }).then((result) => {  // ถ้าผู้ใช้กด OK
              if (result.isConfirmed) {
                window.location.reload(); // Refresh หน้าหลังจากกด OK
              }
            });
          },
          error: (e) => {  // แสดงข้อผิดพลาดถ้ามี
            console.error('Error:', e);
            Swal.fire({  // แสดงข้อความแสดงข้อผิดพลาด
              icon: 'error',
              title: 'Oops...',
              text: 'Cannot delete the item!',
            });
          },
        });
      }
    });
  }

  Nav_Detail(Doc_no: string, Status:string, Local: number, Emp_Code: string) {  // เมธอดสำหรับนำทางไปยังหน้ารายละเอียด
    const data = {Doc_no,Status,Local,Emp_Code}
    console.log(data);
      this.api.change_to_in_progress(data).subscribe({
        next: (response) => {
          console.log(response.return_array);
          if (response.return_array > 0) {
            console.log(Doc_no,Local);
            this.router.navigate(['/pages/detail-request', Doc_no, Local, 'list']);  // นำทางไปยังหน้ารายละเอียด
          }
        },
        error: (e) => console.error('API Error:', e),
      });
    }

  }

