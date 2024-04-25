import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClassroomsService } from './classrooms.service';
import { classrooms } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { DtoAddClassrooms, DtoPutClassrooms } from 'src/dtos/classrooms.dto';

@Controller('classrooms')
export class ClassroomsController {

    constructor(private classroomsService: ClassroomsService){}

    @Get()
    async getClassrooms(): Promise<classrooms[]>{
        return await this.classroomsService.getClassrooms();
    }

    @Post()
    async addClassrooms(@Body() classroom: DtoAddClassrooms): Promise<DtoBaseResponse>{
        return await this.classroomsService.addClassrooms(classroom);
    }

    @Put()
    async putClassrooms(@Body() classroom: DtoPutClassrooms): Promise<DtoBaseResponse>{
        return await this.classroomsService.putClassrooms(classroom);
    }

    @Delete('/:id')
    async deleteClassrooms(@Param('id') id: string): Promise<DtoBaseResponse>{
        return await this.classroomsService.deleteClassrooms(id);
    }

}
