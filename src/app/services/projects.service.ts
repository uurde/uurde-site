import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { HeaderConfig } from 'src/app/services/header.config';
import { ProjectModel } from '../models/project.model';

@Injectable()
export class ProjectService {
    headerConfig = new HeaderConfig();

    project: ProjectModel;
    projects: ProjectModel[];

    private _url = this.headerConfig.url + "/api/projects";

    constructor(private _http: HttpClient) {

    }

    getAllProjects() {
        return this._http.get(this._url + "/GetProjectDetails", this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }

    getProjectTypes() {
        return this._http.get(this._url + "/GetProjectTypes", this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }    

    getProject(projectId) {
        return this._http.get(this._url + "/" + projectId, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }
}