import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ShowBetterFiveStudentsComponent } from './better-five-student/show-better-five-students.component';
import { ShowBetterTenStudentsComponent } from './better-ten-student/show-better-ten-students.component';
import { FormsModule } from '@angular/forms';
import { ReportsServices } from './reports.services';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ShowBetterFiveStudentsComponent, ShowBetterTenStudentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReportsRoutingModule,
    HttpClientModule
  ],
  providers: [ReportsServices],
  exports: [ShowBetterFiveStudentsComponent, ShowBetterTenStudentsComponent]
})
export class ReportsModule { }
