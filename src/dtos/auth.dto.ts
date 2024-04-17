import { DtoBaseResponse } from "./base-response.dto";

export class DtoLogin extends DtoBaseResponse{
    token: string;
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
}