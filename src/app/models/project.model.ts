import { BaseModel } from "./base.model";

export class ProjectModel extends BaseModel {
    projectId: number;
    projectTypeId: number;
    projectName: string;
    projectTypeName: string;
    projectCompany: string;
    projectImagePath: string;
    projectDescription: string;
    startDate: Date;
    endDate: Date;
}