import { IsNumber } from "class-validator";

export class DtoGrades{
    @IsNumber()
    studentId: number;
    @IsNumber()
    activityId: number;
    @IsNumber()
    score: number;
}