import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable, of, tap } from "rxjs";

import { environment } from '@environments/environment';
import { BetterFiveStudentsDto } from "./models/better-five-students.dto";
import { BetterTenStudentsDto } from "./models/better-ten-students.dto";
import { PagedListResDto } from "src/app/models/page-list-res.dto";
import { TeacherDto } from "./models/teacher.dto";
import { SubjectDto } from "./models/subject.dto";


export enum KeysCacheReport {
  KEY_GET_BETTER_FIVE_STUDENTS = 'key_get_better_five_students',
  KEY_GET_BETTER_TEN_STUDENTS = 'key_get_better_ten_students'
}

@Injectable({
  providedIn: 'root',
})
export class ReportsServices {

  constructor(private http: HttpClient) { }
  getTeachers(): Observable<PagedListResDto<TeacherDto>> {
    return this.http.get<PagedListResDto<TeacherDto>>(`${environment.serverUri}/api/v1/teachers`);
  }
  getSubjects(): Observable<PagedListResDto<SubjectDto>> {
    return this.http.get<PagedListResDto<SubjectDto>>(`${environment.serverUri}/api/v1/subjects`);
  }
  getBetterFiveStudentsBySubjectId(subjectName: string): Observable<BetterFiveStudentsDto> {
    const key = `${KeysCacheReport.KEY_GET_BETTER_FIVE_STUDENTS}-${subjectName}`;
    var cache = localStorage.getItem(key);
    if (cache) {
      try {
        const dataCache = JSON.parse(cache) as BetterFiveStudentsDto;
        return of(dataCache);
      }
      catch (e) {
        console.log('Los datos en cache han sido corrompidos');
      }
    }
    return this.http.get<BetterFiveStudentsDto>(`${environment.serverUri}/api/v1/better-five-by-subject/${subjectName}`)
      .pipe(tap(data => {
        localStorage.setItem(key, JSON.stringify(data));
      }));
  }
  getBetterTenStudentsByTeacherId(teacherId: number): Observable<BetterTenStudentsDto> {
    const key = `${KeysCacheReport.KEY_GET_BETTER_TEN_STUDENTS}-${teacherId}`;
    var cache = localStorage.getItem(key);
    if (cache) {
      try {
        const dataCache = JSON.parse(cache) as BetterTenStudentsDto;
        return of(dataCache);
      }
      catch (e) {
        console.log('Los datos en cache han sido corrompidos');
      }
    }
    return this.http.get<BetterTenStudentsDto>(`${environment.serverUri}/api/v1/better-ten-by-teacher/${teacherId}`)
      .pipe(tap(data => {
        localStorage.setItem(key, JSON.stringify(data));
      }));;
  }
}
