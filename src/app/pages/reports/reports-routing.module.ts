import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBetterFiveStudentsComponent } from './better-five-student/show-better-five-students.component';
import { ShowBetterTenStudentsComponent } from './better-ten-student/show-better-ten-students.component';

const routes: Routes = [
  {
    path: 'better-five-students',
    component: ShowBetterFiveStudentsComponent
  },
  {
    path: 'better-ten-students',
    component: ShowBetterTenStudentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
