import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card'; // เพิ่มการนำเข้า CardModule
import { ReturnUserRoutingModule } from './return-user-routing.module';
import { ReturnCuttingtoolUserComponent } from './return-cuttingtool-user/return-cuttingtool-user.component';
import { ReturnOilUserComponent } from './return-oil-user/return-oil-user.component';
import { ReturnGrindingUserComponent } from './return-grinding-user/return-grinding-user.component';
import { ReturnCleaningUserComponent } from './return-cleaning-user/return-cleaning-user.component';
import { ReturnSetupUserComponent } from './return-setup-user/return-setup-user.component';
import { ReturnOtherUserComponent } from './return-other-user/return-other-user.component';

import { ListReturnCuttingtoolComponent } from './list-return-cuttingtool/list-return-cuttingtool.component';
import { ListReturnOilComponent } from './list-return-oil/list-return-oil.component';
import { ListReturnGrindingComponent } from './list-return-grinding/list-return-grinding.component';
import { ListReturnSetupComponent } from './list-return-setup/list-return-setup.component';
import { ListReturnCleaningComponent } from './list-return-cleaning/list-return-cleaning.component';
import { ListReturnOtherComponent } from './list-return-other/list-return-other.component';
import { DetailReturnCuttingtoolComponent } from './detail-return-cuttingtool/detail-return-cuttingtool.component';
import { DetailReturnOilComponent } from './detail-return-oil/detail-return-oil.component';
import { DetailReturnGrindingComponent } from './detail-return-grinding/detail-return-grinding.component';
import { DetailReturnSetupComponent } from './detail-return-setup/detail-return-setup.component';
import { DetailReturnCleaningComponent } from './detail-return-cleaning/detail-return-cleaning.component';
import { DetailReturnOtherComponent } from './detail-return-other/detail-return-other.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    ReturnCuttingtoolUserComponent,
    ReturnOilUserComponent,
    ReturnGrindingUserComponent,
    ReturnCleaningUserComponent,
    ReturnSetupUserComponent,
    ReturnOtherUserComponent,

    ListReturnCuttingtoolComponent,
    ListReturnOilComponent,
    ListReturnGrindingComponent,
    ListReturnSetupComponent,
    ListReturnCleaningComponent,
    ListReturnOtherComponent,

    DetailReturnCuttingtoolComponent,
    DetailReturnOilComponent,
    DetailReturnGrindingComponent,
    DetailReturnSetupComponent,
    DetailReturnCleaningComponent,
    DetailReturnOtherComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    ReturnUserRoutingModule,
    ButtonModule,
    CardModule
  ],
  providers: [DatePipe],
})
export class ReturnUserModule {}
