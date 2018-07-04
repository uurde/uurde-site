import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
//import {Observable} from 'rxjs/Observable';
import {forkJoin} from 'rxjs';

import { HeaderConfig } from 'src/app/services/header.config';
import { AboutModel } from '../models/about.model';

@Injectable()
export class MainService {
    headerConfig = new HeaderConfig();

    about: AboutModel;
    abouts: AboutModel[];

    private _urlUser = this.headerConfig.url + "/api/users";
    private _urlProject = this.headerConfig.url + "/api/projects";
    private _urlResume = this.headerConfig.url + "/api/resumes";
    private _urlSkill = this.headerConfig.url + "/api/skills";

    constructor(private _http: HttpClient) {

    }

    getAbout() {
        return this._http.get(this._urlUser + "/" + 2, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }

    getAllProjects() {
        return this._http.get(this._urlProject + "/GetProjectDetails", this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }

    getAllResumes() {
        return this._http.get(this._urlResume, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }

    getAllSkills() {
        return this._http.get(this._urlSkill, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }

    getAllData() {
        let user = this.getAbout();
        let projects = this.getAllProjects();
        let resumes = this.getAllResumes();
        let skills = this.getAllSkills();

        return forkJoin([user, projects, resumes, skills]);
    }
}