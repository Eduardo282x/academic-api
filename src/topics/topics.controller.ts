import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Activities, Topics } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { DtoAddActivity, DtoAddTopics, DtoPutActivity, DtoPutTopics } from 'src/dtos/topics.dto';

@Controller('topics')
export class TopicsController {

    constructor(private topicsService: TopicsService){
    }

    @Get()
    async GetTopics(): Promise<Topics[]>{
        return await this.topicsService.getTopics();
    }
    @Get('/activity')
    async GetActivities(): Promise<Activities[]>{
        return await this.topicsService.getActivities();
    }
    @Post()
    async AddTopics(@Body() newTopics: DtoAddTopics): Promise<DtoBaseResponse>{
        return await this.topicsService.addTopics(newTopics);
    }
    @Post('/activity')
    async AddActivity(@Body() newActivity: DtoAddActivity): Promise<DtoBaseResponse>{
        return await this.topicsService.addActivity(newActivity);
    }
    @Put()
    async UpdateTopics(@Body() putTopics: DtoPutTopics): Promise<DtoBaseResponse>{
        return await this.topicsService.updateTopics(putTopics);
    }
    @Put('/activity')
    async UpdateActivity(@Body() putActivity: DtoPutActivity): Promise<DtoBaseResponse>{
        return await this.topicsService.updateActivity(putActivity);
    }
    @Delete('/:id')
    async DeleteTopics(@Param('id') id: string): Promise<DtoBaseResponse>{
        return await this.topicsService.deleteTopics(id);
    }
}
