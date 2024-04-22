import { BadRequestException, Injectable } from '@nestjs/common';
import { students, users } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { BodyStudents, DtoStudents, DtoUsers, QueryUsers } from 'src/dtos/users.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    async getUsers(): Promise<DtoUsers[]> {
        const users: users[] = await this.prisma.users.findMany({
            include: {
                roles: true
            }
        });

        if (!(users.length > 0)) {
            throw new BadRequestException('No se encontraron usuarios')
        };
        const usersParse: any[] = users;
        usersParse.map(us => {
            us.roles = us.roles.rol
            delete us.password
        });
        return usersParse;
    }

    async getTeachers(): Promise<DtoUsers[]> {
        const users: users[] = await this.prisma.users.findMany({
            where: {
                rolId: 2
            },
            include: {
                roles: true
            }
        });

        if (!(users.length > 0)) {
            throw new BadRequestException('No se encontraron usuarios')
        };

        const usersParse: any[] = users;
        usersParse.map(us => {
            us.roles = us.roles.rol
            delete us.password
        });
        return usersParse;
    }

    async getStudents(rolId: QueryUsers): Promise<DtoStudents[]> {
        console.log(rolId);
        const getStudentsClassrooms: students[] = await this.prisma.students.findMany({
            include: {
                classrooms: true,
                users: true
            }
        })

        if (!(getStudentsClassrooms.length > 0)) {
            throw new BadRequestException('No se encontraron usuarios')
        };

        const studentsParse: any[] = getStudentsClassrooms;

        studentsParse.map(us => {
            us.classrooms = us.classrooms.grade;
            us.name = us.users.name;
            us.lastname = us.users.lastname;
            us.username = us.users.username;
            us.email = us.users.email;
            us.age = us.users.age;
            delete us.users
        });

        return studentsParse;
    }

    async addStudents(bodyStudent: BodyStudents): Promise<DtoBaseResponse>{
        const createStudent = await this.prisma.users.create({
            data: {
                name: bodyStudent.name,
                lastname: bodyStudent.lastname,
                username: bodyStudent.username,
                age: bodyStudent.age,
                password: bodyStudent.password,
                email: bodyStudent.email,
                rolId: 3
            }
        })

        if(createStudent){
            await this.prisma.students.create({
                data: {
                    userId: createStudent.id,
                    classroomId: bodyStudent.classroomsId
                }
            })
        } else {
            throw new BadRequestException('Ha ocurrido un error inesperado');
        }
        baseResponse.message = 'Se agrego correctamente.';
        return baseResponse;
    }
}
