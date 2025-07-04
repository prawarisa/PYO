import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { LayoutService } from 'src/app/services/app.layout.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html',
  styleUrls: ['./app.menu.component.scss']
})
export class AppMenuComponent implements OnInit {
  @Input() user: any;
  model: any[] = [];
  currentLanguage: string = 'en';
  currentUSer: any;
  isUserLoggedIn: boolean = false;
  isCuttingToolUser: boolean = false;
  isOilUser: boolean = false;
  isGrindingUser: boolean = false;
  isSetupUser : boolean = false;
  isOtherUser: boolean = false;
  isCleaningUser: boolean = false;

  iseditorLoggedIn: boolean = false;
  isuserLoggedIn: boolean = false;
  isadminLoggedIn: boolean = false;
  isunknownLoggedIn: boolean = false;

  constructor(
    private translate: TranslateService,
    public account: AccountService,
    public layoutService: LayoutService,
    public languageService: LanguageService
  ) {
    // อัปเดตเมนูเมื่อเปลี่ยนภาษา
    this.translate.onLangChange.subscribe(() => {
      // this.updateMenuItems();
    });
  }

  // ฟังก์ชันสลับภาษา
  switchLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'th' ? 'en' : 'th';
    this.translate.use(this.currentLanguage);

    this.updateMenuItems(); // อัปเดตเมนูเมื่อเปลี่ยนภาษา
  }
  ngOnInit() {

    this.getUserRole();
    // this.updateMenuItems();
    // ใช้ค่าภาษาปัจจุบันโดยไม่เปลี่ยนแปลง
    this.currentLanguage = this.translate.currentLang || 'en';
    // this.updateMenuItems();
  }
  checkRole(role: string): boolean {
    return ['user-cuttingtool', 'user-oil', 'user-grinding', 'user-setup', 'user-other'].includes(role);
}

  // ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้และตั้งค่าสถานะ
  Get_user() {
    this.isCuttingToolUser = true;
    this.isOilUser = true;
    this.isGrindingUser = true;
    this.isSetupUser = true;
    this.isOtherUser = true;
    this.isCleaningUser = true;

    this.isadminLoggedIn = true;
    this.isuserLoggedIn = true;
    this.iseditorLoggedIn = true;
    this.updateMenuItems(); // อัปเดตเมนูหลังจากตั้งค่าสถานะ
    console.log(this.isCuttingToolUser, this.isOilUser, this.isSetupUser, this.isOtherUser, this.isGrindingUser,  this.isadminLoggedIn, this.isuserLoggedIn, this.iseditorLoggedIn);
  }
  getUserRole() {
    this.currentUSer= this.account.getUser();
    const role = this.currentUSer.role; // หรือดึงผ่าน API
    this.isadminLoggedIn = role === 'admin';
    this.isCuttingToolUser = role === 'user-cuttingtool';
    this.isOilUser = role === 'user-oil';
    this.isGrindingUser = role === 'user-grinding';
    this.isSetupUser = role === 'user-setup';
    this.isOtherUser = role === 'user-other';
    this.isCleaningUser = role === 'user-cleaning';

    this.isunknownLoggedIn = !role; // สำหรับผู้ใช้ที่ยังไม่ได้เข้าสู่ระบบ
    this.updateMenuItems();
    console.log(this.isadminLoggedIn, this.isuserLoggedIn, this.iseditorLoggedIn,this.currentUSer);
  }



  // ฟังก์ชันสำหรับอัปเดตเมนู
  updateMenuItems() {
    const currentLang = this.translate.currentLang || this.currentLanguage; // ใช้ภาษาปัจจุบันจาก TranslateService
    this.model = [
      // cuttingtool
      {
        label: this.translate.instant('PAGES'),
        visible: this.isCuttingToolUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('REQUEST'),
            icon: 'pi pi-fw pi-truck',
            routerLink: ['/pages/request'],
          },
          {
            label: this.translate.instant('CART'),
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/pages/cart'],
          },
          {
            label: this.translate.instant('LIST REQUEST'),
            icon: 'pi pi-fw pi-list',
            routerLink: ['/pages/list-request'],
          },
          {
            label: this.translate.instant('RECEIVE'),
            icon: 'pi pi-fw pi-box',
            routerLink: ['/pages/receive'],
          },
          {
            label: this.translate.instant('RETURN'),
            icon: 'pi pi-fw pi-reply',
            routerLink: ['/pages/list-return-cuttingtool'], // เส้นทางสำหรับผู้ใช้
          },
          {
            label: this.translate.instant('HISTORY REQUEST'),
            icon: 'pi pi-fw pi-clock',
            routerLink: ['/pages/history'],
          },
        ],
      },
      {
        label: this.translate.instant('CONTACT US'),
        visible: this.isCuttingToolUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('ADMIN'),
            icon: 'pi pi-fw pi-phone',
          },
        ],
      },

      // oil
      {
        label: this.translate.instant('PAGES'),
        visible: this.isOilUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('REQUEST'),
            icon: 'pi pi-fw pi-truck',
            routerLink: ['/pages/request-oil'],
          },
          {
            label: this.translate.instant('CART'),
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/pages/cart-oil'],
          },
          {
            label: this.translate.instant('LIST REQUEST'),
            icon: 'pi pi-fw pi-list',
            routerLink: ['/pages/list-request-oil'],
          },
          {
            label: this.translate.instant('RECEIVE'),
            icon: 'pi pi-fw pi-box',
            routerLink: ['/pages/receive-oil'],
          },
          {
            label: this.translate.instant('RETURN'),
            icon: 'pi pi-fw pi-reply',
            routerLink: ['/pages/list-return-oil'], // เส้นทางสำหรับผู้ใช้
          },
          {
            label: this.translate.instant('HISTORY REQUEST'),
            icon: 'pi pi-fw pi-clock',
            routerLink: ['/pages/history-oil'],
          },
        ],
      },
      {
        label: this.translate.instant('CONTACT US'),
        visible: this.isOilUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('ADMIN'),
            icon: 'pi pi-fw pi-phone',
          },
        ],
      },

      // grinding
      {
        label: this.translate.instant('PAGES'),
        visible: this.isGrindingUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('REQUEST'),
            icon: 'pi pi-fw pi-truck',
            routerLink: ['/pages/request-grinding'],
          },
          {
            label: this.translate.instant('CART'),
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/pages/cart-grinding'],
          },
          {
            label: this.translate.instant('LIST REQUEST'),
            icon: 'pi pi-fw pi-list',
            routerLink: ['/pages/list-request-grinding'],
          },
          {
            label: this.translate.instant('RECEIVE'),
            icon: 'pi pi-fw pi-box',
            routerLink: ['/pages/receive-grinding'],
          },
          {
            label: this.translate.instant('RETURN'),
            icon: 'pi pi-fw pi-reply',
            routerLink: ['/pages/list-return-grinding'], // เส้นทางสำหรับผู้ใช้
          },
          {
            label: this.translate.instant('HISTORY REQUEST'),
            icon: 'pi pi-fw pi-clock',
            routerLink: ['/pages/history-grinding'],
          },
        ],
      },
      {
        label: this.translate.instant('CONTACT US'),
        visible: this.isGrindingUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('ADMIN'),
            icon: 'pi pi-fw pi-phone',
          },
        ],
      },

      // setup
      {
        label: this.translate.instant('PAGES'),
        visible: this.isSetupUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('REQUEST'),
            icon: 'pi pi-fw pi-truck',
            routerLink: ['/pages/request-setup'],
          },
          {
            label: this.translate.instant('CART'),
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/pages/cart-setup'],
          },
          {
            label: this.translate.instant('LIST REQUEST'),
            icon: 'pi pi-fw pi-list',
            routerLink: ['/pages/list-request-setup'],
          },
          {
            label: this.translate.instant('RECEIVE'),
            icon: 'pi pi-fw pi-box',
            routerLink: ['/pages/receive-setup'],
          },
          {
            label: this.translate.instant('RETURN'),
            icon: 'pi pi-fw pi-reply',
            routerLink: ['/pages/list-return-setup'], // เส้นทางสำหรับผู้ใช้
          },
          {
            label: this.translate.instant('HISTORY REQUEST'),
            icon: 'pi pi-fw pi-clock',
            routerLink: ['/pages/history-setup'],
          },
        ],
      },
      {
        label: this.translate.instant('CONTACT US'),
        visible: this.isSetupUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('ADMIN'),
            icon: 'pi pi-fw pi-phone',
          },
        ],
      },

      // other
      {
        label: this.translate.instant('PAGES'),
        visible: this.isOtherUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('REQUEST'),
            icon: 'pi pi-fw pi-truck',
            routerLink: ['/pages/request-other'],
          },
          {
            label: this.translate.instant('CART'),
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/pages/cart-other'],
          },
          {
            label: this.translate.instant('LIST REQUEST'),
            icon: 'pi pi-fw pi-list',
            routerLink: ['/pages/list-request-other'],
          },
          {
            label: this.translate.instant('RECEIVE'),
            icon: 'pi pi-fw pi-box',
            routerLink: ['/pages/receive-other'],
          },
          {
            label: this.translate.instant('RETURN'),
            icon: 'pi pi-fw pi-reply',
            routerLink: ['/pages/list-return-other'], // เส้นทางสำหรับผู้ใช้
          },
          {
            label: this.translate.instant('HISTORY REQUEST'),
            icon: 'pi pi-fw pi-clock',
            routerLink: ['/pages/history-other'],
          },
        ],
      },
      {
        label: this.translate.instant('CONTACT US'),
        visible: this.isOtherUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('ADMIN'),
            icon: 'pi pi-fw pi-phone',
          },
        ],
      },

      // cleaning
      {
        label: this.translate.instant('PAGES'),
        visible: this.isCleaningUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('REQUEST'),
            icon: 'pi pi-fw pi-truck',
            routerLink: ['/pages/request-cleaning'],
          },
          {
            label: this.translate.instant('CART'),
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/pages/cart-cleaning'],
          },
          {
            label: this.translate.instant('LIST REQUEST'),
            icon: 'pi pi-fw pi-list',
            routerLink: ['/pages/list-request-cleaning'],
          },
          {
            label: this.translate.instant('RECEIVE'),
            icon: 'pi pi-fw pi-box',
            routerLink: ['/pages/receive-cleaning'],
          },
          {
            label: this.translate.instant('RETURN'),
            icon: 'pi pi-fw pi-reply',
            routerLink: ['/pages/list-return-cleaning'], // เส้นทางสำหรับผู้ใช้
          },
          {
            label: this.translate.instant('HISTORY REQUEST'),
            icon: 'pi pi-fw pi-clock',
            routerLink: ['/pages/history-cleaning'],
          },
        ],
      },
      {
        label: this.translate.instant('CONTACT US'),
        visible: this.isCleaningUser, // สำหรับผู้ใช้ทั่วไป
        items: [
          {
            label: this.translate.instant('ADMIN'),
            icon: 'pi pi-fw pi-phone',
          },
        ],
      },

      // admin
      {
        label: this.translate.instant('PAGES'),
        visible: this.isadminLoggedIn, // สำหรับแอดมิน
        items: [
          {
            label: this.translate.instant('LIST REQUEST'),
            icon: 'pi pi-fw pi-list',
            routerLink: ['/pages/list-choose-admin'],
          },
          {
            label: this.translate.instant('RETURN'),
            icon: 'pi pi-fw pi-reply',
            routerLink: ['/pages/return-admin'],
             // เส้นทางสำหรับแอดมิน
          },
          {
            label: this.translate.instant('HISTORY REQUEST'),
            icon: 'pi pi-fw pi-clock',
            routerLink: ['/pages/history-choose-admin'],
          },
          {
            label: this.translate.instant('MASTER'),
            icon: 'pi pi-fw pi-user-edit',
            items: [
              {
                label: this.translate.instant('SUMMARY'),
                icon: 'pi pi-fw pi-chart-pie',
                routerLink: ['/pages/dashboard'],
              },
              {
                label: this.translate.instant('ADD MASTER'),
                icon: 'pi pi-fw pi-cog',
                routerLink: ['/pages/choose-master'],
              },
              {
                label: this.translate.instant('MEMBER'),
                icon: 'pi pi-fw pi-users',
                routerLink: ['/members'],
              },
            ],
          },
        ],
      },


      {
        label: this.translate.instant('PAGES'),
        visible: !this.isCuttingToolUser && !this.isOilUser &&  !this.isGrindingUser &&  !this.isSetupUser && !this.isOtherUser && !this.isCleaningUser && !this.isadminLoggedIn, // สำหรับผู้ที่ยังไม่ได้เข้าสู่ระบบ
        items: [
          {
            label: this.translate.instant('REQUEST'),
            icon: 'pi pi-fw pi-truck',
            routerLink: ['/pages/request'],
          },
          {
            label: this.translate.instant('CART'),
            icon: 'pi pi-fw pi-shopping-cart',
            routerLink: ['/pages/cart'],
          },
          {
            label: this.translate.instant('LIST REQUEST'),
            icon: 'pi pi-fw pi-list',
            routerLink: ['/login'],
          },
          {
            label: this.translate.instant('RECEIVE'),
            icon: 'pi pi-fw pi-box',
            routerLink: ['/login'],
          },
          {
            label: this.translate.instant('RETURN'),
            icon: 'pi pi-fw pi-reply',
            routerLink: ['/login'], // เส้นทางไปหน้า login
          },
          {
            label: this.translate.instant('HISTORY REQUEST'),
            icon: 'pi pi-fw pi-clock',
            routerLink: ['/login'],
          },
        ],
      },
      {
        label: this.translate.instant('CONTACT US'),
        visible: !this.isCuttingToolUser && !this.isOilUser &&  !this.isGrindingUser &&  !this.isSetupUser && !this.isOtherUser && !this.isCleaningUser && !this.isadminLoggedIn, // สำหรับผู้ที่ยังไม่ได้เข้าสู่ระบบ
        items: [
          {
            label: this.translate.instant('ADMIN'),
            icon: 'pi pi-fw pi-phone',
          },
        ],
      },
    ];

  }
}
