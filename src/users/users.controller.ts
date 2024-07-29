import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { DtoAddStudents, DtoAddUser, DtoAddUsers, DtoPutStudents, DtoPutTeachers, DtoStudents, DtoUpdateUsers, DtoUsers } from 'src/dtos/users.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { Roles } from '@prisma/client';

@Controller('users')
export class UsersController {

    constructor(private usersServices: UsersService){}

    @Get()
    async getUsers(): Promise<DtoUsers[]> {
        return await this.usersServices.getUsers();
    }
    @Post()
    async addUsers(@Body() newUser: DtoAddUsers): Promise<DtoBaseResponse> {
        return await this.usersServices.addUsers(newUser);
    }
    @Put()
    async updateUsers(@Body() updateUser: DtoUpdateUsers): Promise<DtoBaseResponse> {
        return await this.usersServices.putUsers(updateUser);
    }
    @Delete('/:id')
    async deleteUsers(@Param('id') id: string): Promise<DtoBaseResponse> {
        return await this.usersServices.deleteUsers(id);
    }

    @Get('/roles')
    async getRoles(): Promise<Roles[]> {
        return await this.usersServices.getRoles();
    }


    @Get('/teachers')
    async getTeachers(): Promise<DtoUsers[]> {
        return await this.usersServices.getTeachers();
    }
    @Post('/teachers')
    async addTeachers(@Body() teacher: DtoAddUser): Promise<DtoBaseResponse> {
        return await this.usersServices.addTeacher(teacher);
    }
    @Put('/teachers')
    async updateTeachers(@Body() bodyTeacher: DtoPutTeachers): Promise<DtoBaseResponse> {
        return await this.usersServices.updateTeacher(bodyTeacher);
    }
    @Delete('/teachers/:id')
    async deleteTeachers(@Param('id') id: string): Promise<DtoBaseResponse> {
        return await this.usersServices.deleteTeacher(id);
    }

    @Get('/students')
    async getStudents(): Promise<DtoStudents[]> {
        return await this.usersServices.getStudents();
    }

    @Post('/students')
    async addStudents(@Body() bodyStudent: DtoAddStudents): Promise<DtoBaseResponse> {
        return await this.usersServices.addStudents(bodyStudent);
    }
    @Put('/students')
    async updateStudents(@Body() bodyStudent: DtoPutStudents): Promise<DtoBaseResponse> {
        return await this.usersServices.updateStudents(bodyStudent);
    }
    @Delete('/students/:id')
    async deleteStudents(@Param('id') id: string): Promise<DtoBaseResponse> {
        return await this.usersServices.deleteStudents(id);
    }
}
