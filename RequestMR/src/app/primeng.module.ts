import { NgModule } from '@angular/core'; // นำเข้า NgModule เพื่อกำหนดโมดูล
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule ซึ่งมีฟีเจอร์ทั่วไปของ Angular
import { ButtonModule } from 'primeng/button'; // นำเข้า ButtonModule จาก PrimeNG
import { ToggleButtonModule } from 'primeng/togglebutton'; // นำเข้า ToggleButtonModule
import { InputTextModule } from 'primeng/inputtext'; // นำเข้า InputTextModule
import { InputTextareaModule } from 'primeng/inputtextarea'; // นำเข้า InputTextareaModule
import { InputNumberModule } from 'primeng/inputnumber'; // นำเข้า InputNumberModule
import { InputSwitchModule } from 'primeng/inputswitch'; // นำเข้า InputSwitchModule
import { AutoCompleteModule } from 'primeng/autocomplete'; // นำเข้า AutoCompleteModule
import { PasswordModule } from 'primeng/password'; // นำเข้า PasswordModule
import { MenuModule } from 'primeng/menu'; // นำเข้า MenuModule
import { MenubarModule } from 'primeng/menubar'; // นำเข้า MenubarModule
import { TabMenuModule } from 'primeng/tabmenu'; // นำเข้า TabMenuModule
import { MegaMenuModule } from 'primeng/megamenu'; // นำเข้า MegaMenuModule
import { TooltipModule } from 'primeng/tooltip'; // นำเข้า TooltipModule
import { SlideMenuModule } from 'primeng/slidemenu'; // นำเข้า SlideMenuModule
import { CalendarModule } from 'primeng/calendar'; // นำเข้า CalendarModule
import { DropdownModule } from 'primeng/dropdown'; // นำเข้า DropdownModule
import { FileUploadModule } from 'primeng/fileupload'; // นำเข้า FileUploadModule
import { ToastModule } from 'primeng/toast'; // นำเข้า ToastModule
import { TableModule } from 'primeng/table'; // นำเข้า TableModule
import { DockModule } from 'primeng/dock'; // นำเข้า DockModule
import { PaginatorModule } from 'primeng/paginator'; // นำเข้า PaginatorModule
import { SidebarModule } from 'primeng/sidebar'; // นำเข้า SidebarModule
import { CheckboxModule } from 'primeng/checkbox'; // นำเข้า CheckboxModule
import { RadioButtonModule } from 'primeng/radiobutton'; // นำเข้า RadioButtonModule
import { DialogModule } from 'primeng/dialog'; // นำเข้า DialogModule
import { CardModule } from 'primeng/card'; // นำเข้า CardModule
import { BadgeModule } from 'primeng/badge'; // นำเข้า BadgeModule
import { OverlayPanelModule } from 'primeng/overlaypanel'; // นำเข้า OverlayPanelModule
import { StyleClassModule } from 'primeng/styleclass'; // นำเข้า StyleClassModule
import { RippleModule } from 'primeng/ripple'; // นำเข้า RippleModule
import { DragDropModule } from 'primeng/dragdrop'; // นำเข้า DragDropModule
import { ChipModule } from 'primeng/chip'; // นำเข้า ChipModule
import { MessagesModule } from 'primeng/messages'; // นำเข้า MessagesModule
import { ConfirmDialogModule } from 'primeng/confirmdialog'; // นำเข้า ConfirmDialogModule
import { ConfirmPopupModule } from 'primeng/confirmpopup'; // นำเข้า ConfirmPopupModule
import { ChartModule } from 'primeng/chart'; // นำเข้า ChartModule
import { ImageModule } from 'primeng/image'; // นำเข้า ImageModule
import { GalleriaModule } from 'primeng/galleria'; // นำเข้า GalleriaModule
import { ProgressSpinnerModule } from 'primeng/progressspinner'; // นำเข้า ProgressSpinnerModule

// สร้างอาร์เรย์ primeng ที่รวบรวมโมดูล PrimeNG ทั้งหมด
const primeng = [
  ButtonModule,
  ToggleButtonModule,
  InputTextModule,
  InputTextareaModule,
  InputNumberModule,
  InputSwitchModule,
  AutoCompleteModule,
  PasswordModule,
  MenuModule,
  MenubarModule,
  TabMenuModule,
  DockModule,
  MegaMenuModule,
  TooltipModule,
  SlideMenuModule,
  CalendarModule,
  DropdownModule,
  FileUploadModule,
  ToastModule,
  TableModule,
  PaginatorModule,
  SidebarModule,
  CheckboxModule,
  RadioButtonModule,
  DialogModule,
  CardModule,
  BadgeModule,
  OverlayPanelModule,
  StyleClassModule,
  RippleModule,
  DragDropModule,
  ChipModule,
  MessagesModule,
  ConfirmDialogModule,
  ConfirmPopupModule,
  ChartModule,
  ImageModule,
  GalleriaModule,
  ProgressSpinnerModule
]

@NgModule({
  declarations: [], // ไม่มีคอมโพเนนต์ที่ประกาศในโมดูลนี้
  imports: [
    CommonModule, // เพิ่ม CommonModule
    primeng // เพิ่มโมดูล PrimeNG ที่รวมไว้ในอาร์เรย์
  ],
  exports: [
    primeng // ส่งออกโมดูล PrimeNG ให้สามารถใช้ได้ในโมดูลอื่น ๆ
  ]
})
export class PrimengModule { } // ประกาศคลาส PrimengModule
