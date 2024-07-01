import { IsNumber, IsString } from "class-validator";

export class DtoSubjects {
    subjectId: number;
    subjectName: string;
    subjectDescription: string;
    classroomId: number;
    classrooms: string;
}

export class BodyAddSubject {
    @IsString()
    subjectName: string;
    @IsNumber()
    classroomId: number;
}

export class BodyUpdateSubject {
    @IsNumber()
    subjectId: number;
    @IsNumber()
    classroomId: number;
    @IsString()
    subjectName: string;
    @IsString()
    subjectDescription: string;
}