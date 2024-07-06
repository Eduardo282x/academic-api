import { BadRequestException, Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime/library';
import { DtoActivitiesValidate } from 'src/dtos/activities.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoGrades } from 'src/dtos/grade.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GradesService {

    constructor(private prismaService: PrismaService){}

    async consultGradeStudent(activityConsult: DtoActivitiesValidate): Promise<string> {
        const findGradeStudent = await this.prismaService.grades.findFirst({
            where: {
                activityId: activityConsult.activityId,
                studendId: activityConsult.studentId
            }
        });


        if(!findGradeStudent){
            return '0';
        }

        return `${findGradeStudent.score}`;
    }

    async setGradeStudent(grade: DtoGrades): Promise<DtoBaseResponse> {
        const setGrade = await this.prismaService.grades.create({
            data: {
                studendId: grade.studentId,
                activityId: grade.activityId,
                score: grade.score
            }
        });


        if(!setGrade){
            throw new BadRequestException('Ha ocurrido un error al colocar la nota.');
        }

        baseResponse.message = 'Nota cargada exitosamente.';

        return baseResponse;
    }
}
