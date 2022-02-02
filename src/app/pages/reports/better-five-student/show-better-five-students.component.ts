import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { BetterFiveStudentsDto } from '../models/better-five-students.dto';
import { ReportsServices } from '../reports.services';

@Component({
  selector: 'app-show-better-five-students',
  templateUrl: './show-better-five-students.component.html'
})
export class ShowBetterFiveStudentsComponent implements OnInit {

  subjects$!: Observable<string[]>;
  result$!: Observable<BetterFiveStudentsDto>;
  selectedSubject?: string;
  constructor(private reportSrv: ReportsServices) { }

  ngOnInit(): void {
    this.subjects$ = this.reportSrv.getSubjects()
    .pipe(map(res => {
      const values = res.data.map(d => d.name);
      let unique = [...new Set(values)];
      return unique;
    }));
  }
  load() {
    var value = this.selectedSubject;
    if (!value) {
      alert("Seleccione una asignatura");
      return;
    }
    this.result$ = this.reportSrv.getBetterFiveStudentsBySubjectId(value);
  }
}
