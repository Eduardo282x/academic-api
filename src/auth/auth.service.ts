import { Injectable } from '@nestjs/common';
import { BodyLogin, BodyRegister, DtoLogin } from 'src/dtos/auth.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService){}

    async login(bodyLogin: BodyLogin): Promise<DtoLogin> {
        console.log(bodyLogin); 
        const getRoles = await this.prismaService.roles.findMany();
        console.log(getRoles);
        

        
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
