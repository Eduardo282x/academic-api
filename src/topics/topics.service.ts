import { BadRequestException, Injectable } from '@nestjs/common';
import { Topics } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoAddTopics, DtoPutTopics } from 'src/dtos/topics.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TopicsService {

    constructor(private prismaService: PrismaService) {
    }

    async getTopics(): Promise<Topics[]> {
        const topicsAndActivities = await this.prismaService.topics.findMany({
            include: {
                activities: true,
            },
        });

        // const joinsTables = await this.prismaService.$queryRaw``;


        

        return topicsAndActivities;
    }

    async addTopics(newTopic: DtoAddTopics): Promise<DtoBaseResponse> {
        const createTopics = await this.prismaService.topics.create({
            data: {
                topicDescription: newTopic.topicDescription,
                topicName: newTopic.topicName,
                subjectId: 1
            }
        });
        if (!createTopics) {
            throw new BadRequestException('No se pudo crear el tema');
        }

        baseResponse.message = 'Tema creado exitosamente';
        return baseResponse;
    }
    async updateTopics(updateTopic: DtoPutTopics): Promise<DtoBaseResponse> {
        const updateTopics = await this.prismaService.topics.update({
            data: {
                topicDescription: updateTopic.topicDescription,
                topicName: updateTopic.topicName,
                subjectId: 1
            },
            where:
            {
                topicIc: updateTopic.topicIc
            }
        });

        if (!updateTopics) {
            throw new BadRequestException('No se pudo actualizar el tema');
        }

        baseResponse.message = 'Tema actualizado exitosamente';
        return baseResponse;
    }
    async deleteTopics(topicId: string): Promise<DtoBaseResponse> {
        const deleteTopic = await this.prismaService.topics.delete({
            where: {
                topicIc: Number(topicId)
            }
        });

        if (!deleteTopic) {
            throw new BadRequestException('No se pudo eliminar el tema');
        }

        baseResponse.message = 'Tema eliminado exitosamente';
        return baseResponse;
    }
}
