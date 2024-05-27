import { Controller, Get } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { Topics } from '@prisma/client';

@Controller('topics')
export class TopicsController {

    constructor(private topicsService: TopicsService){
    }

    @Get()
    async GetTopics(): Promise<Topics[]>{
        return await this.topicsService.getTopics();
    }
}
