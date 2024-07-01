import { IsNumber, IsBoolean  } from "class-validator";

export class Attendance{
    @IsNumber()
    studentId: number;
    @IsBoolean()
    assistent: boolean;
}

export interface SaveAttendance {
    studentId: number;
    subjectsId: number
    date: Date;
    attended: boolean
}