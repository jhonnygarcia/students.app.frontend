import { Component, OnInit } from '@angular/core';

import { map, Observable } from 'rxjs';

import { BetterTenStudentsDto } from '../models/better-ten-students.dto';
import { TeacherDto } from '../models/teacher.dto';
import { ReportsServices } from '../reports.services';

@Component({
  selector: 'app-show-better-ten-students',
  templateUrl: './show-better-ten-students.component.html'
})
export class ShowBetterTenStudentsComponent implements OnInit {

  teachers$!: Observable<TeacherDto[]>;
  result$!: Observable<BetterTenStudentsDto>;
  selectedTeacher?: TeacherDto;
  constructor(private reportSrv: ReportsServices) { }

  ngOnInit(): void {
    this.teachers$ = this.reportSrv.getTeachers()
      .pipe(map(res => res.data));
  }
  load() {
    var value = this.selectedTeacher;
    if (!value?.id) {
      alert("Seleccione un profesor");
      return;
    }
    this.result$ = this.reportSrv.getBetterTenStudentsByTeacherId(value.id);
  }
}
