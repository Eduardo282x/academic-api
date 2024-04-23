import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { DtoSubjects } from 'src/dtos/subjects.dto';

@Controller('subjects')
export class SubjectsController {

    constructor(private subjectsService: SubjectsService) {
    }

    @Get()
    async getSubjects(): Promise<DtoSubjects[]>{
        return await this.subjectsService.getSubjects();
    }

    @Post()
    async addSubjects(@Body() bodySubjects: any): Promise<DtoBaseResponse>{
        return await this.subjectsService.addSubjects(bodySubjects);
    }

    @Put()
    async putSubjects(@Body() bodySubjects: any): Promise<DtoBaseResponse>{
        return await this.subjectsService.putSubjects(bodySubjects);
    }

    @Delete()
    async deleteSubjects(@Body() bodySubjects: any): Promise<DtoBaseResponse>{
        return await this.subjectsService.deleteSubjects(bodySubjects);
    }
}
