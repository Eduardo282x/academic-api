import { IsNumber } from "class-validator";

export class DtoActivities{
    studentId: number;
    activityId: number;
}

export class DtoActivitiesValidate{
    @IsNumber()
    studentId: number;
    @IsNumber()
    activityId: number;
}