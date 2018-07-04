import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { HeaderConfig } from 'src/app/services/header.config';
import { SkillModel } from '../models/skill.model';

@Injectable()
export class SkillService {
    headerConfig = new HeaderConfig();

    skill: SkillModel;
    skills: SkillModel[];

    private _url = this.headerConfig.url + "/api/skills";

    constructor(private _http: HttpClient) {

    }

    getAllSkills() {
        return this._http.get(this._url, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }
}