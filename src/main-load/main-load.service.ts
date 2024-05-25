import { BadRequestException, Injectable } from '@nestjs/common';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MainLoadService {

    constructor(private prisma: PrismaService) { }

    async mainLoad(): Promise<DtoBaseResponse> {
        try {
            await this.prisma.roles.createMany({
                data: [
                    { rol: 'Administrador' },
                    { rol: 'Profesor' },
                    { rol: 'Estudiante' },
                ]
            });

            await this.prisma.users.createMany({
                data: [
                    {
                        name: 'admin',
                        lastname: 'admin',
                        username: 'admin',
                        password: 'admin',
                        email: 'admin@gmail.com',
                        age: '22',
                        rolId: 1
                    },
                    {
                        name: 'Eduardo',
                        lastname: 'Rojas',
                        username: 'Eduardo28',
                        password: '1234',
                        email: 'eduardo@gmail.com',
                        age: '22',
                        rolId: 2
                    },
                    {
                        name: 'Estudiante',
                        lastname: 'Nuevo',
                        username: 'Estudiante01',
                        password: '12345678',
                        email: 'estudiante@gmail.com',
                        age: '22',
                        rolId: 3
                    },
                ]
            });

            await this.prisma.classrooms.create({
                data: {
                    grade: '6to Grado'
                }
            });

            await this.prisma.subjects.create({
                data: {
                    subjectName: 'Geometria',
                    subjectDescription: '',
                    classroomId: 1
                }
            });

            await this.prisma.students.create({
                data: {
                    userId: 3,
                    classroomId: 1
                }
            });

            await this.prisma.topics.create({
                data: {
                    topicDescription: '',
                    topicName: 'Tema 1',
                    subjectId: 1
                }
            });

            await this.prisma.activities.create({
                data: {
                    activityDescription: '',
                    activityName: '',
                    topidId: 1
                }
            });

            await this.prisma.attendance.create({
                data: {
                    studentId: 1,
                    subjectsId: 1,
                    date: new Date(),
                    attended: true
                }
            });

            await this.prisma.grades.create({
                data: {
                    studendId: 1,
                    activityId: 1,
                    score: 18
                }
            });

            const response: DtoBaseResponse = {
                success: true,
                message: `Se ha cargado correctamente todos los datos`,
                statusCode: 200
            }
            
            return response;
        }
        catch (err) {
            const response: DtoBaseResponse = {
                success: false,
                message: `Ha ocurrido un error inespedaro ${err}`,
                statusCode: 400
            }
            return response;
        }

    }
}
