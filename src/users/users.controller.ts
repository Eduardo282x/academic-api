import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { DtoUsers } from 'src/dtos/users.dto';

@Controller('users')
export class UsersController {

    constructor(private usersServices: UsersService){}

    @Get()
    async getAllUsers(): Promise<DtoUsers[]> {
        return await this.usersServices.getAllUsers();
    }
}
