import { NgModule } from '@angular/core'; // นำเข้า NgModule จาก Angular core
import { CommonModule } from '@angular/common'; // นำเข้า CommonModule สำหรับฟีเจอร์ทั่วไปของ Angular
import { FormsModule } from '@angular/forms'; // นำเข้า FormsModule สำหรับการทำงานกับฟอร์ม
import { ReactiveFormsModule } from '@angular/forms'; // นำเข้า ReactiveFormsModule สำหรับการทำงานกับฟอร์มแบบ reactive
import { PrimengModule } from 'src/app/primeng.module'; // นำเข้า PrimengModule สำหรับใช้งาน PrimeNG components
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';

import { NgxBarcode6Module } from 'ngx-barcode6'; // นำเข้า NgxBarcode6Module สำหรับสร้างบาร์โค้ด
import { PagesRoutingModule } from './pages-routing.module'; // นำเข้า PagesRoutingModule สำหรับจัดการ routing ของ Pages
import { CdTimerModule } from 'angular-cd-timer'; // นำเข้า CdTimerModule สำหรับใช้งานตัวจับเวลา
import { MessageService } from 'primeng/api';
import { TranslateModule } from '@ngx-translate/core';

// กำหนด Components ที่ใช้ใน PagesModule
import { AdminComponent } from './admin/admin.component'; // นำเข้า AdminComponent
import { CartComponent } from './cart/cart.component'; // นำเข้า CartComponent
import { ReceiveComponent } from './receive/receive.component'; // นำเข้า ReceiveComponent
import { DetailRequestComponent } from './detail-request/detail-request.component'; // นำเข้า DetailRequestComponent
import { HistoryComponent } from './history/history.component'; // นำเข้า HistoryComponent
import { ListRequestComponent } from './list-request/list-request.component'; // นำเข้า ListRequestComponent
import { RequestComponent } from './request/request.component'; // นำเข้า RequestComponent
import { SummaryComponent } from './summary/summary.component'; // นำเข้า SummaryComponent

import { ReturnComponent } from './return/return.component';
import { ReturnAdminComponent } from './return/return-admin/return-admin.component';
import { ReturnUserComponent } from './return/return-user/return-user.component';

import { RequestChooseComponent } from './request-choose/request-choose.component';
import { RequestOilComponent } from './request-oil/request-oil.component';
import { RequestGrindingComponent } from './request-grinding/request-grinding.component';
import { RequestSetupComponent } from './request-setup/request-setup.component';
import { RequestCleaningComponent } from './request-cleaning/request-cleaning.component';
import { RequestOtherComponent } from './request-other/request-other.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SummaryChooseComponent } from './summary-choose/summary-choose.component';
import { DashboardOilComponent } from './dashboard-oil/dashboard-oil.component';
import { DashboardGrindingComponent } from './dashboard-grinding/dashboard-grinding.component';
import { DashboardCleaningComponent } from './dashboard-cleaning/dashboard-cleaning.component';
import { DashboardSetupComponent } from './dashboard-setup/dashboard-setup.component';
import { DashboardOtherComponent } from './dashboard-other/dashboard-other.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { StackedBarChartComponent } from './stacked-bar-chart/stacked-bar-chart.component';
import { ChooseMasterComponent } from './choose-master/choose-master.component';
import { AddCuttingtoolComponent } from './add-cuttingtool/add-cuttingtool.component';
import { CuttingToolAddMasterComponent } from './cutting-tool-add-master/cutting-tool-add-master.component';
import { CuttingToolAddExcelComponent } from './cutting-tool-add-excel/cutting-tool-add-excel.component';
import { CuttingToolUpdateComponent } from './cutting-tool-update/cutting-tool-update.component';
import { OilAddMasterComponent } from './oil-add-master/oil-add-master.component';
import { OilAddExcelComponent } from './oil-add-excel/oil-add-excel.component';
import { OilUpdateComponent } from './oil-update/oil-update.component';
import { GrindingAddMasterComponent } from './grinding-add-master/grinding-add-master.component';
import { GrindingAddExcelComponent } from './grinding-add-excel/grinding-add-excel.component';
import { GrindingUpdateComponent } from './grinding-update/grinding-update.component';
import { SetUpAddMasterComponent } from './set-up-add-master/set-up-add-master.component';
import { SetUpAddExcelComponent } from './set-up-add-excel/set-up-add-excel.component';
import { SetUpUpdateComponent } from './set-up-update/set-up-update.component';
import { CleaningAddMasterComponent } from './cleaning-add-master/cleaning-add-master.component';
import { CleaningAddExcelComponent } from './cleaning-add-excel/cleaning-add-excel.component';
import { CleaningUpdateComponent } from './cleaning-update/cleaning-update.component';
import { OtherAddMasterComponent } from './other-add-master/other-add-master.component';
import { OtherAddExcelComponent } from './other-add-excel/other-add-excel.component';
import { OtherUpdateComponent } from './other-update/other-update.component';
import { AddOilComponent } from './add-oil/add-oil.component';
import { AddGrindingComponent } from './add-grinding/add-grinding.component';
import { AddSetUpComponent } from './add-set-up/add-set-up.component';
import { AddCleaningComponent } from './add-cleaning/add-cleaning.component';
import { AddOtherComponent } from './add-other/add-other.component';
import { CartOilComponent } from './cart-oil/cart-oil.component';
import { CartGrindingComponent } from './cart-grinding/cart-grinding.component';
import { CartSetupComponent } from './cart-setup/cart-setup.component';
import { CartOtherComponent } from './cart-other/cart-other.component';
import { CartCleaningComponent } from './cart-cleaning/cart-cleaning.component';
import { ListRequestOilComponent } from './list-request-oil/list-request-oil.component';
import { ListRequestGrindingComponent } from './list-request-grinding/list-request-grinding.component';
import { ListRequestSetupComponent } from './list-request-setup/list-request-setup.component';
import { ListRequestCleaningComponent } from './list-request-cleaning/list-request-cleaning.component';
import { ListRequestOtherComponent } from './list-request-other/list-request-other.component';
import { ReceiveOilComponent } from './receive-oil/receive-oil.component';
import { ReceiveGrindingComponent } from './receive-grinding/receive-grinding.component';
import { ReceiveSetupComponent } from './receive-setup/receive-setup.component';
import { ReceiveCleaningComponent } from './receive-cleaning/receive-cleaning.component';
import { ReceiveOtherComponent } from './receive-other/receive-other.component';
import { HistoryOilComponent } from './history-oil/history-oil.component';
import { HistoryGrindingComponent } from './history-grinding/history-grinding.component';
import { HistorySetupComponent } from './history-setup/history-setup.component';
import { HistoryCleaningComponent } from './history-cleaning/history-cleaning.component';
import { HistoryOtherComponent } from './history-other/history-other.component';
import { DetailRequestOilComponent } from './detail-request-oil/detail-request-oil.component';
import { DetailRequestGrindingComponent } from './detail-request-grinding/detail-request-grinding.component';
import { DetailRequestSetupComponent } from './detail-request-setup/detail-request-setup.component';
import { DetailRequestCleaningComponent } from './detail-request-cleaning/detail-request-cleaning.component';
import { DetailRequestOtherComponent } from './detail-request-other/detail-request-other.component';
import { SummaryOilComponent } from './summary-oil/summary-oil.component';
import { SummaryGrindingComponent } from './summary-grinding/summary-grinding.component';
import { SummarySetupComponent } from './summary-setup/summary-setup.component';
import { SummaryCleaningComponent } from './summary-cleaning/summary-cleaning.component';
import { SummaryOtherComponent } from './summary-other/summary-other.component';
import { ListChooseAdminComponent } from './list-choose-admin/list-choose-admin.component';

import { HistoryChooseAdminComponent } from './history-choose-admin/history-choose-admin.component';

 // นำเข้า MessageService จาก PrimeNG API

@NgModule({
  declarations: [ // ประกาศคอมโพเนนต์ที่จะใช้ในโมดูลนี้
    AdminComponent,
    CartComponent,
    ReceiveComponent,
    DetailRequestComponent,
    HistoryComponent,
    ListRequestComponent,
    RequestComponent,
    SummaryComponent,
    ReturnComponent,
    ReturnAdminComponent,
    ReturnUserComponent,
    RequestChooseComponent,
    RequestOilComponent,
    RequestGrindingComponent,
    RequestSetupComponent,
    RequestCleaningComponent,
    RequestOtherComponent,
    DashboardComponent,
    SummaryChooseComponent,
    DashboardOilComponent,
    DashboardGrindingComponent,
    DashboardCleaningComponent,
    DashboardSetupComponent,
    DashboardOtherComponent,
    PieChartComponent,
    BarChartComponent,
    StackedBarChartComponent,
    ChooseMasterComponent,
    AddCuttingtoolComponent,
    CuttingToolAddMasterComponent,
    CuttingToolAddExcelComponent,
    CuttingToolUpdateComponent,
    OilAddMasterComponent,
    OilAddExcelComponent,
    OilUpdateComponent,
    GrindingAddMasterComponent,
    GrindingAddExcelComponent,
    GrindingUpdateComponent,
    SetUpAddMasterComponent,
    SetUpAddExcelComponent,
    SetUpUpdateComponent,
    CleaningAddMasterComponent,
    CleaningAddExcelComponent,
    CleaningUpdateComponent,
    OtherAddMasterComponent,
    OtherAddExcelComponent,
    OtherUpdateComponent,
    AddOilComponent,
    AddGrindingComponent,
    AddSetUpComponent,
    AddCleaningComponent,
    AddOtherComponent,
    CartOilComponent,
    CartGrindingComponent,
    CartSetupComponent,
    CartOtherComponent,
    CartCleaningComponent,
    ListRequestOilComponent,
    ListRequestGrindingComponent,
    ListRequestSetupComponent,
    ListRequestCleaningComponent,
    ListRequestOtherComponent,
    ReceiveOilComponent,
    ReceiveGrindingComponent,
    ReceiveSetupComponent,
    ReceiveCleaningComponent,
    ReceiveOtherComponent,
    HistoryOilComponent,
    HistoryGrindingComponent,
    HistorySetupComponent,
    HistoryCleaningComponent,
    HistoryOtherComponent,
    DetailRequestOilComponent,
    DetailRequestGrindingComponent,
    DetailRequestSetupComponent,
    DetailRequestCleaningComponent,
    DetailRequestOtherComponent,
    SummaryOilComponent,
    SummaryGrindingComponent,
    SummarySetupComponent,
    SummaryCleaningComponent,
    SummaryOtherComponent,
    ListChooseAdminComponent,
    HistoryChooseAdminComponent,



  ],
  imports: [ // นำเข้าโมดูลอื่นๆ ที่จำเป็น
    CommonModule, // โมดูลทั่วไปของ Angular
    FormsModule, // โมดูลสำหรับฟอร์ม
    ReactiveFormsModule, // โมดูลสำหรับฟอร์มแบบ reactive
    CdTimerModule, // โมดูลสำหรับตัวจับเวลา
    PrimengModule, // โมดูลสำหรับ PrimeNG
    PagesRoutingModule, // โมดูล routing ของ Pages
    NgxBarcode6Module, // โมดูลสำหรับสร้างบาร์โค้ด
    TranslateModule,
    ButtonModule,
    MultiSelectModule,
    TableModule,
  ],
  providers: [ // กำหนดบริการที่จะใช้ในโมดูลนี้
    MessageService // บริการสำหรับจัดการข้อความของ PrimeNG
  ]
})
export class PagesModule { } // สร้างคลาส PagesModule
