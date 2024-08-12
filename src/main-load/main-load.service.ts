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
                        identify: '28391325',
                        email: 'admin@gmail.com',
                        age: '22',
                        rolId: 1
                    },
                    {
                        name: 'Eduardo',
                        lastname: 'Rojas',
                        username: 'Profesor02',
                        password: '1234',
                        identify: '28391325',
                        email: 'eduardo@gmail.com',
                        age: '22',
                        rolId: 2
                    },
                    {
                        name: 'Estudiante',
                        lastname: 'Nuevo',
                        username: 'Estudiante01',
                        password: '12345678',
                        identify: '28391325',
                        email: 'estudiante@gmail.com',
                        age: '22',
                        rolId: 3
                    },
                    {
                        name: 'Ana',
                        lastname: 'Martinez',
                        username: 'AnaMtz03',
                        password: '12345678',
                        identify: '28391325',
                        email: 'ana.martinez@gmail.com',
                        age: '20',
                        rolId: 3
                    },
                    {
                        name: 'Luis',
                        lastname: 'Gonzalez',
                        username: 'LuisGon05',
                        password: '12345678',
                        identify: '28391325',
                        email: 'luis.gonzalez@gmail.com',
                        age: '23',
                        rolId: 3
                    },
                    {
                        name: 'Carlos',
                        lastname: 'Perez',
                        username: 'CarlosP88',
                        password: '12345678',
                        identify: '28391325',
                        email: 'carlos.perez@gmail.com',
                        age: '21',
                        rolId: 3
                    },
                    {
                        name: 'María',
                        lastname: 'Fernandez',
                        username: 'MariaFdez91',
                        password: '12345678',
                        identify: '28391325',
                        email: 'maria.fernandez@gmail.com',
                        age: '22',
                        rolId: 3
                    },
                    {
                        name: 'Sofía',
                        lastname: 'Lopez',
                        username: 'SofiaLpz99',
                        password: '12345678',
                        identify: '28391325',
                        email: 'sofia.lopez@gmail.com',
                        age: '19',
                        rolId: 3
                    }
                ]
            });

            await this.prisma.classrooms.create({
                data: {
                    grade: '6to Grado - Sección U'
                }
            });

            await this.prisma.subjects.create({
                data: {
                    subjectClassName: 'bg-subject-green',
                    subjectName: 'Geometria',
                    subjectDescription: '',
                    classroomId: 1
                }
            });

            await this.prisma.students.createMany({
                data: [
                    {
                        userId: 3,
                        classroomId: 1
                    },
                    {
                        userId: 4,
                        classroomId: 1
                    },
                    {
                        userId: 5,
                        classroomId: 1
                    },
                    {
                        userId: 6,
                        classroomId: 1
                    },
                    {
                        userId: 7,
                        classroomId: 1
                    },
                    {
                        userId: 8,
                        classroomId: 1
                    }
                ]
            });

            await this.prisma.topics.createMany({
                data: [
                    {
                        topicDescription: 'Este tema introduce a los estudiantes a las formas más fundamentales de la geometría. Aprenderán a reconocer y nombrar figuras geométricas como círculos, cuadrados, triángulos y rectángulos. La comprensión de estas formas es esencial para el estudio posterior de la geometría y ayuda a los estudiantes a identificar y clasificar objetos en su entorno.',
                        topicName: 'Figuras Geométricas Básicas',
                        subjectId: 1
                    },
                    {
                        topicDescription: 'En este tema, los estudiantes exploran dos conceptos importantes de la geometría plana: el perímetro, que es la distancia alrededor de una figura, y el área, que es la medida del espacio dentro de una figura. A través de actividades prácticas, los estudiantes aprenderán a calcular estas medidas en varias figuras, lo que les proporcionará una comprensión práctica de cómo la geometría se aplica en la vida cotidiana.',
                        topicName: 'Perímetro y Área',
                        subjectId: 1
                    },
                    {
                        topicDescription: 'La simetría y los patrones son fundamentales en el mundo natural y en el diseño humano. Este tema permite a los estudiantes observar la simetría en objetos y seres vivos, así como crear sus propios patrones simétricos. Al estudiar la simetría, los estudiantes desarrollan un sentido de equilibrio y proporción, mientras que los patrones les enseñan sobre la repetición y la secuencia en el diseño.',
                        topicName: 'Simetría y Patrones',
                        subjectId: 1
                    },

                ]
            });

            await this.prisma.activities.createMany({
                data: [
                    {
                        activityDescription: 'Los estudiantes pueden usar una aplicación de dibujo para crear un collage de figuras geométricas básicas, identificando círculos, cuadrados, triángulos y rectángulos.',
                        activityName: 'Identificación de Figuras',
                        topidId: 1
                    },
                    {
                        activityDescription: 'Proporciona a los estudiantes diferentes figuras geométricas y pídeles que calculen el perímetro utilizando la fórmula adecuada.',
                        activityName: 'Cálculo de Perímetro',
                        topidId: 2
                    },
                    {
                        activityDescription: 'Utiliza papel plegado para crear patrones simétricos y luego dibuja los patrones resultantes.',
                        activityName: 'Creación de Patrones Simétricos',
                        topidId: 3
                    },
                ]
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
