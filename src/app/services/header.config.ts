import { HttpHeaders } from '@angular/common/http';

export class HeaderConfig {

    //url: string = 'http://uur-api-dev.azurewebsites.net';
    url: string = 'http://uurde.ugurdegirmenci.net';
    //url: string = 'http://localhost:55321';

    httpOptions: any = {
        headers: new HttpHeaders({
           "Content-Type": "application/json",
           "Authorization": "511d9200e32268e6bc1bb9bd3332ca8d01effb5287c2e315ec2e356ca98efe6a"
        })
    }
}