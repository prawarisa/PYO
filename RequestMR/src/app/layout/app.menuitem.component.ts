import { ChangeDetectorRef, Component, Host, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';  // นำเข้าคลาสต่างๆ ที่จำเป็น
import { NavigationEnd, Router } from '@angular/router';  // นำเข้าฟังก์ชันที่เกี่ยวข้องกับการนำทาง
import { animate, state, style, transition, trigger } from '@angular/animations';  // นำเข้าฟังก์ชันที่เกี่ยวกับการเคลื่อนไหว
import { Subscription } from 'rxjs';  // นำเข้าการจัดการ Subscription
import { filter } from 'rxjs/operators';  // นำเข้าฟังก์ชัน filter
import { MenuService } from './app.menu.service';  // นำเข้า MenuService
import { LayoutService } from '../services/app.layout.service';  // นำเข้า LayoutService

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[app-menuitem]',  // กำหนด selector สำหรับ component นี้
  // กำหนดเทมเพลต HTML ของ component
  template: `
		<ng-container>
            <div *ngIf="root && item.visible !== false && item.items.visible !== false" class="layout-menuitem-root-text">{{item.label}}</div>
			<a *ngIf="(!item.routerLink || item.items) && item.visible !== false " [attr.href]="item.url" (click)="itemClick($event)"
			   [ngClass]="item.class" [attr.target]="item.target" tabindex="0" pRipple>
				<i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				<span class="layout-menuitem-text">{{item.label}}</span>
				<i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
			</a>
			<a *ngIf="(item.routerLink && !item.items) && item.visible !== false" (click)="itemClick($event)" [ngClass]="item.class"
			   [routerLink]="item.routerLink" routerLinkActive="active-route" [routerLinkActiveOptions]="item.routerLinkActiveOptions||{ paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
               [fragment]="item.fragment" [queryParamsHandling]="item.queryParamsHandling" [preserveFragment]="item.preserveFragment"
               [skipLocationChange]="item.skipLocationChange" [replaceUrl]="item.replaceUrl" [state]="item.state" [queryParams]="item.queryParams"
               [attr.target]="item.target" tabindex="0" pRipple>
				<i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
				<span class="layout-menuitem-text">{{item.label}}</span>
				<i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
			</a>

			<ul *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation">
				<ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
					<li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child.badgeClass"></li>
				</ng-template>
			</ul>
		</ng-container>
    `,
  animations: [
    trigger('children', [  // กำหนดการเคลื่อนไหวของ submenu
      state('collapsed', style({
        height: '0'  // กำหนดความสูงเป็น 0 เมื่อลดขนาด
      })),
      state('expanded', style({
        height: '*'  // กำหนดความสูงตามเนื้อหาเมื่อตอนขยาย
      })),
      transition('collapsed <=> expanded', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))  // กำหนดการเคลื่อนไหวเมื่อเปลี่ยนสถานะ
    ])
  ]
})
export class AppMenuitemComponent implements OnInit, OnDestroy {
  @Input() item: any;  // รับข้อมูล item ผ่าน input

  @Input() index!: number;  // รับ index ผ่าน input

  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;  // กำหนด class ของ host

  @Input() parentKey!: string;  // รับ parentKey ผ่าน input

  active = false;  // สถานะการแสดงผล item

  menuSourceSubscription: Subscription;  // Subscription สำหรับเมนู

  menuResetSubscription: Subscription;  // Subscription สำหรับรีเซ็ตเมนู

  key: string = "";  // ค่ากุญแจสำหรับ item

  constructor(public layoutService: LayoutService, private cd: ChangeDetectorRef, public router: Router, private menuService: MenuService) {
    this.menuSourceSubscription = this.menuService.menuSource$.subscribe(value => {  // Subscribe สำหรับเมนู
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = (value.key === this.key || value.key.startsWith(this.key + '-')) ? true : false;  // อัปเดตสถานะ active
        }
        else {
          if (value.key !== this.key && !value.key.startsWith(this.key + '-')) {
            this.active = false;  // ถ้า key ไม่ตรงกัน ตั้งค่า active เป็น false
          }
        }
      });
    });

    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;  // ตั้งค่า active เป็น false เมื่อรีเซ็ต
    });

    this.router.events.pipe(filter(event => event instanceof NavigationEnd))  // เมื่อมีการนำทางเสร็จสิ้น
      .subscribe(params => {
        if (this.item.routerLink) {
          this.updateActiveStateFromRoute();  // อัปเดตสถานะ active จาก route
        }
      });
  }

  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + '-' + this.index : String(this.index);  // สร้าง key สำหรับ item

    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();  // อัปเดตสถานะ active ถ้ามี routerLink
    }
  }

  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' });  // ตรวจสอบว่า route เป็น active หรือไม่

    if (activeRoute) {
      this.menuService.onMenuStateChange({ key: this.key, routeEvent: true });  // แจ้งเมนูว่า route เป็น active
    }
  }

  itemClick(event: Event) {
    // ป้องกันการประมวลผล item ที่ถูกปิดการใช้งาน
    if (this.item.disabled) {
      event.preventDefault();  // ป้องกันเหตุการณ์เริ่มต้น
      return;
    }

    // รันคำสั่งถ้ามี
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });  // เรียกใช้งานคำสั่ง
    }

    // สลับสถานะ active
    if (this.item.items) {
      this.active = !this.active;  // สลับสถานะ active สำหรับ submenu
    }

    this.menuService.onMenuStateChange({ key: this.key });  // แจ้งเมนูเกี่ยวกับสถานะ
  }

  get submenuAnimation() {
    return this.root ? 'expanded' : (this.active ? 'expanded' : 'collapsed');  // กำหนดสถานะการเคลื่อนไหวของ submenu
  }

  @HostBinding('class.active-menuitem')  // กำหนด class สำหรับ active item
  get activeClass() {
    return this.active && !this.root;  // คืนค่าหมายถึง active item
  }

  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();  // ยกเลิกการ subscribe สำหรับเมนู
    }

    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();  // ยกเลิกการ subscribe สำหรับรีเซ็ต
    }
  }
}
