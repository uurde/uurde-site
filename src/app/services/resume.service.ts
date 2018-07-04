import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { HeaderConfig } from 'src/app/services/header.config';
import { ResumeModel } from '../models/resume.model';

@Injectable()
export class ResumeService {
    headerConfig = new HeaderConfig();

    resume: ResumeModel;
    resumes: ResumeModel[];

    private _url = this.headerConfig.url + "/api/resumes";

    constructor(private _http: HttpClient) {

    }

    getAllResumes() {
        return this._http.get(this._url, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }
}