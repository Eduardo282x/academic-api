import { BadRequestException, Injectable } from '@nestjs/common';
import { Students, Users } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoAddStudents, DtoAddUser, DtoPutStudents, DtoPutTeachers, DtoStudents, DtoUsers, QueryUsers } from 'src/dtos/users.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) { }

    async getUsers(): Promise<DtoUsers[]> {
        const users: Users[] = await this.prisma.users.findMany({
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
        const users: Users[] = await this.prisma.users.findMany({
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

    async addTeacher(bodyStudent: DtoAddUser): Promise<DtoBaseResponse>{
        const createTeacher = await this.prisma.users.create({
            data: {
                name: bodyStudent.name,
                lastname: bodyStudent.lastname,
                username: bodyStudent.username,
                age: String(bodyStudent.age),
                password: '123',
                email: bodyStudent.email,
                identify: bodyStudent.identify,
                rolId: 2
            }
        })

        baseResponse.message = 'Se agrego correctamente.';
        return baseResponse;
    }


    async getStudents(): Promise<DtoStudents[]> {
        const getStudentsClassrooms: Students[] = await this.prisma.students.findMany({
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

    async addStudents(bodyStudent: DtoAddStudents): Promise<DtoBaseResponse>{
        const createStudent = await this.prisma.users.create({
            data: {
                name: bodyStudent.name,
                lastname: bodyStudent.lastname,
                username: bodyStudent.username,
                age: String(bodyStudent.age),
                password: '123',
                email: bodyStudent.email,
                identify: bodyStudent.identify,
                rolId: 3
            }
        })

        if(createStudent){
            await this.prisma.students.create({
                data: {
                    userId: createStudent.id,
                    classroomId: Number(bodyStudent.classroomId)
                }
            })
        } else {
            throw new BadRequestException('Ha ocurrido un error inesperado');
        }
        baseResponse.message = 'Se agrego correctamente.';
        return baseResponse;
    }

    async updateTeacher(bodyStudent: DtoPutTeachers): Promise<DtoBaseResponse>{
        const updateStudent = await this.prisma.users.update({
            data: {
                name: bodyStudent.name,
                lastname: bodyStudent.lastname,
                username: bodyStudent.username,
                age: String(bodyStudent.age),
                email: bodyStudent.email,
                identify: bodyStudent.identify
            },
            where: {
                id: bodyStudent.id
            }
        });

        if(!updateStudent){
            throw new BadRequestException('Ha ocurrido un error.');
        }

        baseResponse.message = 'Se actualizo correctamente.';
        return baseResponse;
    }
    async updateStudents(bodyStudent: DtoPutStudents): Promise<DtoBaseResponse>{
        const updateStudent = await this.prisma.users.update({
            data: {
                name: bodyStudent.name,
                lastname: bodyStudent.lastname,
                username: bodyStudent.username,
                age: String(bodyStudent.age),
                email: bodyStudent.email,
            },
            where: {
                id: bodyStudent.userId
            }
        })

        if(updateStudent){
            const findStudent: Students = await this.prisma.students.findFirst({
                where: {
                    userId: bodyStudent.userId
                }
            })
            await this.prisma.students.update({
                data: {
                    classroomId: Number(bodyStudent.classroomId)
                }, 
                where: {
                    studentId: findStudent.studentId
                }
            })
        } else {
            throw new BadRequestException('Ha ocurrido un error inesperado');
        }
        baseResponse.message = 'Se actualizo correctamente.';
        return baseResponse;
    }

    async deleteTeacher(id: string): Promise<DtoBaseResponse>{
        const findStudent: Students = await this.prisma.students.findFirst({
            where: {
                userId: Number(id)
            }
        });

        await this.prisma.users.delete({
            where: {
                id: Number(id)
            }
        });

        baseResponse.message = 'Se elimino correctamente.';
        return baseResponse;
    }

    async deleteStudents(id: string): Promise<DtoBaseResponse>{
        const findStudent: Students = await this.prisma.students.findFirst({
            where: {
                userId: Number(id)
            }
        });
        
        await this.prisma.students.delete({
            where: {
                studentId: findStudent.studentId
            }
        })
        
        await this.prisma.users.delete({
            where: {
                id: Number(id)
            }
        });

        baseResponse.message = 'Se elimino correctamente.';
        return baseResponse;
    }
}
