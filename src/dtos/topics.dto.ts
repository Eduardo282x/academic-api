import { IsNumber, IsString } from "class-validator";

export class DtoAddTopics {
    @IsString()
    topicName: string;
    @IsString()
    topicDescription: string;
    // @IsNumber()
    // subjectId: number;
}
export class DtoPutTopics extends DtoAddTopics {
    @IsNumber()
    topicIc: number;
} 
