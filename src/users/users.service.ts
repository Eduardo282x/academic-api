import { BadRequestException, Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { DtoUsers, QueryUsers } from 'src/dtos/users.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService){}

    async getUsers(): Promise<DtoUsers[]> {
        const users: Users[] = await this.prisma.users.findMany({
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
        });

        return usersParse;
    }

    async getTeachers(): Promise<DtoUsers[]> {
        const users: Users[] = await this.prisma.users.findMany({
            where: {
                rolId: 2
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
        });

        return usersParse;
    }
    async getStudents(rolId: QueryUsers): Promise<DtoUsers[]> {
        console.log(rolId);
        
        const users: Users[] = await this.prisma.users.findMany({
            where: {
                rolId: 3
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
        });

        return usersParse;
    }
}
