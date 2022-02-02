export interface BetterTenStudentsDto {
    TeacherId: number;
    TeacherName: string;
    Subjects: SubjectBetterTenDto[];
}
export interface SubjectBetterTenDto {
    SubjectName: string;
    Semesters: SemesterBetterTenDto[];
}
export interface SemesterBetterTenDto {
    Semester: string;
    Students: QualificationBetterTenDto[];
}
export interface QualificationBetterTenDto {
    Id: number;
    Name: string;
    LastName: string;
    Score: number;
}