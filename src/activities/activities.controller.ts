import { BadRequestException, Body, Controller, Get, Param, Post, Query, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Observable, of } from 'rxjs';
import { join } from 'path';
import { Files } from '@prisma/client';
import { DtoActivities, DtoActivitiesValidate } from 'src/dtos/activities.dto';

@Controller('activities')
export class ActivitiesController {

    constructor(
        private activitiesServices: ActivitiesService
    ) {
    }

    @Get('/:idFile')
    async getActivities(@Param('idFile') idFile: number, @Res() res): Promise<Observable<Object>> {
        const fileName = await this.activitiesServices.findFile(idFile);
        return of(res.sendFile(join(process.cwd(), 'files_system/' + fileName.filePath)));
    }
    @Post('/consult')
    async postConsultActivities(@Body() activityConsult: DtoActivitiesValidate): Promise<Files | null> {
        return this.activitiesServices.consultFileExist(activityConsult);
    }

    @Post()
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './files_system',
            filename: function (req, file, cb) {
                cb(null, file.originalname);
            },
        }),
    }))
    async uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Query() activities
    ) {

    // Verifica si el archivo se ha cargado correctamente.
    if (!file) {
        throw new BadRequestException('Archivo no encontrado');
    }

    // Continúa con la lógica de negocio (por ejemplo, guardar en la base de datos).
    return await this.activitiesServices.uploadFiles(file, activities);
    }
}
