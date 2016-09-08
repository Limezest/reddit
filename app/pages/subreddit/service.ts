import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SubredditService {

  constructor(private http: Http) { }

  getSubList() {
    return [
      { name: 'sub1', link: '/sub1' },
      { name: 'sub2', link: '/sub2' },
      { name: 'sub3', link: '/sub3' }
    ];
  }

  getMockPosts(sub) {
    let posts: Array<{ title: string, content: string }>;

    switch (sub) {
      case '/sub1':
        posts = [
          {
            title: 'titre 1',
            content: 'contenu 1'
          }];
        break;
      case '/sub2':
        posts = [
          {
            title: 'titre 2',
            content: 'contenu 2'
          }];
        break;
      case '/sub3':
        posts = [
          {
            title: 'titre 3',
            content: 'contenu 3'
          }];
        break;

      default:
        break;
    }
    return posts;
  }

  getSubredditPosts(link) {
    const url: string = 'http://reddit.com/';

    return this.http.get(url + link)
      .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
}