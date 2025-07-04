import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { ApiService } from 'src/app/services/api.service';
import { LayoutService } from 'src/app/services/app.layout.service';
import { MenuItem } from 'primeng/api';
import { Observable, Subject, Subscription, timer } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html',
  styleUrls: ['./app.topbar.component.scss']
})
export class AppTopbarComponent {
  private reset$ = new Subject();
  timer$: Observable<any>;
  subscription: Subscription;
  items!: MenuItem[];
  currentUser: any;
  isLoading = true;
  isUserLoggedIn: boolean;
  public isInvalid: boolean = false;
  public visible: boolean = false;
  request: any;
  inprogress: any;
  receive: any;
  // messageal: any = 0;
  currentLanguage: string = 'en'; // ภาษาเริ่มต้น
  languageOptions = {
    th: 'ภาษาไทย | ภาษาอังกฤษ',
    en: 'TH | EN',
  } as const;


  @ViewChild('menubutton') menuButton!: ElementRef;

  @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

  @ViewChild('topbarmenu') menu!: ElementRef;
  constructor(public account: AccountService,
    public layoutService: LayoutService,
    private api: ApiService,
    private router: Router,
    private translate: TranslateService, // Inject TranslateService ที่นี่
    public languageService: LanguageService,

    ) {

    this.timer$ = this.reset$.pipe(
      startWith(0),
      switchMap(() => timer(0, 60000))
    );
    this.translate.addLangs(['en', 'th']); // เพิ่มภาษาที่รองรับ
    this.translate.setDefaultLang(this.currentLanguage); // ตั้งค่าภาษาเริ่มต้น
  }

  switchLanguage(lang: string): void {
    const newLang = this.currentLanguage === 'th' ? 'en' : 'th';
    this.currentLanguage = lang; // เปลี่ยนค่าภาษา
    this.translate.use(lang); // ใช้ TranslateService เปลี่ยนภาษา
    // console.log(`Switched to language: ${newLang}`); // Debugging log
  }

  getLanguageText(): string {
    return this.languageOptions[this.currentLanguage];
  }

  ngOnInit() {
    this.Get_user();
    this.subscription = this.timer$.subscribe((i) => {
    this.Status_List_Request();
    });
  }

  Get_user() {
    this.currentUser = this.account.getUser();
    this.account.saveUser(this.currentUser)
    if (this.currentUser.Admin_ >= 70) {
      this.isUserLoggedIn = true;
    } else {
      this.isUserLoggedIn = false;
    }
    // console.log(this.currentUser)
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

  async Signout() {
    const data = {
      Emp_Code: this.currentUser.MemberCode
    }
    this.account.Loginouttime(data)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.logout();
        },
        error: (e) => console.error(e)
      });
    this.router.navigate(['home']);

  }

  logout() {
    // this.visible = false;
    sessionStorage.removeItem('auth-user');
    sessionStorage.removeItem('List');
    this.account.removeuser();
    this.Get_user();
    timer(50000);
    window.location.reload();
  }

}
