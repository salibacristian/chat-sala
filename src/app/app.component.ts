import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from "./service/auth.service";
import { timer } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  showSplash = true;
  notShowSplash = false;
  titulo = 'Relevamiento Visual';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private AFauth: AuthService,
    private publicRouter:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=>{this.notShowSplash=true;})
      timer(3000).subscribe(()=>{this.showSplash=false;})
    });
  }

  LogOut(){
    this.AFauth.logOut();
    this.publicRouter.navigate(['/log-in'])
  }
  home(){
    this.publicRouter.navigate(['/home'])
  }
}
