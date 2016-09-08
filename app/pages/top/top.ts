import { Component } from '@angular/core';

import { TopService } from './service';

@Component({
  templateUrl: 'build/pages/top/top.html',
  providers: [TopService]
})
export class TopPage {
  private posts: any;

  constructor(private topService: TopService) {
    topService.getTopPosts()
      .subscribe(
        data => { this.posts = data; }
        , err => { console.log(err); }
      );
  }
}