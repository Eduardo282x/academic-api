import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { BodyStudents, DtoStudents, DtoUsers } from 'src/dtos/users.dto';
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
    @Get('/students')
    async getStudents(@Query() rolId): Promise<DtoStudents[]> {
        return await this.usersServices.getStudents(rolId);
    }

    @Post('/students')
    async addStudents(@Body() bodyStudent: BodyStudents): Promise<DtoBaseResponse> {
        return await this.usersServices.addStudents(bodyStudent);
    }
}
