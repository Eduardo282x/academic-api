import { IsNumber, IsString } from "class-validator";

export class DtoAddTopics {
    @IsString()
    topicName: string;
    @IsString()
    topicDescription: string;
}
export class DtoPutTopics extends DtoAddTopics {
    @IsNumber()
    topicIc: number;
} 

export class DtoAddActivity {
    @IsString()
    activityName: string;
    @IsString()
    activityDescription: string;
    @IsNumber()
    topicIc: number;
}
export class DtoPutActivity extends DtoAddActivity {
    @IsNumber()
    activityId: number;
} 
