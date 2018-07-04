import { BaseModel } from "./base.model";

export class AboutModel extends BaseModel{
    userId: number;
    userName: string;
    userPassword: string;
    firstName: string;
    lastName: string;
    userPhotoPath: string;
    description: string;
    userCvPath: string;
}