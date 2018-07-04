import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { HeaderConfig } from 'src/app/services/header.config';
import { AboutModel } from '../models/about.model';

@Injectable()
export class AboutService {
    headerConfig = new HeaderConfig();

    about: AboutModel;
    abouts: AboutModel[];

    private _url = this.headerConfig.url + "/api/users";

    constructor(private _http: HttpClient) {

    }

    getAbout(aboutId) {
        return this._http.get(this._url + "/" + aboutId, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }
}