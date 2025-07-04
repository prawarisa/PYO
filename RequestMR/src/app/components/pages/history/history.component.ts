import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AccountService } from 'src/app/services/account.service';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import Swal from 'sweetalert2';
import { ConfirmationService, MessageService, FilterMatchMode, FilterService, SelectItem } from 'primeng/api';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent{
  Div : any;
  division : any;
  item: any;
  Rev_ : any;
  private reset$ = new Subject();
  timer$: Observable<any>;
  subscription: Subscription;
  matchModeOptions: SelectItem[];
  @ViewChild('filter') filter!: ElementRef;
  currentUser: any;
  ReqID: any;
  public items: any[]=[];
  visible: boolean = false;
  visible1: boolean = false;
  isLoading = true;
  visibleheader: boolean = false;
  usefor: any;
  visibledialog: boolean = false;
  confirmdata: any;
  Empcode: string = '';

  constructor(
    public account: AccountService,
    private router: Router,
    private api: ApiService,
    private filterService: FilterService
  ) {}

  async ngOnInit() {
    this.currentUser = this.account.getUser();
    //get data
    this.Showtable();
    this.Empcode = this.account.getEmpcode();
  }

  Showtable() {
    const Emp_Code = this.currentUser.Emp_Code;  // รับรหัสพนักงานจากผู้ใช้ปัจจุบัน
    const Local = 3;  // กำหนดค่า Local เป็น 3

    console.log(Emp_Code, Local); // ตรวจสอบค่าที่จะส่งไปยัง API
    if (Emp_Code && Local !== undefined) {
      const data = { Emp_Code, Local };  // สร้างอ็อบเจ็กต์ข้อมูลสำหรับ API
      console.log('history_list', data);

      this.api.Get_history_list(data).subscribe({
        next: (response) => {
          if (response.length > 0) {
            // กรองข้อมูลที่ Local == 3 และ Emp_Code ตรงกับผู้ใช้ปัจจุบัน
            this.items = response.filter((item: any) => item.Local == 3 && item.Emp_Code == Emp_Code);
            console.log('Filtered Items (Local == 3 and Emp_Code matches):', this.items);
          } else {
            this.items = [];  // ถ้าไม่มีข้อมูล ให้เป็นอาร์เรย์ว่าง
            console.log('No items found for Local == 3 and current user');
          }
        },
        error: (e) => {
          console.error('API Error:', e);
        },
      });
    }
  }

Nav_Detail(Doc_no:string,Local: number){
  console.log(Doc_no,Local);
  this.router.navigate(['/pages/summary',Doc_no,Local,'history']);
}


}
