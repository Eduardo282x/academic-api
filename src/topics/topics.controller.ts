import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { FilesTopics, Topics } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { DtoAddActivity, DtoAddTopics, DtoPutActivity, DtoPutTopics } from 'src/dtos/topics.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('topics')
export class TopicsController {

    constructor(private topicsService: TopicsService){
    }

    @Get()
    async GetTopics(): Promise<Topics[]>{
        return await this.topicsService.getTopics();
    }
    @Get('/:id')
    async GetTopicsBySubjects(@Param('id') id: string): Promise<Topics[]>{
        return await this.topicsService.getTopicsBySubjects(id);
    }
    @Post()
    async AddTopics(@Body() newTopics: DtoAddTopics): Promise<DtoBaseResponse>{
        return await this.topicsService.addTopics(newTopics);
    }
    @Get('/file/:id')
    async postConsultActivities(@Param('id') fileId: string): Promise<FilesTopics | null> {
        return this.topicsService.consultFileTopic(fileId);
    }
    @Post('/file/:id')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './files_system',
            filename: function (req, file, cb) {
                cb(null, file.originalname);
            },
        }),
    }))
    async UploadFileTopics(
        @UploadedFile() file: Express.Multer.File,
        @Param('id') topicId: string
    ) {

    if (!file) {
        throw new BadRequestException('Archivo no encontrado');
    }

    return await this.topicsService.uploadFileTopic(file, topicId);
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
