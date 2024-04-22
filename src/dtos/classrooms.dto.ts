import { IsNumber, IsString } from "class-validator";

export class DtoClassrooms {
    @IsString()
    grade: string;
    @IsNumber()
    classroomId?: number;
} 
export class DtoAddClassrooms {
    @IsString()
    grade: string;
} 