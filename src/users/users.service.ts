import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { DtoUsers } from 'src/dtos/users.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService){}

    async getAllUsers(): Promise<DtoUsers[]> {
        const users: Users[] = await this.prisma.users.findMany({
            where: {
                OR: [
                    {
                        rolId: 2
                    },
                    {
                        rolId: 3
                    }
                ]
            },
            include: {
                rolText: true
            }
        });

        
        if (!(users.length > 0)) {
            throw new BadRequestException('No se encontraron usuarios')
        };

        const usersParse: any[] = users;
        
        usersParse.map(us => {
            us.rolText = us.rolText.rol
            delete us.password
        })
        return usersParse;
    }
}