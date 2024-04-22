import { BadRequestException, Injectable } from '@nestjs/common';
import { classrooms } from '@prisma/client';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { DtoAddClassrooms, DtoClassrooms } from 'src/dtos/classrooms.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClassroomsService {

    constructor(private prisma: PrismaService){}

    async getClassrooms(): Promise<classrooms[]>{
        const classrooms: classrooms[] = await this.prisma.classrooms.findMany();

        return classrooms
    }

    async addClassrooms(classroom: DtoAddClassrooms): Promise<DtoBaseResponse>{
        const classrooms: classrooms = await this.prisma.classrooms.create({
            data: {
                grade: classroom.grade
            }
        });

        if(!classrooms){
            throw new BadRequestException('Ha ocurrido un error inesperado');
        }
        baseResponse.message = 'Salon agregado.';
        return baseResponse
    }
    async putClassrooms(classroom: DtoClassrooms): Promise<DtoBaseResponse>{
        await this.prisma.classrooms.update({
            data:{
                grade: classroom.grade
            },
            where: {
                classroomId: classroom.classroomId
            }
        });

        baseResponse.message = 'Salon actualizado.';
        return baseResponse
    }
    async deleteClassrooms(classroom: DtoClassrooms): Promise<DtoBaseResponse>{
        await this.prisma.classrooms.delete({
            where: {
                classroomId: classroom.classroomId
            }
        });
        baseResponse.message = 'Salon eliminado.';
        return baseResponse
    }

}
