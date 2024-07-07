import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { DtoAddStudents, DtoAddUser, DtoPutStudents, DtoPutTeachers, DtoStudents, DtoUsers } from 'src/dtos/users.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';

@Controller('users')
export class UsersController {

    constructor(private usersServices: UsersService){}

    @Get()
    async getUsers(): Promise<DtoUsers[]> {
        return await this.usersServices.getUsers();
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
