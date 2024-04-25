import { IsNumber, IsString } from "class-validator";

export class DtoUsers {
    id: number;
    name: string;
    lastname: string;
    username: string;
    password: string;
    email: string;
    age: string;
    rolText: string;
}

export class DtoStudents {
    userId: number;
    name: string;
    lastname: string;
    username: string;
    email: string;
    age: string;
    classroomsId: number;
    classrooms: string;
}
export class DtoAddStudents {
    @IsString()
    name: string;
    @IsString()
    lastname: string;
    @IsString()
    username: string;
    @IsString()
    email: string;
    @IsNumber()
    age: number;
    @IsString()
    classroomId: string;
}
export class DtoPuStudents {
    @IsNumber()
    userId: number;
    @IsString()
    name: string;
    @IsString()
    lastname: string;
    @IsString()
    username: string;
    @IsString()
    email: string;
    @IsNumber()
    age: number;
    @IsString()
    classroomId: string;
}

export class QueryUsers {
    rolId: number;
}