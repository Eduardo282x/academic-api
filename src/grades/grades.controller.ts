import { Body, Controller, Post } from '@nestjs/common';
import { DtoActivitiesValidate } from 'src/dtos/activities.dto';
import { GradesService } from './grades.service';
import { DtoGrades } from 'src/dtos/grade.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';

@Controller('grades')
export class GradesController {

    constructor(private gradesService: GradesService){}

    @Post('get')
    async postConsultGrade(@Body() activityConsult: DtoActivitiesValidate): Promise<string> {
        return this.gradesService.consultGradeStudent(activityConsult);
    }

    @Post()
    async postSetGrade(@Body() grade: DtoGrades): Promise<DtoBaseResponse> {
        return this.gradesService.setGradeStudent(grade);
    }
}
