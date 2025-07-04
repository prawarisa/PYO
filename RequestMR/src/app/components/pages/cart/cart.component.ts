import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'; // นำเข้าโมดูลที่จำเป็นสำหรับการสร้างคอมโพเนนต์
import {
  FormBuilder, // นำเข้า FormBuilder สำหรับสร้างฟอร์ม
  FormGroup, // นำเข้า FormGroup สำหรับกลุ่มฟอร์ม
  Validators, // นำเข้า Validators สำหรับการตรวจสอบฟอร์ม
  FormControl, // นำเข้า FormControl สำหรับควบคุมฟอร์ม
} from '@angular/forms'; // นำเข้าจากแพ็กเกจ Angular Forms
import { Router, NavigationExtras } from '@angular/router'; // นำเข้า Router และ NavigationExtras สำหรับการนำทาง
import { ApiService } from 'src/app/services/api.service'; // นำเข้า ApiService สำหรับการเรียก API
import { timer } from 'rxjs'; // นำเข้า timer จาก RxJS
import * as moment from 'moment'; // นำเข้า moment สำหรับการจัดการวันและเวลา
import { AccountService } from 'src/app/services/account.service'; // นำเข้า AccountService สำหรับการจัดการบัญชีผู้ใช้
import { SelectItem, MessageService } from 'primeng/api'; // นำเข้า SelectItem และ MessageService จาก PrimeNG
import Swal from 'sweetalert2'; // นำเข้า SweetAlert2 สำหรับการแสดงการแจ้งเตือน
import { ThisReceiver } from '@angular/compiler'; // นำเข้า ThisReceiver จาก Angular Compiler (ไม่ถูกใช้ในโค้ดนี้)
import { Time } from '@angular/common'; // นำเข้า Time จาก Angular Common (ไม่ถูกใช้ในโค้ดนี้)

@Component({
  selector: 'app-cart', // กำหนด selector สำหรับคอมโพเนนต์
  templateUrl: './cart.component.html', // ระบุ URL ของเทมเพลต HTML
  styleUrls: ['./cart.component.scss'], // ระบุ URL ของไฟล์ CSS
  providers: [MessageService], // ให้บริการ MessageService ในคอมโพเนนต์นี้
})
export class CartComponent { // สร้างคลาส CartComponent
  Div: any; // ประกาศตัวแปร Div (ไม่ถูกใช้ในโค้ดนี้)
  division: any; // ประกาศตัวแปร division (ไม่ถูกใช้ในโค้ดนี้)
  items: any = {}; // ประกาศตัวแปร items สำหรับเก็บข้อมูล
  rowData: any = {}; // ประกาศตัวแปร rowData สำหรับเก็บข้อมูลแถว (ไม่ถูกใช้ในโค้ดนี้)
  item: any; // ประกาศตัวแปร item (ไม่ถูกใช้ในโค้ดนี้)
  Rev_: any; // ประกาศตัวแปร Rev_ (ไม่ถูกใช้ในโค้ดนี้)
  currentUser: any; // ประกาศตัวแปร currentUser สำหรับเก็บข้อมูลผู้ใช้ปัจจุบัน
  itemsInCart: any[] = []; // ประกาศตัวแปร itemsInCart สำหรับเก็บข้อมูลรายการในรถเข็น
  myForm!: FormGroup; // ประกาศตัวแปร myForm สำหรับเก็บกลุ่มฟอร์ม
  Empcode: string = ''; // ประกาศตัวแปร Empcode สำหรับเก็บรหัสพนักงาน
  Req_ID: any; // ประกาศตัวแปร Req_ID (ไม่ถูกใช้ในโค้ดนี้)

  constructor( // สร้างคอนสตรัคเตอร์สำหรับ CartComponent
    public account: AccountService, // ให้ AccountService เป็นพารามิเตอร์
    private router: Router, // ให้ Router เป็นพารามิเตอร์
    private fb: FormBuilder, // ให้ FormBuilder เป็นพารามิเตอร์
    private api: ApiService, // ให้ ApiService เป็นพารามิเตอร์
    private messageService: MessageService // ให้ MessageService เป็นพารามิเตอร์
  ) {}

  async ngOnInit() { // ฟังก์ชันที่จะถูกเรียกเมื่อคอมโพเนนต์ถูกสร้างขึ้น
    this.currentUser = this.account.getUser(); // ดึงข้อมูลผู้ใช้ปัจจุบัน
    //get data
    this.Showtable(); // เรียกฟังก์ชัน Showtable เพื่อแสดงข้อมูล
    this.Empcode = this.account.getEmpcode(); // ดึงรหัสพนักงานจาก AccountService
  }

  Showtable() { // ฟังก์ชันสำหรับแสดงข้อมูลในตาราง
    const Emp_Code = this.currentUser.Emp_Code; // ดึงรหัสพนักงานจาก currentUser
    const Local = 0; // ตรวจสอบว่า Local ได้ค่าเป็นตัวเลขที่ถูกต้อง
    console.log(Emp_Code, Local); // ลองแสดงผลค่าก่อนส่งให้แน่ใจว่าถูกต้อง

    if (Emp_Code && Local !== undefined) { // ตรวจสอบว่ามี Emp_Code และ Local ไม่เป็น undefined
      const data = { Emp_Code, Local }; // สร้างอ็อบเจ็กต์ data ที่เก็บรหัสพนักงานและค่า Local
      // console.log('After', data); // ตรวจสอบค่าที่ส่งไปยัง API
      this.api.post_request_for_merge_doc(data).subscribe({ // เรียก API เพื่อส่งข้อมูล
        next: (response) => { // ฟังก์ชันที่ทำงานเมื่อเรียก API สำเร็จ
          if (response.length > 0) { // ถ้ามีข้อมูลใน response
            this.items = response[0]; // ดึงทั้ง response ไม่ใช่แค่ response[0]
            // console.log(this.items); // แสดงผลข้อมูลที่ดึงมา
          }
        },
        error: (e) => console.error('API Error:', e), // แสดงข้อผิดพลาดเมื่อเกิดปัญหาในการเรียก API
      });
    }
  }

  deleteAct(data: any) { // ฟังก์ชันสำหรับลบรายการ
    console.log('Data to delete:', data); // แสดงข้อมูลที่ถูกส่งเข้ามา
    Swal.fire({ // แสดง SweetAlert เพื่อยืนยันการลบ
      title: 'Do you want to delete this item?', // ข้อความยืนยัน
      showDenyButton: true, // แสดงปุ่มไม่ลบ
      confirmButtonText: 'Delete', // ข้อความปุ่มยืนยัน
      denyButtonText: `Don't Delete`, // ข้อความปุ่มไม่ลบ
    }).then((result) => { // เมื่อผู้ใช้เลือก
      if (result.isConfirmed) { // ถ้าผู้ใช้กดยืนยัน
        const data1 = {
          Req_ID: data.Req_ID, // แก้ไขจาก this.items.Req_ID เป็น data.Req_ID
        };
        // console.log('Data for API:', data1); // แสดงข้อมูลที่ถูกส่งไปยัง API
        this.api.delete_item(data1).subscribe({ // เรียก API เพื่อลบรายการ
          next: async (response) => { // ฟังก์ชันที่ทำงานเมื่อเรียก API สำเร็จ
            // console.log('API Response:', response); // แสดงผลการตอบกลับจาก API
            Swal.fire({ // แสดง SweetAlert เพื่อแจ้งผลลัพธ์การลบ
              icon: 'success', // ไอคอนแสดงความสำเร็จ
              title: 'Delete Complete!', // ข้อความหัวเรื่อง
              confirmButtonColor: '#3085d6', // กำหนดสีปุ่มยืนยัน
              confirmButtonText: 'OK', // ข้อความปุ่มยืนยัน
            }).then((result) => { // เมื่อผู้ใช้เลือก
              if (result.isConfirmed) { // ถ้าผู้ใช้กดยืนยัน
                window.location.reload(); // Refresh หน้าหลังจากกด OK
              }
            });
          },
          error: (e) => { // ฟังก์ชันที่ทำงานเมื่อเกิดข้อผิดพลาดในการเรียก API
            console.error('Error:', e); // แสดงข้อผิดพลาด
            Swal.fire({ // แสดง SweetAlert เพื่อแจ้งข้อผิดพลาด
              icon: 'error', // ไอคอนแสดงข้อผิดพลาด
              text: 'Cannot delete the item!', // ข้อความเพิ่มเติม
            });
          },
        });
      } else if (result.isDenied) { // ถ้าผู้ใช้เลือกไม่ลบ
        Swal.fire('Changes are not saved', '', 'info'); // แจ้งว่าการเปลี่ยนแปลงไม่ได้ถูกบันทึก
      }
    });
  }

  Create_Doc() { // ฟังก์ชันสำหรับสร้างเอกสาร
    const items = this.items; // ดึงข้อมูล items
    const data = { items }; // สร้างอ็อบเจ็กต์ data ที่เก็บ items
    console.log(data); // แสดงข้อมูลที่ต้องการส่ง
    Swal.fire({ // แสดง SweetAlert เพื่อยืนยันการสร้างเอกสาร
      title: 'Do you want to Create Doc no?', // ข้อความยืนยัน
      showDenyButton: true, // แสดงปุ่มไม่สร้าง
      confirmButtonText: 'Create', // ข้อความปุ่มยืนยัน
      denyButtonText: `Cancel`, // ข้อความปุ่มไม่สร้าง
    }).then((result) => { // เมื่อผู้ใช้เลือก
      if (result.isConfirmed) { // ถ้าผู้ใช้กดยืนยัน
        this.api.post_create_doc(data).subscribe({ // เรียก API เพื่อสร้างเอกสาร
          next: (response) => { // ฟังก์ชันที่ทำงานเมื่อเรียก API สำเร็จ
            // console.log('Create Doc Success:', response.Created_Doc_no); // แสดงผลการสร้างเอกสารสำเร็จ
            Swal.fire({ // แสดง SweetAlert เพื่อแจ้งผลลัพธ์การสร้างเอกสาร
              icon: 'success', // ไอคอนแสดงความสำเร็จ
              title: 'Document Created Successfully!', // ข้อความหัวเรื่อง
              text: `Doc No:`+ response.Created_Doc_no, // ข้อความเพิ่มเติมแสดงหมายเลขเอกสาร
              confirmButtonColor: 'success', // กำหนดสีปุ่มยืนยัน
              confirmButtonText: 'OK', // ข้อความปุ่มยืนยัน
            }).then((result) => { // เมื่อผู้ใช้เลือก
              if (result.isConfirmed) { // ถ้าผู้ใช้กดยืนยัน
                // window.location.reload(); // สามารถทำการรีเฟรชได้ (ถูกคอมเมนต์ไว้)
                this.router.navigate(['/pages/list-request']); // นำทางไปยังหน้ารายการคำร้องขอ
              }
            });
          },
          error: (err) => { // ฟังก์ชันที่ทำงานเมื่อเกิดข้อผิดพลาดในการเรียก API
            console.error('Error creating document:', err); // แสดงข้อผิดพลาด
            Swal.fire({ // แสดง SweetAlert เพื่อแจ้งข้อผิดพลาด
              icon: 'error', // ไอคอนแสดงข้อผิดพลาด
              title: 'Error', // ข้อความหัวเรื่อง
              text: 'Failed to create document. Please try again.', // ข้อความเพิ่มเติม
            });
          },
        });
      } else if (result.isDenied) { // ถ้าผู้ใช้เลือกไม่สร้าง
        Swal.fire('Changes are not saved', '', 'info'); // แจ้งว่าการเปลี่ยนแปลงไม่ได้ถูกบันทึก
      }
    });
  }
}
