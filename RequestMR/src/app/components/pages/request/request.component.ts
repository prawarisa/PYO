import { Component, OnInit, ViewChild } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

//Component: ใช้ในการสร้างคอมโพเนนต์ใหม่ใน Angular
//OnInit: เป็น Lifecycle Hook ที่จะถูกเรียกใช้หลังจาก Angular เสร็จสิ้นการสร้างคอมโพเนนต์
//ViewChild: ใช้ในการเข้าถึงลูกคอมโพเนนต์หรือองค์ประกอบภายในเทมเพลต
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,

} from '@angular/forms';
// FormBuilder: service ที่ช่วยสร้างฟอร์มและฟิลด์ใน Angular
// FormGroup: ใช้เพื่อกลุ่มฟอร์มและฟิลด์ที่เกี่ยวข้อง
// Validators: ใช้สำหรับการตรวจสอบความถูกต้องของข้อมูลในฟอร์ม
// FormControl: ใช้เพื่อสร้างฟิลด์ฟอร์มแบบเดี่ยว
import { Router, NavigationExtras } from '@angular/router';
// Router: ใช้สำหรับนำทางระหว่างหน้าใน Angular
// NavigationExtras: ใช้เพื่อส่งข้อมูลเพิ่มเติมในระหว่างการนำทาง (เช่น การตั้งค่าระหว่างทาง)
import { ApiService } from 'src/app/services/api.service';
// ApiService: เป็น Service ที่ใช้ในการเรียก API ต่างๆ สำหรับดึงข้อมูลหรือส่งข้อมูลไปยังเซิร์ฟเวอร์
import { AccountService } from 'src/app/services/account.service';
// AccountService: เป็น Service ที่ใช้สำหรับการจัดการข้อมูลบัญชีผู้ใช้ในการ SignIn,SignOut,SignUp
import { SelectItem, MessageService } from 'primeng/api';
// SelectItem: ใช้สำหรับการสร้างรายการเลือกใน UI
// MessageService: ใช้สำหรับแสดงข้อความหรือแจ้งเตือนใน UI
import Swal from 'sweetalert2';
// นำเข้า SweetAlert2 ซึ่งเป็นไลบรารีสำหรับสร้างป๊อปอัพหรือกล่องข้อความแบบสวยงาม
import { EMPTY, isEmpty } from 'rxjs';
// นำเข้า EMPTY และ isEmpty จาก RxJS ซึ่งใช้สำหรับการจัดการกับ Observables

import { TranslateService } from '@ngx-translate/core';

// กำหนด interface สำหรับ setAllCases (ซึ่งที่อยู่ที่ constructor)
interface CaseOption {
  Case: string;
  viewCase: string;
}

// สร้าง Component ที่มีชื่อว่า RequestComponent
@Component({
  selector: 'app-request', // ตัวเลือกที่ใช้ในการเรียกใช้คอมโพเนนต์นี้ใน HTML
  templateUrl: './request.component.html', // ชื่อไฟล์ HTML ที่ใช้เป็น template ของคอมโพเนนต์
  styleUrls: ['./request.component.scss'], // ชื่อไฟล์ SCSS ที่ใช้ในการกำหนดสไตล์ของคอมโพเนนต์
  providers: [MessageService], // กำหนดให้ใช้ MessageService ซึ่งเป็น service ที่ให้บริการข้อความ

})
export class RequestComponent {
  myForm!: FormGroup; // ตัวแปรสำหรับจัดการฟอร์มในคอมโพเนนต์
  currentUser: any; // ตัวแปรสำหรับเก็บข้อมูลผู้ใช้ปัจจุบัน
  Empcode: string = ''; // รหัสพนักงานเริ่มต้นเป็นค่าว่าง
  isDaily: boolean; // ตัวแปร boolean สำหรับตรวจสอบว่าเป็นโหมด Daily หรือไม่
  public Set_Case = 'SET'; // กำหนดค่าเริ่มต้นให้กับตัวแปร Set_Case เป็น 'SET'

  // array เก่า
  items: any = []; // ตัวแปรสำหรับเก็บรายการข้อมูล (items) ที่มีอยู่แล้ว
  // array ใหม่
  item: any; // ตัวแปรสำหรับเก็บข้อมูล item ใหม่

  // [(ngModel)] เป็นตัวแปรที่เชื่อมต่อระหว่าง .html และ .ts ซึ่งสามารถซิงโครไนซ์ข้อมูลระหว่างตัวแปรใน Component ใน .ts กับ Input ใน .html อย่างอัตโนมัติ
  div_: any; // ตัวแปรสำหรับเก็บข้อมูล Division ที่เลือก
  fac_: any; // ตัวแปรสำหรับเก็บข้อมูล Factory ที่เลือก
  part_no: any; // ตัวแปรสำหรับเก็บหมายเลข Part
  process_: any; // ตัวแปรสำหรับเก็บข้อมูล Process ที่เลือก
  rev_: any; // ตัวแปรสำหรับเก็บ Revision
  machineGroup: any; // ตัวแปรสำหรับเก็บข้อมูลประเภทเครื่องจักร
  Result1: any; // มุมที่ 1 ของ item
  Result2: any; // มุมที่ 2 ของ item
  Result3: any; // มุมที่ 3 ของ item
  Result4: any; // มุมที่ 4 ของ item
  Result5: any; // มุมที่ 5 ของ item
  Result6: any; // มุมที่ 6 ของ item

  // [(options)] กำหนดตัวเลือกจาก [(ngModel)]
  req_part: any; // ตัวแปรสำหรับเก็บตัวเลือก Part
  req_process: any; // ตัวแปรสำหรับเก็บตัวเลือก Process
  req_mc: any; // ตัวแปรสำหรับเก็บตัวเลือก Machine Type
  Div: any; // ตัวแปรสำหรับเก็บตัวเลือก Division
  Fac: any; // ตัวแปรสำหรับเก็บตัวเลือก Factory
  AllCase_: CaseOption[] = []; // ตัวแปรสำหรับเก็บข้อมูลตัวเลือกเคสทั้งหมด

  // Constructor ถูกเรียกอัตโนมัติเมื่อคอมโพเนนต์นี้ถูกสร้างโดย Angular (ไม่ต้องเรียกใช้งานเอง)
  constructor(
    public account: AccountService, // บริการที่จัดการบัญชีผู้ใช้
    private router: Router, // ใช้ในการนำทางระหว่างหน้าต่าง ๆ ในแอปพลิเคชัน
    private fb: FormBuilder, // ใช้ในการสร้างและจัดการฟอร์ม
    private api: ApiService, // บริการที่ใช้สำหรับเรียก API
    private messageService: MessageService, // บริการสำหรับจัดการข้อความ (notification)
    private translate: TranslateService
  ) {
    // [(options)] กำหนดตัวเลือกจาก [(ngModel)]
    this.Div = [
      { label: 'GM', value: 'GM' }, // ตัวเลือก Division ที่ 1
      { label: 'PMC', value: 'PMC' }, // ตัวเลือก Division ที่ 2
    ];

    // ภาษา
    this.translate.addLangs(['en', 'th']); // เพิ่มภาษาที่รองรับ
    this.translate.setDefaultLang('en'); // ตั้งค่าภาษาเริ่มต้น

    const browserLang = this.translate.getBrowserLang(); // ดึงค่าภาษาจากเบราว์เซอร์
    this.translate.use(browserLang.match(/en|th/) ? browserLang : 'en'); // ใช้ภาษา

    // [(options)] กำหนดตัวเลือกจาก [(ngModel)]
    this.Fac = [
      { label: '1', value: '1' }, // ตัวเลือก Factory ที่ 1
      { label: '2', value: '2' }, // ตัวเลือก Factory ที่ 2
      { label: '3', value: '3' }, // ตัวเลือก Factory ที่ 3
      { label: '4', value: '4' }, // ตัวเลือก Factory ที่ 4
      { label: '5', value: '5' }, // ตัวเลือก Factory ที่ 5
      { label: '6', value: '6' }, // ตัวเลือก Factory ที่ 6
      { label: '7', value: '7' }, // ตัวเลือก Factory ที่ 7
    ];
  }

  // ฟังก์ชันสำหรับการกำหนด [(options)] เพื่อเป็นตัวกำหนดตัวเลือกจาก [(ngModel)]
  setAllCases() {
    // ตรวจสอบว่าเป็นโหมด Daily หรือไม่
    if (this.isDaily) {
      this.AllCase_ = [
        { Case: 'BRO', viewCase: 'BRO' }, // ตัวเลือกเคสที่ 1
        { Case: 'BUR', viewCase: 'BUR' }, // ตัวเลือกเคสที่ 2
        { Case: 'USA', viewCase: 'USA' }, // ตัวเลือกเคสที่ 3
        { Case: 'HOL', viewCase: 'HOL' }, // ตัวเลือกเคสที่ 4
        { Case: 'INV', viewCase: 'INV' }, // ตัวเลือกเคสที่ 5
        { Case: 'MOD', viewCase: 'MOD' }, // ตัวเลือกเคสที่ 6
        { Case: 'NON', viewCase: 'NON' }, // ตัวเลือกเคสที่ 7
        { Case: 'RET', viewCase: 'RET' }, // ตัวเลือกเคสที่ 8
        { Case: 'SPA', viewCase: 'SPA' }, // ตัวเลือกเคสที่ 9
        { Case: 'STO', viewCase: 'STO' }, // ตัวเลือกเคสที่ 10
        { Case: 'CHA', viewCase: 'CHA' }, // ตัวเลือกเคสที่ 11
      ];
    }
  }

  //ngOnInit เป็นหนึ่งในฟังก์ชันของ Angular จะถูกใช้เมื่อ Component ถูกสร้างขึ้นและพร้อมใช้งานแล้ว
  async ngOnInit() {
    this.currentUser = this.account.getUser(); //ฝากไว้ที่ session storage
    this.Get_part_no();
    this.Empcode = this.account.getEmpcode();
    this.myForm = this.fb.group({
      partno: ['', Validators.required],
      process: ['', Validators.required],
      mc_type: ['', Validators.required],
      rev_: ['', Validators.required],
    });
  }

  // ฟังก์ชัน Get_part_no ถูกเรียกใน ngOnInit() เพื่อดึง part_no เมื่อ Component ถูกโหลดครั้งแรก
  // โดยใช้ get_part_no ที่ดึงมาจาก api.service.ts เพื่อเชื่อมต่อ API แล้วทำการดึง(get)ค่าจาก SQL
  // เรียกใช้งาน api.get_part_no โดยส่งค่าจาก event.value ไป
  // next ถ้าส่งข้อมูลสำเร็จ
  // error ถ้ามีข้อผิดพลาด
  // response คือค่าที่ SQL ส่งมาผ่าน API
  // console.log() คือค่าของ object ที่จะนำไปแสดงในหน้าเว็ป(F12)
  Get_part_no() {
    // เรียก API เพื่อดึงข้อมูล part_no
    this.api.get_part_no().subscribe({
      // ถ้าสำเร็จ จะทำการเก็บ response ลงใน req_part
      next: (response) => {
        this.req_part = response;
        // แสดงผลลัพธ์ใน console
        console.log(this.req_part);
      },
      // ถ้ามีข้อผิดพลาดในการเรียก API จะแสดงข้อผิดพลาดใน console
      error: (e) => console.error(e),
    });
  }

  // โดยใช้ post_process ที่ดึงมาจาก api.service.ts เพื่อเชื่อมต่อ API แล้วทำการส่งข้อมูล(post)ไป SQL
  // เรียกใช้งาน api.post_process โดยส่งค่าจาก event.value ไป
  async Post_process(event) {
    // console.log(event.value); // แสดงค่าที่ได้รับใน console
    // เช็คว่า event.value มีค่าหรือไม่
    if (event.value !== undefined) {
      // เรียก API เพื่อส่งข้อมูลไปยัง SQL
      this.api.post_process(event.value).subscribe({
        // ถ้าสำเร็จ จะเก็บค่าผลลัพธ์ใน req_process
        next: (response) => {
          if (response.length > 0) {
            this.req_process = response[0];
            // แสดงผลลัพธ์ใน console
            console.log(response);
          }
        },
        // ถ้ามีข้อผิดพลาดในการเรียก API จะแสดงข้อผิดพลาดใน console
        error: (e) => console.error(e),
      });
    }
  }

  // โดยใช้ Post_machine_type ที่ดึงมาจาก api.service.ts เพื่อเชื่อมต่อ API แล้วทำการส่งข้อมูล(post)ไป SQL
  // เรียกใช้งาน api.post_machine_type โดยส่งค่าจาก event.value ไป
  async Post_machine_type(event) {
    // console.log(event.value) // แสดงค่าที่ได้รับใน console
    // เช็คว่า event.value มีค่าหรือไม่
    if (event.value !== undefined) {
      // เก็บค่า OPIST_Process จาก event.value
      const Process = event.value.OPIST_Process;
      // สร้างอ็อบเจ็กต์ data สำหรับส่งไปยัง API
      const data = {
        OPIST_PartNo: this.part_no.OPIST_PartNo,
        OPIST_Process: Process,
      };

      // เรียก API เพื่อส่งข้อมูล machine type
      this.api
        .post_machine_type(data)
        // console.log(event.value) // แสดงค่าที่ได้รับใน console
        .subscribe({
          // ถ้าสำเร็จ จะเก็บค่าผลลัพธ์ใน req_mc และ rev_
          next: (response) => {
            if (response.length > 0) {
              this.req_mc = response[0];
              this.rev_ = response[0][0].OPIST_DwgRev;
              // console.log(response, this.rev_, response[0][0].OPIST_DwgRev); // แสดงผลลัพธ์ใน console
            }
          },
          // ถ้ามีข้อผิดพลาดในการเรียก API จะแสดงข้อผิดพลาดใน console
          error: (e) => console.error(e),
        });
    }
  }

  Setup() {
    this.isDaily = false; // ตั้งค่าสถานะเป็น false สำหรับโหมด Setup
    // console.log('Form',this.div_.value,this.fac_.value); // แสดงค่าฟอร์มใน console
    // เก็บค่าจากฟอร์มสำหรับ division, factory, part no, process, machine type
    const division = this.div_.value;
    const factory = this.fac_.value;
    const OPIST_PartNo = this.myForm.get('partno')?.value.OPIST_PartNo;
    const OPIST_Process = this.myForm.get('process')?.value.OPIST_Process;
    const OPIST_MC = this.myForm.get('mc_type')?.value.OPIST_MC;
    // เช็คว่าค่าที่ได้มีค่าหรือไม่
    if (
      OPIST_PartNo &&
      OPIST_Process &&
      OPIST_MC &&
      division &&
      factory !== undefined
    ) {
      // สร้างอ็อบเจ็กต์ data สำหรับส่งไปยัง API
      const data = { OPIST_PartNo, OPIST_Process, OPIST_MC };
      // เรียก API เพื่อส่งข้อมูล item no
      this.api.post_item_no(data).subscribe({
        // ถ้าสำเร็จ จะเก็บค่าผลลัพธ์ใน items
        next: (response) => {
          if (response.length > 0) {
            this.items = response[0];
            console.log(this.items); // แสดงผลลัพธ์ใน console
            this.setAllCases(); // เรียกฟังก์ชัน setAllCases()
          }
        },
        // ถ้ามีข้อผิดพลาดในการเรียก API จะแสดงข้อผิดพลาดใน console
        error: (e) => console.error('API Error:', e),
      });
    }
  }

  // ฟังก์ชันสำหรับส่งข้อมูลตารางไปยัง (cart)
  saveSelectedRows_Setup() {
    // กรองรายการที่มีค่า MC_no และ Qty
    const filteredItems = this.items.filter((item) => item.MC_no && item.Qty);
    //console.log(filteredItems.length, this.items.length); // แสดงจำนวนรายการใน console
    // เช็คว่ากรอก mc no และ qty ได้กรอกหมดทุกตัวไหม
    if (filteredItems.length < this.items.length) {
      //Swal.fire({}) ใช้สำหรับแสดง popup โดยใช้ SweetAlert2 ซึ่งเป็นไลบรารี
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Data',
        text: 'Please fill in all required fields (MC no, Qty).',
      });
      return; // หยุดการดำเนินการถ้ายังไม่กรอกข้อมูลครบ
    }

    // สร้างอาเรย์ใหม่จากข้อมูลที่ถูกกรอง
// สร้างอาเรย์ใหม่จากข้อมูลที่ถูกกรอง
const newArray = filteredItems.map((item) => ({
  Emp_Code: this.currentUser.Emp_Code, // รหัสพนักงานจากผู้ใช้ปัจจุบัน
  Doc_no: null, // หมายเลขเอกสารเริ่มต้นเป็น null
  Division: this.div_.value, // ค่าจากฟอร์มสำหรับ Division
  Factory: this.fac_.value, // ค่าจากฟอร์มสำหรับ Factory
  Date_of_Req: null, // วันที่ของการร้องขอเริ่มต้นเป็น null
  Item_no: item.ITEM_NO, // หมายเลขไอเทมจากรายการที่ถูกกรอง
  Part_no: item.OPIST_PartNo, // หมายเลขชิ้นส่วนจากรายการที่ถูกกรอง
  Revision: this.rev_, // หมายเลข Revision ที่กำหนดไว้
  Process: item.OPIST_Process, // กระบวนการจากรายการที่ถูกกรอง
  MC_type: item.OPIST_MC, // ประเภทเครื่องจักรจากรายการที่ถูกกรอง
  Spec: item.SPEC, // สเปคจากรายการที่ถูกกรอง
  Usage: item.OPIST_Usage_pcs, // การใช้งานจากรายการที่ถูกกรอง
  MC_no: item.MC_no, // หมายเลขเครื่องจักรจากรายการที่ถูกกรอง
  Qty: item.Qty, // จำนวนจากรายการที่ถูกกรอง
  Case_: this.Set_Case, // กรณีที่ตั้งไว้ (SET)
  Result1: null, // Usage ที่ใช่ไปในมุม 1 เริ่มต้นเป็น null
  Result2: null, // Usage ที่ใช่ไปในมุม 2 เริ่มต้นเป็น null
  Result3: null, // Usage ที่ใช่ไปในมุม 3 เริ่มต้นเป็น null
  Result4: null, // Usage ที่ใช่ไปในมุม 4 เริ่มต้นเป็น null
  Result5: null, // Usage ที่ใช่ไปในมุม 5 เริ่มต้นเป็น null
  Result6: null, // Usage ที่ใช่ไปในมุม 6 เริ่มต้นเป็น null
  Status: null, // สถานะเริ่มต้นเป็น null
  Set_by: null, // ตั้งค่าโดยเริ่มต้นเป็น null
  Local: 0, // ค่าท้องถิ่นเริ่มต้นเป็น 0
}));

// popup
    // console.log('New Array:', newArray); // ตรวจสอบข้อมูลในอาเรย์ใหม่
    Swal.fire({
      title: 'Do you want to Add?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Don't Add`,
    }).then((result) => {
      if (result.isConfirmed) {
        newArray.forEach((item) => {
          console.log(' item :', item);
          // เรียก API เพื่อบันทึกข้อมูลจากอาเรย์ใหม่
          this.api.post_request_to_cart(item).subscribe({
            next: (response) => {
              // console.log(' response :', response);
            },
            error: (e) =>
              console.error(
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Cannot save!',
                })
              ),
          });
        });

        Swal.fire({
          icon: 'success',
          title: 'Want to add another part no. to cart?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            this.cleardata(); // รีเซ็ตข้อมูล
          } else if (result.isDenied) {
            this.router.navigate(['/pages/cart']); // นำทางไปยังหน้าตะกร้า
          }
        });
      }
    });
  }

  // เป็นฟังก์ชันสำหรับเรียก item no จาก SQL
  Daily() {
    this.isDaily = true; // ตั้งค่าสถานะเป็น true สำหรับโหมด Daily
    // console.log('Form',this.div_.value,this.fac_.value); // แสดงค่าฟอร์มใน console
    // เก็บค่าจากฟอร์มสำหรับ division, factory, part no, process, machine type
    const division = this.div_.value;
    const factory = this.fac_.value;
    const OPIST_PartNo = this.myForm.get('partno')?.value.OPIST_PartNo;
    const OPIST_Process = this.myForm.get('process')?.value.OPIST_Process;
    const OPIST_MC = this.myForm.get('mc_type')?.value.OPIST_MC;
    // เช็คว่าค่าที่ได้มีค่าหรือไม่
    if (
      OPIST_PartNo &&
      OPIST_Process &&
      OPIST_MC &&
      division &&
      factory !== undefined
    ) {
      // สร้างอ็อบเจ็กต์ data สำหรับส่งไปยัง API
      const data = { OPIST_PartNo, OPIST_Process, OPIST_MC };
      // เรียก API เพื่อส่งข้อมูล item no
      this.api.post_item_no(data).subscribe({
        // ถ้าสำเร็จ จะเก็บค่าผลลัพธ์ใน items
        next: (response) => {
          if (response.length > 0) {
            this.items = response[0];
            console.log(this.items); // แสดงผลลัพธ์ใน console
            this.setAllCases(); // เรียกฟังก์ชัน setAllCases()
          }
        },
        // ถ้ามีข้อผิดพลาดในการเรียก API จะแสดงข้อผิดพลาดใน console
        error: (e) => console.error('API Error:', e),
      });
    }
  }
  // ฟังก์ชันสำหรับส่งข้อมูลตารางไปยัง (cart)
  saveSelectedRows_Daily() {
    // กรองรายการที่มีค่า MC_no และ Qty
    const filteredItems = this.items.filter((item) => item.MC_no && item.Qty);

    // ต้องกรอกอย่างน้อย 1 items
    if (filteredItems.length === 0) {
      // แสดง popup แจ้งเตือนว่าข้อมูลไม่ถูกต้อง
      Swal.fire(
        'No data entered',
        'Please enter values in MC no, Qty, or Results fields.',
        'error'
      );
      return; // หยุดการดำเนินการถ้ายังไม่มีข้อมูล
    }

    // สร้างอาเรย์ใหม่จากข้อมูลที่ถูกกรอง
    const newArray = filteredItems.map((item) => ({
      Emp_Code: this.currentUser.Emp_Code, // รหัสพนักงาน
      Doc_no: null, // หมายเลขเอกสารเริ่มต้นเป็น null
      Division: this.div_.value, // ค่าจากฟอร์มสำหรับ Division
      Factory: this.fac_.value, // ค่าจากฟอร์มสำหรับ Factory
      Date_of_Req: null, // วันที่ของการร้องขอเริ่มต้นเป็น null
      Item_no: item.ITEM_NO, // หมายเลขไอเทม
      Part_no: item.OPIST_PartNo, // หมายเลขชิ้นส่วน
      Revision: this.rev_, // หมายเลข Revision
      Process: item.OPIST_Process, // กระบวนการ
      MC_type: item.OPIST_MC, // ประเภทเครื่องจักร
      Spec: item.SPEC, // สเปค
      Usage: item.OPIST_Usage_pcs, // การใช้งาน
      MC_no: item.MC_no, // หมายเลขเครื่องจักร
      Qty: item.Qty, // จำนวน
      Case_: item.selectedCase.viewCase, // กรณีที่เลือก
      Result1: item.Result1 ||'', // ผลลัพธ์ 1
      Result2: item.Result2 ||'', // ผลลัพธ์ 2
      Result3: item.Result3 ||'', // ผลลัพธ์ 3
      Result4: item.Result4 ||'', // ผลลัพธ์ 4
      Result5: item.Result5 ||'', // ผลลัพธ์ 5
      Result6: item.Result6 ||'', // ผลลัพธ์ 6
      Status: null, // สถานะเริ่มต้นเป็น null
      Set_by: null, // ตั้งค่าโดยเริ่มต้นเป็น null
      Local: 0, // ค่าท้องถิ่นเริ่มต้นเป็น 0
    }));

    // ตรวจสอบข้อมูลในอาเรย์ใหม่
    console.log('New Array:', newArray); // แสดงผลลัพธ์ของอาเรย์ใหม่ใน console

    // แสดง popup ยืนยันการเพิ่มข้อมูล
    Swal.fire({
      title: 'Do you want to Add?',
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `Don't Add`,
    }).then((result) => {
      if (result.isConfirmed) {
        // ส่งข้อมูลใน newArray ไปยัง API
        newArray.forEach((item) => {
          console.log(' item :', item); // แสดงผลลัพธ์ของ item ใน console
          // เรียก API เพื่อบันทึกข้อมูลจากอาเรย์ใหม่
          this.api.post_request_to_cart(item).subscribe({
            next: (response) => {
              // console.log(' response :', response); // ตรวจสอบผลลัพธ์จากการบันทึก
            },
            // ถ้ามีข้อผิดพลาดในการเรียก API จะแสดง popup แจ้งเตือน
            error: (e) =>
              console.error(
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Cannot save!',
                })
              ),
          });
        });

        // แสดง popup ยืนยันว่าต้องการเพิ่มอีกหรือไม่
        Swal.fire({
          icon: 'success',
          title: 'Want to add another part no. to cart?',
          showDenyButton: true,
          confirmButtonText: 'Yes',
          denyButtonText: `No`,
        }).then((result) => {
          if (result.isConfirmed) {
            this.cleardata(); // เรียกฟังก์ชัน cleardata() เพื่อรีเซ็ตข้อมูล
          } else if (result.isDenied) {
            this.router.navigate(['/pages/cart']); // นำทางไปยังหน้าตะกร้า
          }
        });
      }
    });
  }

  // เป็นฟังก์ชันสำหรับรีเซ็ตค่าฟอร์มทั้งหมด
  cleardata() {
    this.myForm.reset(); // รีเซ็ตฟอร์มทั้งหมด
    this.rev_ = undefined; // ตั้งค่า revision เป็น undefined
    this.items = []; // เคลียร์ข้อมูล items
    // console.log("Form and data reset successfully!"); // แสดงข้อความใน console ว่ารีเซ็ตข้อมูลเรียบร้อย
  }
}
