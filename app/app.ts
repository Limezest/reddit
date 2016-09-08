import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

//  Pages imports
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {LoginPage} from './pages/login/login';
import {SettingsPage} from './pages/settings/settings';
import {SubredditPage} from './pages/subreddit/subreddit';
import {ToDoPage} from './pages/todo/todo';
import {TopPage} from './pages/top/top';

//  Services imports
import {SubredditService} from './pages/subreddit/service';

@Component({
  templateUrl: 'build/app.html',
  providers: [SubredditService]
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = TopPage;
  pages: Array<{ title: string, component: any }>;
  otherPages: Array<{ icon: string, title: string, component: any }>;

  subreddits: any;
  isExpanded: boolean = false;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    private subredditService: SubredditService
  ) {
    this.initializeApp();

    //  Get subreddits list for the sidebar menu
    this.subreddits = subredditService.getSubList();

    // set our app's pages
    this.pages = [
      { title: 'Top Posts', component: TopPage },
      // { title: 'Hello Ionic', component: HelloIonicPage },
      // { title: 'List', component: ListPage },
      { title: 'To Do', component: ToDoPage },
      { title: 'Login', component: LoginPage }
    ];

    this.otherPages = [
      { icon: 'settings', title: 'Settings', component: SettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
  openSub(sub) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    this.expand();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(SubredditPage, {
      sub: sub
    });
  }

  expand() {
    this.isExpanded = !this.isExpanded;
  }
}

ionicBootstrap(MyApp);