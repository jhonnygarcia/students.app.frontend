import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";

import { environment } from '@environments/environment'
import { BetterFiveStudentsDto } from "./models/better-five-students.dto";
import { BetterTenStudentsDto } from "./models/better-ten-students.dto";
import { PagedListResDto } from "src/app/models/page-list-res.dto";
import { TeacherDto } from "./models/teacher.dto";
import { SubjectDto } from "./models/subject.dto";

@Injectable({
  providedIn: 'root',
})
export class ReportsServices {
  constructor(private http: HttpClient) { }
  getTeachers(): Observable<PagedListResDto<TeacherDto>> {
    return this.http.get<PagedListResDto<TeacherDto>>(`${environment.serverUri}/api/v1/teachers`, {
      headers: { 'X-Api-Key': environment.apiKey }
    });
  }
  getSubjects(): Observable<PagedListResDto<SubjectDto>> {
    return this.http.get<PagedListResDto<SubjectDto>>(`${environment.serverUri}/api/v1/subjects`, {
      headers: { 'X-Api-Key': environment.apiKey }
    });
  }
  getBetterFiveStudentsBySubjectId(subjectName: string): Observable<BetterFiveStudentsDto> {
    return this.http.get<BetterFiveStudentsDto>(`${environment.serverUri}/api/v1/better-five-by-subject/${subjectName}`, {
      headers: { 'X-Api-Key': environment.apiKey }
    });
  }
  getBetterTenStudentsByTeacherId(teacherId: number): Observable<BetterTenStudentsDto> {
    return this.http.get<BetterTenStudentsDto>(`${environment.serverUri}/api/v1/better-ten-by-teacher/${teacherId}`, {
      headers: { 'X-Api-Key': environment.apiKey }
    });
  }
}
