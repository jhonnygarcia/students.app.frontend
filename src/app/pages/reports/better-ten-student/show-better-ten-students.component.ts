import { Component, OnInit } from '@angular/core';
import { environment } from '@environments/environment';

import { map, Observable } from 'rxjs';

import { BetterTenStudentsDto } from '../models/better-ten-students.dto';
import { TeacherDto } from '../models/teacher.dto';
import { KeysCacheReport, ReportsServices } from '../reports.services';

@Component({
  selector: 'app-show-better-ten-students',
  templateUrl: './show-better-ten-students.component.html'
})
export class ShowBetterTenStudentsComponent implements OnInit {
  teachers$!: Observable<TeacherDto[]>;
  result$!: Observable<BetterTenStudentsDto>;
  selectedTeacher?: TeacherDto;
  keySetTimeOut: any;
  constructor(private reportSrv: ReportsServices) { }

  ngOnInit(): void {
    this.teachers$ = this.reportSrv.getTeachers()
      .pipe(map(res => res.data));
  }
  load(click: boolean): void {
    var value = this.selectedTeacher;
    if (click && !value) {
      alert("Seleccione un profesor");
      return;
    }
    if (value) {
      this.result$ = this.reportSrv.getBetterTenStudentsByTeacherId(value.id);
    }

    this.keySetTimeOut = setTimeout(() => {
      if (this.selectedTeacher) {
        localStorage.removeItem(KeysCacheReport.KEY_GET_BETTER_TEN_STUDENTS);
        this.load(false);
      }
    }, 1000 * 60 * environment.timeCacheInMinute);
  }
}
