import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  getToken() {
    const url: string = 'https://www.reddit.com/api/v1/access_token';
    const body: any = JSON.stringify('grant_type=password&username=&password=');
  
    return this.http.post(url, body)
      .map(this.extractData);
  }

  extractData(res) {
    let body = res.json();
    return body.data || { };
  }
}