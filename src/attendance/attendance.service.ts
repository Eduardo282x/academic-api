import { Injectable } from '@nestjs/common';
import { Attendance, SaveAttendance } from 'src/dtos/attendance.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';
import { baseResponse } from 'src/dtos/baseResponse';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceService {

    constructor(private prismaService: PrismaService){}

    async saveAttendance(attendance: Attendance[]): Promise<DtoBaseResponse> {
        const date = new Date();

        const createMultipleAssistent: SaveAttendance[] = attendance.map(stu => {
            return {
                studentId: stu.studentId,
                subjectsId: 1,
                date: date,
                attended: stu.assistent,
            }
        })
        
        await this.prismaService.attendance.createMany({
            data: createMultipleAssistent
        });

        baseResponse.message = "Se guardo la asistencia";

        return baseResponse;
    }

    async getAttendance():  Promise<boolean> {
        const dateToday = new Date();
        dateToday.setHours(0,0,0,0);

        const tomorrow = new Date(dateToday);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const getAttendance = await this.prismaService.attendance.findMany({
            where: {
                date: {
                    gte: dateToday,
                    lt: tomorrow
                }
            }
        });

        return getAttendance.length > 0;
    }
}
