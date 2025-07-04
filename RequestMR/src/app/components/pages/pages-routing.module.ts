import { NgModule, Component } from '@angular/core'; // นำเข้า NgModule จาก Angular core
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router'; // นำเข้า RouterModule, RouterLink, RouterOutlet สำหรับการจัดการ routing
import { RequestComponent } from './request/request.component'; // นำเข้า RequestComponent

import { CartComponent } from './cart/cart.component'; // นำเข้า CartComponent
import { ListRequestComponent } from './list-request/list-request.component'; // นำเข้า ListRequestComponent
import { HistoryComponent } from './history/history.component'; // นำเข้า HistoryComponent
import { DetailRequestComponent } from './detail-request/detail-request.component'; // นำเข้า DetailRequestComponent
import { ReceiveComponent } from './receive/receive.component'; // นำเข้า ReceiveComponent
import { SummaryComponent } from './summary/summary.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RequestChooseComponent } from './request-choose/request-choose.component';
import { RequestOilComponent } from './request-oil/request-oil.component';
import { RequestGrindingComponent } from './request-grinding/request-grinding.component';
import { RequestSetupComponent } from './request-setup/request-setup.component';
import { RequestCleaningComponent } from './request-cleaning/request-cleaning.component';
import { RequestOtherComponent } from './request-other/request-other.component';

import { ChooseMasterComponent } from './choose-master/choose-master.component';
import { ListChooseAdminComponent } from './list-choose-admin/list-choose-admin.component';
import { HistoryChooseAdminComponent } from './history-choose-admin/history-choose-admin.component';
import { AddCuttingtoolComponent } from './add-cuttingtool/add-cuttingtool.component';
import { CuttingToolAddMasterComponent } from './cutting-tool-add-master/cutting-tool-add-master.component';
import { CuttingToolAddExcelComponent} from './cutting-tool-add-excel/cutting-tool-add-excel.component';
import { CuttingToolUpdateComponent } from './cutting-tool-update/cutting-tool-update.component';

import { AddOilComponent } from './add-oil/add-oil.component';
import { OilAddMasterComponent } from './oil-add-master/oil-add-master.component';
import { OilAddExcelComponent } from './oil-add-excel/oil-add-excel.component';
import { OilUpdateComponent } from './oil-update/oil-update.component';

import { AddGrindingComponent } from './add-grinding/add-grinding.component';
import { GrindingAddMasterComponent } from './grinding-add-master/grinding-add-master.component';
import { GrindingAddExcelComponent } from './grinding-add-excel/grinding-add-excel.component';
import { GrindingUpdateComponent } from './grinding-update/grinding-update.component';

import { AddCleaningComponent } from './add-cleaning/add-cleaning.component';
import { CleaningAddMasterComponent } from './cleaning-add-master/cleaning-add-master.component';
import { CleaningAddExcelComponent } from './cleaning-add-excel/cleaning-add-excel.component';
import { CleaningUpdateComponent } from './cleaning-update/cleaning-update.component';

import { AddOtherComponent } from './add-other/add-other.component';
import { OtherAddMasterComponent } from './other-add-master/other-add-master.component';
import { OtherAddExcelComponent } from './other-add-excel/other-add-excel.component';
import { OtherUpdateComponent } from './other-update/other-update.component';

import { AddSetUpComponent } from './add-set-up/add-set-up.component';
import { SetUpAddMasterComponent } from './set-up-add-master/set-up-add-master.component';
import { SetUpAddExcelComponent } from './set-up-add-excel/set-up-add-excel.component';
import { SetUpUpdateComponent } from './set-up-update/set-up-update.component';

import { CartOilComponent } from './cart-oil/cart-oil.component';
import { ListRequestOilComponent } from './list-request-oil/list-request-oil.component';
import { ReceiveOilComponent } from './receive-oil/receive-oil.component';

import { HistoryOilComponent } from './history-oil/history-oil.component';
import { DetailRequestOilComponent } from './detail-request-oil/detail-request-oil.component';
import { SummaryOilComponent } from './summary-oil/summary-oil.component';

import { CartGrindingComponent } from './cart-grinding/cart-grinding.component';
import { ListRequestGrindingComponent } from './list-request-grinding/list-request-grinding.component';
import { ReceiveGrindingComponent } from './receive-grinding/receive-grinding.component';

import { HistoryGrindingComponent } from './history-grinding/history-grinding.component';
import { DetailRequestGrindingComponent } from './detail-request-grinding/detail-request-grinding.component';
import { SummaryGrindingComponent } from './summary-grinding/summary-grinding.component';

import { CartSetupComponent } from './cart-setup/cart-setup.component';
import { ListRequestSetupComponent } from './list-request-setup/list-request-setup.component';
import { ReceiveSetupComponent } from './receive-setup/receive-setup.component';

import { HistorySetupComponent } from './history-setup/history-setup.component';
import { DetailRequestSetupComponent } from './detail-request-setup/detail-request-setup.component';
import { SummarySetupComponent } from './summary-setup/summary-setup.component';

import { CartCleaningComponent } from './cart-cleaning/cart-cleaning.component';
import { ListRequestCleaningComponent } from './list-request-cleaning/list-request-cleaning.component';
import { ReceiveCleaningComponent } from './receive-cleaning/receive-cleaning.component';

import { HistoryCleaningComponent } from './history-cleaning/history-cleaning.component';
import { DetailRequestCleaningComponent } from './detail-request-cleaning/detail-request-cleaning.component';
import { SummaryCleaningComponent } from './summary-cleaning/summary-cleaning.component';

import { CartOtherComponent } from './cart-other/cart-other.component';
import { ListRequestOtherComponent } from './list-request-other/list-request-other.component';
import { ReceiveOtherComponent } from './receive-other/receive-other.component';

import { HistoryOtherComponent } from './history-other/history-other.component';
import { DetailRequestOtherComponent } from './detail-request-other/detail-request-other.component';
import { SummaryOtherComponent } from './summary-other/summary-other.component';

import { ReturnUserComponent } from './return/return-user/return-user.component';

import { ReturnCleaningUserComponent } from './return/return-user/return-cleaning-user/return-cleaning-user.component';
import { ListReturnCleaningComponent } from './return/return-user/list-return-cleaning/list-return-cleaning.component';
import { DetailReturnCleaningComponent } from './return/return-user/detail-return-cleaning/detail-return-cleaning.component';

import { ReturnCuttingtoolUserComponent } from './return/return-user/return-cuttingtool-user/return-cuttingtool-user.component';
import { ListReturnCuttingtoolComponent } from './return/return-user/list-return-cuttingtool/list-return-cuttingtool.component';
import { DetailReturnCuttingtoolComponent } from './return/return-user/detail-return-cuttingtool/detail-return-cuttingtool.component';

import { ReturnGrindingUserComponent } from './return/return-user/return-grinding-user/return-grinding-user.component';
import { ListReturnGrindingComponent } from './return/return-user/list-return-grinding/list-return-grinding.component';
import { DetailReturnGrindingComponent } from './return/return-user/detail-return-grinding/detail-return-grinding.component';

import { ReturnOilUserComponent } from './return/return-user/return-oil-user/return-oil-user.component';
import { ListReturnOilComponent } from './return/return-user/list-return-oil/list-return-oil.component';
import { DetailReturnOilComponent } from './return/return-user/detail-return-oil/detail-return-oil.component';

import { ReturnOtherUserComponent } from './return/return-user/return-other-user/return-other-user.component';
import { ListReturnOtherComponent } from './return/return-user/list-return-other/list-return-other.component';
import { DetailReturnOtherComponent } from './return/return-user/detail-return-other/detail-return-other.component';

import { ReturnSetupUserComponent } from './return/return-user/return-setup-user/return-setup-user.component';
import { ListReturnSetupComponent } from './return/return-user/list-return-setup/list-return-setup.component';
import { DetailReturnSetupComponent } from './return/return-user/detail-return-setup/detail-return-setup.component';

import { ReturnComponent } from './return/return.component';
import { ReturnAdminComponent } from './return/return-admin/return-admin.component';

import { ReturnCleaningAdminComponent } from './return/return-admin/return-cleaning-admin/return-cleaning-admin.component';
import { DetailCleaningComponent } from './return/return-admin/return-cleaning-admin/detail-cleaning/detail-cleaning.component';
import { CompleteCleaningComponent } from './return/return-admin/return-cleaning-admin/complete-cleaning/complete-cleaning.component';
import { PaddingCleaningComponent } from './return/return-admin/return-cleaning-admin/padding-cleaning/padding-cleaning.component';

import { ReturnCuttingtoolAdminComponent } from './return/return-admin/return-cuttingtool-admin/return-cuttingtool-admin.component';
import { DetailCuttingtoolComponent } from './return/return-admin/return-cuttingtool-admin/detail-cuttingtool/detail-cuttingtool.component';
import { CompleteCuttingtoolComponent } from './return/return-admin/return-cuttingtool-admin/complete-cuttingtool/complete-cuttingtool.component';
import { PaddingCuttingtoolComponent } from './return/return-admin/return-cuttingtool-admin/padding-cuttingtool/padding-cuttingtool.component';

import { ReturnGrindingAdminComponent } from './return/return-admin/return-grinding-admin/return-grinding-admin.component';
import { DetailGrindingComponent } from './return/return-admin/return-grinding-admin/detail-grinding/detail-grinding.component';
import { CompleteGrindingComponent } from './return/return-admin/return-grinding-admin/complete-grinding/complete-grinding.component';
import { PaddingGrindingComponent } from './return/return-admin/return-grinding-admin/padding-grinding/padding-grinding.component';

import { ReturnOilAdminComponent } from './return/return-admin/return-oil-admin/return-oil-admin.component';
import { DetailOilComponent } from './return/return-admin/return-oil-admin/detail-oil/detail-oil.component';
import { CompleteOilComponent } from './return/return-admin/return-oil-admin/complete-oil/complete-oil.component';
import { PaddingOilComponent } from './return/return-admin/return-oil-admin/padding-oil/padding-oil.component';

import { ReturnOtherAdminComponent } from './return/return-admin/return-other-admin/return-other-admin.component';
import { DetailOtherComponent } from './return/return-admin/return-other-admin/detail-other/detail-other.component';
import { CompleteOtherComponent } from './return/return-admin/return-other-admin/complete-other/complete-other.component';
import { PaddingOtherComponent } from './return/return-admin/return-other-admin/padding-other/padding-other.component';

import { ReturnSetupAdminComponent } from './return/return-admin/return-setup-admin/return-setup-admin.component';
import { DetailSetupComponent } from './return/return-admin/return-setup-admin/detail-setup/detail-setup.component';
import { CompleteSetupComponent } from './return/return-admin/return-setup-admin/complete-setup/complete-setup.component';
import { PaddingSetupComponent } from './return/return-admin/return-setup-admin/padding-setup/padding-setup.component';

@NgModule({
  imports: [
    RouterModule.forChild([ // ใช้ RouterModule เพื่อสร้าง routing สำหรับ child module
      {
        path: 'request', // เส้นทางสำหรับ RequestComponent
        component: RequestComponent // กำหนดให้เส้นทางนี้แสดง RequestComponent
      },
      {
        path: 'cart', // เส้นทางสำหรับ CartComponent
        component: CartComponent // กำหนดให้เส้นทางนี้แสดง CartComponent
      },
      {
        path: 'list-request', // เส้นทางสำหรับ ListRequestComponent
        component: ListRequestComponent // กำหนดให้เส้นทางนี้แสดง ListRequestComponent
      },
      {
        path: 'receive', // เส้นทางสำหรับ ReceiveComponent
        component: ReceiveComponent // กำหนดให้เส้นทางนี้แสดง ReceiveComponent
      },

      {
        path: 'detail-request/:Doc_no/:Local/:source', // เส้นทางสำหรับ DetailRequestComponent โดยมีพารามิเตอร์
        component: DetailRequestComponent // กำหนดให้เส้นทางนี้แสดง DetailRequestComponent
      },
      {
        path: 'history', // เส้นทางสำหรับ HistoryComponent
        component: HistoryComponent // กำหนดให้เส้นทางนี้แสดง HistoryComponent
      },
      {
        path: 'summary/:Doc_no/:Local/:source', // เส้นทางสำหรับ DetailRequestComponent โดยมีพารามิเตอร์
        component: SummaryComponent // กำหนดให้เส้นทางนี้แสดง DetailRequestComponent
      },
      {
        path: 'return',
        component : ReturnComponent
      },
      {
        path: 'return-admin',
        component: ReturnAdminComponent
      }, // เส้นทางสำหรับแอดมิน

      {
        path: 'return-user/:id',
        component: ReturnUserComponent
      },   // เส้นทางสำหรับผู้ใช้ทั่วไป
      { path: 'request-choose',
      component: RequestChooseComponent
      },
      { path: 'request-oil',
      component: RequestOilComponent
      },
      { path: 'request-grinding',
      component: RequestGrindingComponent
      },
      { path: 'request-setup',
      component: RequestSetupComponent
      },
      { path: 'request-cleaning',
      component: RequestCleaningComponent
      },
      { path: 'request-other',
      component: RequestOtherComponent
      },
      { path: 'dashboard',
      component: DashboardComponent
      },
      { path: 'choose-master',
      component: ChooseMasterComponent
      },

      { path: 'add-cuttingtool',
      component: AddCuttingtoolComponent
      },
      { path: 'cutting-tool-add-master',
      component: CuttingToolAddMasterComponent
      },
      { path: 'cutting-tool-add-excel',
      component: CuttingToolAddExcelComponent
      },
      { path: 'cutting-tool-update',
      component: CuttingToolUpdateComponent
      },

      { path: 'add-oil',
      component: AddOilComponent
      },
      { path: 'oil-add-master',
      component: OilAddMasterComponent
      },
      { path: 'oil-add-excel',
      component: OilAddExcelComponent
      },
      { path: 'oil-update',
      component: OilUpdateComponent
      },

      { path: 'add-grinding',
      component: AddGrindingComponent
      },
      { path: 'grinding-add-master',
      component: GrindingAddMasterComponent
      },
      { path: 'grinding-add-excel',
      component: GrindingAddExcelComponent
      },
      { path: 'grinding-update',
      component: GrindingUpdateComponent
      },

      { path: 'add-cleaning',
      component: AddCleaningComponent
      },
      { path: 'cleaning-add-master',
      component: CleaningAddMasterComponent
      },
      { path: 'cleaning-add-excel',
      component: CleaningAddExcelComponent
      },
      { path: 'cleaning-update',
      component: CleaningUpdateComponent
      },

      { path: 'add-other',
      component: AddOtherComponent
      },
      { path: 'other-add-master',
      component: OtherAddMasterComponent
      },
      { path: 'other-add-excel',
      component: OtherAddExcelComponent
      },
      { path: 'other-update',
      component: OtherUpdateComponent
      },

      { path: 'add-set-up',
      component: AddSetUpComponent
      },
      { path:'set-up-add-master',
      component: SetUpAddMasterComponent
      },
      { path:'set-up-add-excel',
      component: SetUpAddExcelComponent
      },
      { path:'set-up-update',
      component: SetUpUpdateComponent
      },

      { path:'cart-oil',
      component: CartOilComponent
      },
      { path:'list-request-oil',
      component: ListRequestOilComponent
      },
      { path:'receive-oil',
      component: ReceiveOilComponent
      },

      { path:'history-oil',
      component: HistoryOilComponent
      },
      { path:'detail-request-oil/:id',
      component: DetailRequestOilComponent
      },
      { path:'summary-oil/:id',
      component: SummaryOilComponent
      },

      { path:'cart-grinding',
      component: CartGrindingComponent
      },
      { path:'list-request-grinding',
      component: ListRequestGrindingComponent
      },
      { path:'receive-grinding',
      component: ReceiveGrindingComponent
      },

      { path:'history-grinding',
      component: HistoryGrindingComponent
      },
      { path:'detail-request-grinding/:id',
      component: DetailRequestGrindingComponent
      },
      { path:'summary-grinding/:id',
      component: SummaryGrindingComponent
      },

      { path:'cart-setup',
      component: CartSetupComponent
      },
      { path:'list-request-setup',
      component: ListRequestSetupComponent
      },
      { path:'receive-setup', // เส้นทางสำหรับ Receive Detail
      component: ReceiveSetupComponent
      },

      { path:'history-setup',
      component: HistorySetupComponent
      },
      { path: 'detail-request-setup/:id',
      component: DetailRequestSetupComponent
      }, // เส้นทางสำหรับ Request Setup
      { path:'summary-setup/:id',
      component: SummarySetupComponent
      },

      { path:'cart-cleaning',
      component: CartCleaningComponent
      },
      { path:'list-request-cleaning',
      component: ListRequestCleaningComponent
      },
      { path:'receive-cleaning',
      component: ReceiveCleaningComponent
      },

      { path:'history-cleaning',
      component: HistoryCleaningComponent
      },
      { path:'detail-request-cleaning/:id',
      component: DetailRequestCleaningComponent
      },
      { path:'summary-cleaning/:id',
      component: SummaryCleaningComponent
      },

      { path:'cart-other',
      component: CartOtherComponent
      },
      { path:'list-request-other',
      component: ListRequestOtherComponent
      },
      { path:'receive-other',
      component: ReceiveOtherComponent
      },
      { path:'history-other',
      component: HistoryOtherComponent
      },
      { path:'detail-request-other/:id',
      component: DetailRequestOtherComponent
      },
      { path:'summary-other/:id',
      component: SummaryOtherComponent
      },

      { path: 'return-user',
      component: ReturnUserComponent
      },

      { path: 'return-cleaning-user',
      component: ReturnCleaningUserComponent
      },
      { path: 'list-return-cleaning',
      component: ListReturnCleaningComponent
      },
      { path: 'detail-return-cleaning',
      component: DetailReturnCleaningComponent
      },

      { path: 'return-cuttingtool-user/:Doc_no/:Local',
      component: ReturnCuttingtoolUserComponent
      },
      { path: 'list-return-cuttingtool',
      component: ListReturnCuttingtoolComponent
      },
      { path: 'detail-return-cuttingtool',
      component: DetailReturnCuttingtoolComponent
      },

      { path: 'return-grinding-user',
      component: ReturnGrindingUserComponent
      },
      { path: 'list-return-grinding',
      component: ListReturnGrindingComponent
      },
      { path: 'detail-return-grinding',
      component: DetailReturnGrindingComponent
      },

      { path: 'return-oil-user',
      component: ReturnOilUserComponent
      },
      { path: 'list-return-oil',
      component: ListReturnOilComponent
      },
      { path: 'detail-return-oil',
      component: DetailReturnOilComponent
      },

      { path: 'return-other-user',
      component: ReturnOtherUserComponent
      },
      { path: 'list-return-other',
      component: ListReturnOtherComponent
      },
      { path: 'detail-return-other',
      component: DetailReturnOtherComponent
      },

      { path:'return-setup-user',
      component: ReturnSetupUserComponent
      },
      { path: 'list-return-setup',
      component: ListReturnSetupComponent
      },
      { path: 'detail-return-setup',
      component: DetailReturnSetupComponent
      },

      { path: 'return-cleaning-admin',
      component: ReturnCleaningAdminComponent
      },
      { path: 'return-cuttingtool-admin',
      component: ReturnCuttingtoolAdminComponent
      },
      { path: 'return-grinding-admin',
      component: ReturnGrindingAdminComponent
      },
      { path: 'return-oil-admin',
      component: ReturnOilAdminComponent
      },
      { path: 'return-other-admin',
      component: ReturnOtherAdminComponent
      },
      { path:'return-setup-admin',
      component: ReturnSetupAdminComponent
      },
      { path:'detail-cuttingtool',
      component: DetailCuttingtoolComponent
      },
      { path:'complete-cuttingtool',
      component: CompleteCuttingtoolComponent
      },
      { path:'padding-cuttingtool',
      component: PaddingCuttingtoolComponent
      },
      { path:'detail-oil',
      component: DetailOilComponent
      },
      { path:'complete-oil',
      component: CompleteOilComponent
      },
      { path:'padding-oil',
      component: PaddingOilComponent
      },
      { path:'detail-grinding',
      component: DetailGrindingComponent
      },
      { path:'complete-grinding',
      component: CompleteGrindingComponent
      },
      { path:'padding-grinding',
      component: PaddingGrindingComponent
      },
      { path:'detail-cleaning',
      component: DetailCleaningComponent
      },
      { path:'complete-cleaning',
      component: CompleteCleaningComponent
      },
      { path:'padding-cleaning',
      component: PaddingCleaningComponent
      },
      { path:'detail-other',
      component: DetailOtherComponent
      },
      { path:'complete-other',
      component: CompleteOtherComponent
      },
      { path:'padding-other',
      component: PaddingOtherComponent
      },
      { path:'detail-setup',
      component: DetailSetupComponent
      },
      { path:'complete-setup',
      component: CompleteSetupComponent
      },
      { path:'padding-setup',
      component: PaddingSetupComponent
      },
      { path:'list-choose-admin',
      component: ListChooseAdminComponent
      },
      { path:'history-choose-admin',
      component: HistoryChooseAdminComponent
      },
    ])
  ],
  exports: [RouterModule, RouterLink, RouterOutlet] // ส่งออก RouterModule, RouterLink, RouterOutlet
})
export class PagesRoutingModule { } // สร้างคลาส PagesRoutingModule
