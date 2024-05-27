import { Injectable } from '@nestjs/common';
import { Topics } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TopicsService {

    constructor(private prismaService: PrismaService){
    }

    async getTopics(): Promise<Topics[]> {
        return await this.prismaService.topics.findMany();
    }
}
