import { BaseModel } from "./base.model";

export class ResumeModel extends BaseModel{
    resumeId: number;
    company: string;
    title: string;
    resumeDescription: string;
    startDate: Date;
    endDate: Date;
}