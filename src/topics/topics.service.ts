import { BadRequestException, Injectable } from '@nestjs/common';
import { Activities, Files, FilesTopics, Topics } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoAddActivity, DtoAddTopics, DtoPutActivity, DtoPutTopics } from 'src/dtos/topics.dto';
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

        return topicsAndActivities;
    }

    async getTopicsBySubjects(subjectId: string): Promise<Topics[]> {
        const topicsAndActivities = await this.prismaService.topics.findMany({
            where: {
                subjectId: Number(subjectId)
            },
            include: {
                activities: true,
                FilesTopics: true
            }
        });

        return topicsAndActivities;
    }

    async addTopics(newTopic: DtoAddTopics): Promise<DtoBaseResponse> {
        const createTopics = await this.prismaService.topics.create({
            data: {
                topicDescription: newTopic.topicDescription,
                topicName: newTopic.topicName,
                subjectId: newTopic.subjectId
            }
        });
        if (!createTopics) {
            throw new BadRequestException('No se pudo crear el tema');
        }

        baseResponse.message = 'Tema creado exitosamente';
        return baseResponse;
    }

    async uploadFileTopic(file: Express.Multer.File, topicId: string): Promise<DtoBaseResponse> {
        const saveFile = await this.prismaService.filesTopics.create({
            data: {
                topicId: Number(topicId),
                filePath: file.filename
            }
        });

        if (!saveFile) {
            throw new BadRequestException('No se pudo guardar el archivo');
        }

        baseResponse.message = 'Archivo subido exitosamente.';
        return baseResponse;
    }

    async consultFileTopic(fileId: string): Promise<FilesTopics | null> {
        const findFileTopic = await this.prismaService.filesTopics.findFirst({
            where: {
                fileId: Number(fileId),
            }
        });

        if(!findFileTopic){
            return null;
        }

        return findFileTopic;
    }

    async addActivity(newActivity: DtoAddActivity): Promise<DtoBaseResponse> {
        const createActivity = await this.prismaService.activities.create({
            data: {
                activityDescription: newActivity.activityDescription,
                activityName: newActivity.activityName,
                topidId: newActivity.topicIc
            }
        });
        if (!createActivity) {
            throw new BadRequestException('No se pudo crear la actividad.');
        }

        baseResponse.message = 'Actividad creado exitosamente';
        return baseResponse;
    }
    async updateTopics(updateTopic: DtoPutTopics): Promise<DtoBaseResponse> {
        const updateTopics = await this.prismaService.topics.update({
            data: {
                topicDescription: updateTopic.topicDescription,
                topicName: updateTopic.topicName,
                subjectId: updateTopic.subjectId
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
    async updateActivity(updateActivity: DtoPutActivity): Promise<DtoBaseResponse> {
        const updateActivities = await this.prismaService.activities.update({
            data: {
                activityDescription: updateActivity.activityDescription,
                activityName: updateActivity.activityName,
            },
            where:
            {
                activityId: updateActivity.activityId
            }
        });

        if (!updateActivities) {
            throw new BadRequestException('No se pudo actualizar la actividad.');
        }

        baseResponse.message = 'Actividad actualizado exitosamente';
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
