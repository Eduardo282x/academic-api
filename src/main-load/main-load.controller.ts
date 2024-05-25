import { Controller, Get } from '@nestjs/common';
import { MainLoadService } from './main-load.service';
import { DtoBaseResponse } from 'src/dtos/base-response.dto';

@Controller('main-load')
export class MainLoadController {

    constructor(private loadServices: MainLoadService){}

    @Get()
    async mainLoad(): Promise<DtoBaseResponse> {
        return await this.loadServices.mainLoad();
    }
}
