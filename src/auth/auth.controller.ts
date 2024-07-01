import { Controller, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BodyLogin, BodyRegister, DtoLogin } from 'src/dtos/auth.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('/login')
    async postLogin(@Body() bodyLogin: BodyLogin): Promise<DtoLogin> {
        return await this.authService.login(bodyLogin);
    }

    @Post('/register')
    async postRegister(@Body() bodyRegister: BodyRegister): Promise<DtoBaseResponse> {
        return await this.authService.register(bodyRegister);
    }
}
