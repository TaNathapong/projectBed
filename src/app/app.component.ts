import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { CalendarPage } from '../pages/calendar/calendar';
// import { SchedulerPage } from '../pages/scheduler/scheduler';
import { ProfilePage } from '../pages/profile/profile';
import { Profile } from '../models/profile';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  profileData: Observable<Profile>

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.initializeApp();

    this.pages = [
      { title: 'Bed Management', component: HomePage },
      { title: 'Contact', component: ContactPage },
      { title: 'Calendar', component: CalendarPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.profileData = this.afDB.object<Profile>(`profiles/${data.uid}`).valueChanges();
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.profileData = null;
    this.nav.setRoot(LoginPage);
  }

  profilePage() {
    this.nav.setRoot(ProfilePage);
  }
}
