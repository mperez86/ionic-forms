import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  public appPages = [
    /**{
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Template driven form',
      url: '/template-driven-form',
      icon: 'clipboard'
    },**/
    {
      title: 'Reactive form',
      url: '/reactive-form',
      icon: 'clipboard'
    },
    {
      title: 'Fruit List',
      url: '/fruits',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {

  }

  public ngOnInit(): void {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
