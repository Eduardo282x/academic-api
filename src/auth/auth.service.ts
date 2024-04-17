import { Injectable } from '@nestjs/common';
import { BodyLogin, BodyRegister, DtoLogin } from 'src/dtos/auth.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';

@Injectable()
export class AuthService {

    login(bodyLogin: BodyLogin): DtoLogin {
        console.log(bodyLogin);

        
        
        const response: DtoLogin = {
            success: true,
            message: 'Bienvenido',
            token: '',
            statusCode: 200
        }
        return response;
    }

    register(bodyRegister: BodyRegister): DtoBaseResponse {
        console.log(bodyRegister);
        
        const response: DtoBaseResponse = {
            success: true,
            message: 'Bienvenido',
            statusCode: 200
        }
        
        return response;
    }
}
