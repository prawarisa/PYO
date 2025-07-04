import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReturnAdminRoutingModule } from './return-admin-routing.module';

import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms'; // เพิ่ม FormsModule
import { RouterModule } from '@angular/router';

// Component Imports

import { ReturnCleaningAdminComponent } from './return-cleaning-admin/return-cleaning-admin.component';
import { DetailCleaningComponent } from './return-cleaning-admin/detail-cleaning/detail-cleaning.component';
import { CompleteCleaningComponent } from './return-cleaning-admin/complete-cleaning/complete-cleaning.component';
import { PaddingCleaningComponent } from './return-cleaning-admin/padding-cleaning/padding-cleaning.component';

import { ReturnCuttingtoolAdminComponent } from './return-cuttingtool-admin/return-cuttingtool-admin.component';
import { DetailCuttingtoolComponent } from './return-cuttingtool-admin/detail-cuttingtool/detail-cuttingtool.component';
import { CompleteCuttingtoolComponent } from './return-cuttingtool-admin/complete-cuttingtool/complete-cuttingtool.component';
import { PaddingCuttingtoolComponent } from './return-cuttingtool-admin/padding-cuttingtool/padding-cuttingtool.component';

import { ReturnOilAdminComponent } from './return-oil-admin/return-oil-admin.component';
import { DetailOilComponent } from './return-oil-admin/detail-oil/detail-oil.component';
import { CompleteOilComponent } from './return-oil-admin/complete-oil/complete-oil.component';
import { PaddingOilComponent } from './return-oil-admin/padding-oil/padding-oil.component';

import { ReturnGrindingAdminComponent } from './return-grinding-admin/return-grinding-admin.component';
import { DetailGrindingComponent } from './return-grinding-admin/detail-grinding/detail-grinding.component';
import { CompleteGrindingComponent } from './return-grinding-admin/complete-grinding/complete-grinding.component';
import { PaddingGrindingComponent } from './return-grinding-admin/padding-grinding/padding-grinding.component';

import { ReturnSetupAdminComponent } from './return-setup-admin/return-setup-admin.component';
import { DetailSetupComponent } from './return-setup-admin/detail-setup/detail-setup.component';
import { CompleteSetupComponent } from './return-setup-admin/complete-setup/complete-setup.component';
import { PaddingSetupComponent } from './return-setup-admin/padding-setup/padding-setup.component';

import { ReturnOtherAdminComponent } from './return-other-admin/return-other-admin.component';
import { DetailOtherComponent } from './return-other-admin/detail-other/detail-other.component';
import { CompleteOtherComponent } from './return-other-admin/complete-other/complete-other.component';
import { PaddingOtherComponent } from './return-other-admin/padding-other/padding-other.component';


@NgModule({
  declarations: [

    ReturnCleaningAdminComponent,
    DetailCleaningComponent,
    CompleteCleaningComponent,
    PaddingCleaningComponent,
    ReturnCuttingtoolAdminComponent,
    DetailCuttingtoolComponent,
    CompleteCuttingtoolComponent,
    PaddingCuttingtoolComponent,
    ReturnOilAdminComponent,
    DetailOilComponent,
    CompleteOilComponent,
    PaddingOilComponent ,
    ReturnGrindingAdminComponent ,
    DetailGrindingComponent,
    CompleteGrindingComponent,
    PaddingGrindingComponent,
    ReturnSetupAdminComponent,
    DetailSetupComponent ,
    CompleteSetupComponent,
    PaddingSetupComponent,
    ReturnOtherAdminComponent,
    DetailOtherComponent,
    CompleteOtherComponent,
    PaddingOtherComponent,
  ],
  imports: [
    CommonModule,
    ReturnAdminRoutingModule,
    ButtonModule,
    CalendarModule,
    CardModule,
    TableModule,
    FormsModule, // เพิ่ม FormsModule ที่นี่
    RouterModule
  ],
})
export class ReturnAdminModule {}
