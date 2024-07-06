import { BadRequestException, Injectable } from '@nestjs/common';
import { Files } from '@prisma/client';
import { DtoActivities, DtoActivitiesValidate } from 'src/dtos/activities.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivitiesService {

    constructor(private prismaService: PrismaService){}

    async uploadFiles(file: Express.Multer.File, activities: DtoActivities): Promise<DtoBaseResponse> {
        const saveFile = await this.prismaService.files.create({
            data: {
                studentId: Number(activities.studentId),
                activityId: Number(activities.activityId),
                filePath: file.filename
            }
        });

        if(!saveFile){
            throw new BadRequestException('No se pudo guardar el archivo');
        }

        baseResponse.message='Archivo subido exitosamente.';
        return baseResponse;
    }

    async consultFileExist(activityConsult: DtoActivitiesValidate): Promise<string> {
        const findFileExist = await this.prismaService.files.findFirst({
            where: {
                activityId: activityConsult.activityId,
                studentId: activityConsult.studentId
            }
        });

        if(!findFileExist){
            return '';
        }

        return findFileExist.filePath;
    }

    async findFile(idFile: number): Promise<Files> {
        const findFileName = await this.prismaService.files.findFirst({
            where: {
                fileId: Number(idFile)
            }
        });

        if(!findFileName){
            throw new BadRequestException('No se pudo guardar el archivo');
        }

        return findFileName;
    }
}
