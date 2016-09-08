import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//  Services inports
import { SubredditService } from './service';

//  Components imports
// import { MyCardComponent } from '../../components/myCard/myCard';

@Component({
  templateUrl: 'build/pages/subreddit/subreddit.html',
  providers: [SubredditService]
})

export class SubredditPage {
  sub: any;
  posts: Array<{title: string, content: string}>;

  constructor(private nav: NavController,
              private navParams: NavParams,
              private subredditService: SubredditService) {
    this.sub = this.navParams.get('sub');

    this.posts = subredditService.getMockPosts(this.sub.link);
    // this.posts = subredditService.getSubredditPosts(this.sub.link);
  }
}