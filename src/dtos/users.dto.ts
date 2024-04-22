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
export class BodyStudents {
    @IsString()
    name: string;
    @IsString()
    lastname: string;
    @IsString()
    username: string;
    @IsString()
    email: string;
    @IsString()
    age: string;
    @IsString()
    password: string;
    @IsNumber()
    classroomsId: number;
}

export class QueryUsers {
    rolId: number;
}