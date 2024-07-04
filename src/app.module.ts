import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { SubjectsModule } from './subjects/subjects.module';
import { MainLoadModule } from './main-load/main-load.module';
import { TopicsModule } from './topics/topics.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ActivitiesModule } from './activities/activities.module';

@Module({
  imports: [AuthModule, UsersModule, ClassroomsModule, SubjectsModule, MainLoadModule, TopicsModule, AttendanceModule, ActivitiesModule],
  providers: [PrismaService],
})
export class AppModule {}
