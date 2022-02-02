export interface BetterFiveStudentsDto {
    SubjectId: number;
    SubjectName: string;
    Semesters: SemesterBetterFiveDto[];
}
export interface SemesterBetterFiveDto {
    Semester: string;
    Students: QualificationBetterFiveDto[];
}
export interface QualificationBetterFiveDto {
    Id: number;
    Name: string;
    LastName: string;
    Score: number;
}