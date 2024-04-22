import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { ClassroomsModule } from './classrooms/classrooms.module';
import { SubjectsModule } from './subjects/subjects.module';

@Module({
  imports: [AuthModule, UsersModule, ClassroomsModule, SubjectsModule],
  providers: [PrismaService],
})
export class AppModule {}
