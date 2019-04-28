import { HttpHeaders } from '@angular/common/http';

export class HeaderConfig {

    //url: string = 'http://uurde.ugurdegirmenci.net';
    url: string = 'http://localhost:55321';

    httpOptions: any = {
        headers: new HttpHeaders({
           "Content-Type": "application/json",
        })
    }
}