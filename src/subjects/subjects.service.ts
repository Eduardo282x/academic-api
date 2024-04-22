import { BadRequestException, Injectable } from '@nestjs/common';
import { subjects } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubjectsService {

    constructor(private prisma: PrismaService){}

    async getSubjects(): Promise<any[]>{
        const getSubjects: subjects[] = await this.prisma.subjects.findMany({
            include: {
                classrooms: true
            }
        });

        if(!(getSubjects.length>0)){
            throw new BadRequestException('No se encontraron materias');
        }

        const parseSubjects = [];

        return parseSubjects;
    }

    async addSubjects(bodySubjects: any): Promise<DtoBaseResponse>{
        console.log(bodySubjects);
        
        const getSubjects: subjects[] = await this.prisma.subjects.findMany({
            include: {
                classrooms: true
            }
        });

        if(!(getSubjects.length>0)){
            throw new BadRequestException('No se encontraron materias');
        }

        baseResponse.message = 'Materia agregada.'
        return baseResponse;
    }

    async putSubjects(bodySubjects: any): Promise<DtoBaseResponse>{
        const getSubjects: subjects = await this.prisma.subjects.update({
            data: {
                subjectName: '',
                classroomId: 1,
            },
            where: {
                subjectId: 1
            }
        });

        baseResponse.message = 'Materia actualizada.'
        return baseResponse;
    }

    async deleteSubjects(bodySubjects: any): Promise<DtoBaseResponse>{
        await this.prisma.subjects.delete({
            where: {
                subjectId: 1
            }
        });

        baseResponse.message = 'Materia agregada.'
        return baseResponse;
    }
}
