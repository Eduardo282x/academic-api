import { Module } from '@nestjs/common';
import { ClassroomsController } from './classrooms.controller';
import { ClassroomsService } from './classrooms.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    controllers: [ClassroomsController],
    providers: [ClassroomsService, PrismaService]
})
export class ClassroomsModule { }
