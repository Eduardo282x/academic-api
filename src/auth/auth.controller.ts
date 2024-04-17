import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BodyLogin, BodyRegister, DtoLogin } from 'src/dtos/auth.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('/login')
    async postLogin(@Body() bodyLogin: BodyLogin): Promise<DtoLogin> {
        return await this.authService.login(bodyLogin);
    }

    @Post('/register')
    postRegister(@Body() bodyRegister: BodyRegister): DtoBaseResponse {
        return this.authService.register(bodyRegister);
    }
}
