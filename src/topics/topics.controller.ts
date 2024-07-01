import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Topics } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { DtoAddTopics, DtoPutTopics } from 'src/dtos/topics.dto';

@Controller('topics')
export class TopicsController {

    constructor(private topicsService: TopicsService){
    }

    @Get()
    async GetTopics(): Promise<Topics[]>{
        return await this.topicsService.getTopics();
    }
    @Post()
    async AddTopics(@Body() newTopics: DtoAddTopics): Promise<DtoBaseResponse>{
        return await this.topicsService.addTopics(newTopics);
    }
    @Put()
    async UpdateTopics(@Body() putTopics: DtoPutTopics): Promise<DtoBaseResponse>{
        return await this.topicsService.updateTopics(putTopics);
    }
    @Delete('/:id')
    async DeleteTopics(@Param('id') id: string): Promise<DtoBaseResponse>{
        return await this.topicsService.deleteTopics(id);
    }
}
