import { Extensions } from "@prisma/client/runtime/library";
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
export class DtoAddUsers {
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
    identify: string;
    @IsNumber()
    rolId: number;
}

export class DtoUpdateUsers extends DtoAddUsers {
    @IsNumber()
    id: number;
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
export class DtoAddUser {
    @IsString()
    name: string;
    @IsString()
    lastname: string;
    @IsString()
    username: string;
    @IsString()
    identify: string;
    @IsString()
    email: string;
    @IsNumber()
    age: number;
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
    @IsString()
    identify: string;
    @IsNumber()
    age: number;
    @IsString()
    classroomId: string;
}

export class DtoBaseUsers {
    @IsString()
    name: string;
    @IsString()
    lastname: string;
    @IsString()
    username: string;
    @IsString()
    email: string;
    @IsString()
    identify: string;
    @IsNumber()
    age: number;
}
export class DtoPutTeachers extends DtoBaseUsers {
    @IsNumber()
    id: number;
}
export class DtoPutStudents extends DtoBaseUsers{
    @IsNumber()
    userId: number;
    @IsString()
    classroomId: string;
}