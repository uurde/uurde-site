import { BaseModel } from "./base.model";

export class ContactModel extends BaseModel{
    contactId: number;
    senderFullName: string;
    senderMailAddress: string;
    contactBody: string;
    isRelied: boolean;
    repliedDate: Date;
    replyBody: string;
}