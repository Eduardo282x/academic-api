import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttendanceService {

    constructor(private prismaService: PrismaService){}

    async saveAttendance() {
        
    }
}