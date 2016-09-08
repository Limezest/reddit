import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TopService {

  constructor(private http: Http) { }

  getTopPosts() {
    const url: string = 'http://reddit.com/.json';

    return this.http.get(url)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }
}