import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ShowBetterFiveStudentsComponent } from './better-five-student/show-better-five-students.component';
import { ShowBetterTenStudentsComponent } from './better-ten-student/show-better-ten-students.component';
import { FormsModule } from '@angular/forms';
import { ReportsServices } from './reports.services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuModule } from 'src/app/components/menu/menu.module';
import { ReportListComponent } from './report-list/report-list.component';
import { TokenInterceptor } from 'src/app/common/interceptors/token.interceptor';


@NgModule({
  declarations: [ShowBetterFiveStudentsComponent, ShowBetterTenStudentsComponent, ReportListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReportsRoutingModule,
    HttpClientModule,
    MenuModule
  ],
  providers: [ReportsServices, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  exports: [ShowBetterFiveStudentsComponent, ShowBetterTenStudentsComponent]
})
export class ReportsModule { }
