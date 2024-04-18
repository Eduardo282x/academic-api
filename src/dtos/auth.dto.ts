import { DtoBaseResponse } from "./base-response.dto";
import { IsNumber, isString, IsString } from "class-validator";

export class DtoLogin extends DtoBaseResponse{
    userData: UserParse;
}
export class UserParse {
    id: number;
    name: string;
    lastname: string;
    username: string;
    email: string;
    age: string;
    rolId: number;
    rolText: string
}
export class BodyLogin {
    @IsString()
    username: string;
    @IsString()
    password: string;
}
export class BodyRegister {
    @IsString()
    name: string;
    @IsString()
    password: string;
    @IsString()
    lastname: string;
    @IsString()
    username: string;
    @IsString()
    email: string;
    @IsString()
    age: string;
    @IsNumber()
    rolId: number;
}