import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { HeaderConfig } from 'src/app/services/header.config';

@Injectable()
export class ContactService {
    headerConfig = new HeaderConfig();

    private _url = this.headerConfig.url + "/api/contacts";

    constructor(private _http: HttpClient) {

    }

    insertContact(contact) {
        return this._http.post(this._url, contact, this.headerConfig.httpOptions).pipe(tap(res => { return res; }));
    }
}