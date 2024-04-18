import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { BodyLogin, BodyRegister, DtoLogin } from 'src/dtos/auth.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) { }

    async login(bodyLogin: BodyLogin): Promise<DtoLogin> {
        const findUser: Users = await this.prisma.users.findFirst({
            where: {
                username: bodyLogin.username,
                password: bodyLogin.password
            },
            include: {
                rolText: true
            },
        });

        if (!findUser) {
            throw new BadRequestException('Usuario no encontrado')
        }
        const keyUser = Object.keys(findUser).filter(bo => bo !== 'password');
        const userParse: any = {};

        keyUser.map(obt => {
            userParse[obt] = findUser[obt]
        });
        userParse.rolText = findUser['rolText'].rol;

        const response: DtoLogin = {
            success: true,
            message: `Bienvenido ${userParse.name}`,
            userData: userParse,
            statusCode: 200
        }
        return response;
    }

    async register(bodyRegister: BodyRegister): Promise<DtoBaseResponse> {
        console.log(bodyRegister);
        const createUser = await this.prisma.users.create({
            data: bodyRegister
        });
        if (!createUser) {
            throw new BadRequestException('Error al intentar crear el usuario')
        }
        const response: DtoBaseResponse = {
            success: true,
            message: 'Usuario registrado',
            statusCode: 200
        }
        return response;
    }
}
