import { Component, OnDestroy, OnInit } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable, of } from 'rxjs';
import { BetterFiveStudentsDto } from '../models/better-five-students.dto';
import { KeysCacheReport, ReportsServices } from '../reports.services';

@Component({
  selector: 'app-show-better-five-students',
  templateUrl: './show-better-five-students.component.html'
})
export class ShowBetterFiveStudentsComponent implements OnInit, OnDestroy {
  subjects$!: Observable<string[]>;
  result$!: Observable<BetterFiveStudentsDto>;
  selectedSubject?: string;
  keySetTimeOut: any;
  constructor(private reportSrv: ReportsServices) { }
  ngOnDestroy(): void {
    clearTimeout(this.keySetTimeOut);
  }

  ngOnInit(): void {
    this.subjects$ = this.reportSrv.getSubjects()
      .pipe(map(res => {
        const values = res.data.map(d => d.name);
        let unique = [...new Set(values)];
        return unique;
      }));
  }
  load(click: boolean): void {
    var value = this.selectedSubject;
    if (click && !value) {
      alert("Seleccione una asignatura");
      return;
    }
    if (value) {
      this.result$ = this.reportSrv.getBetterFiveStudentsBySubjectId(value);
    }

    this.keySetTimeOut = setTimeout(() => {
      if (this.selectedSubject) {
        localStorage.removeItem(KeysCacheReport.KEY_GET_BETTER_FIVE_STUDENTS);
        this.load(false);
      }
    }, 1000 * 60 * environment.timeCacheInMinute);
  }
}
