import { Controller, Get, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { DtoUsers, QueryUsers } from 'src/dtos/users.dto';

@Controller('users')
export class UsersController {

    constructor(private usersServices: UsersService){}

    @Get()
    async getAllUsers(@Query() rolId): Promise<DtoUsers[]> {
        return await this.usersServices.getAllUsers(rolId);
    }
}
