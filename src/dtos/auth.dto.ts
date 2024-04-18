import { DtoBaseResponse } from "./base-response.dto";

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
    username: string;
    password: string;
}
export class BodyRegister {
    name: string;
    password: string;
    lastname: string;
    username: string;
    email: string;
    age: string;
    rolId: number;
}