import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // สำหรับ ngModel
import { ReturnRoutingModule } from './return-routing.module';
// PrimeNG Modules
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'; // ถ้าใช้ pButton


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReturnRoutingModule,
    FormsModule,
    CardModule,
    ButtonModule ,
  ]
})
export class ReturnModule { }
