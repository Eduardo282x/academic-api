import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { DtoUsers } from 'src/dtos/users.dto';

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
    async getStudents(@Query() rolId): Promise<DtoUsers[]> {
        return await this.usersServices.getStudents(rolId);
    }
}
