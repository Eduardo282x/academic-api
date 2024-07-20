import { BadRequestException, Injectable } from '@nestjs/common';
import { Subjects } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { BodyAddSubject, BodyUpdateSubject, DtoSubjects } from 'src/dtos/subjects.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SubjectsService {

    constructor(private prisma: PrismaService){}

    async getSubjects(): Promise<DtoSubjects[]>{
        const getSubjects: Subjects[] = await this.prisma.subjects.findMany({
            include: {
                classrooms: true
            }
        });

        if(!(getSubjects.length>0)){
            throw new BadRequestException('No se encontraron materias');
        }

        const parseSubjects: DtoSubjects[] = getSubjects.map((sub: any) => {
            sub.classrooms = sub.classrooms.grade
            return sub
        })

        return parseSubjects;
    }

    async addSubjects(bodySubjects: BodyAddSubject): Promise<DtoBaseResponse>{
        const findSubject = this.prisma.subjects.findFirst({
            where:{
                subjectName: bodySubjects.subjectName,
                classroomId: bodySubjects.classroomId
            }
        });

        // if(findSubject){
        //     throw new BadRequestException('Esta materia ya se encuentra registrada.');
        // }

        const createSubject: Subjects = await this.prisma.subjects.create({
            data: {
                subjectName: bodySubjects.subjectName,
                classroomId: bodySubjects.classroomId,
                subjectDescription: ''
            }
        });

        if(!createSubject){
            throw new BadRequestException('Ha ocurrido un error.');
        }

        baseResponse.message = 'Materia agregada.'
        return baseResponse;
    }

    async putSubjects(bodySubjects: BodyUpdateSubject): Promise<DtoBaseResponse>{
        const updateSubject: Subjects = await this.prisma.subjects.update({
            data: {
                subjectName: bodySubjects.subjectName,
                classroomId: bodySubjects.classroomId,
                subjectDescription: bodySubjects.subjectDescription
            },
            where: {
                subjectId: bodySubjects.subjectId
            }
        });

        if(!updateSubject){
            throw new BadRequestException('No se encontraron materias');
        }

        baseResponse.message = 'Materia actualizada.'
        return baseResponse;
    }

    async deleteSubjects(bodySubjects: BodyUpdateSubject): Promise<DtoBaseResponse>{
        await this.prisma.subjects.delete({
            where: {
                subjectId: bodySubjects.subjectId
            }
        });

        baseResponse.message = 'Materia agregada.'
        return baseResponse;
    }
}
