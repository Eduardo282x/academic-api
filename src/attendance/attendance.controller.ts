import { Body, Controller, Get, Post } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { Attendance } from 'src/dtos/attendance.dto';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';

@Controller('attendance')
export class AttendanceController {

    constructor(private attedanceService: AttendanceService){

    }

    @Post()
    async saveAttencande(@Body() attendance: Attendance[]): Promise<DtoBaseResponse> {
        return this.attedanceService.saveAttendance(attendance);
    }
    @Get()
    async getAttencande(): Promise<boolean> {
        return this.attedanceService.getAttendance();
    }
}
