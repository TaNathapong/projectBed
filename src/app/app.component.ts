import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { CalendarPage } from '../pages/calendar/calendar';
import { Profile } from '../models/profile';
import { GlobalProvider } from "../providers/global/global";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  profileData: Observable<Profile>;
  pages: Array<{ title: string, component: any }>;
  public alertShown: boolean = false;
  public counter = 0;

  constructor(public global: GlobalProvider, public platform: Platform, public statusBar: StatusBar, public alertCtrl: AlertController, public splashScreen: SplashScreen, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.nav.pop();
          this.counter++;
          setTimeout(() => { this.counter = 0 }, 1500)
        } else {
          this.presentConfirm();
        }
      });
    });

    this.pages = [
      { title: 'Bed Management', component: HomePage },
      { title: 'Contact', component: ContactPage },
      { title: 'Calendar', component: CalendarPage }
    ];

    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.profileData = this.afDB.object<Profile>(`profiles/${data.uid}`).valueChanges();
      }
    });
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'ออกจากแอพ',
      message: 'ต้องการออกจากโปรแกรมหรือไม่ ?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown = false;
          }
        },
        {
          text: 'ตกลง',
          handler: () => {
            console.log('Yes clicked');
            this.logOut();
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present().then(() => {
      this.alertShown = true;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut() {
    firebase.auth().signOut();
    this.profileData = null;
    this.global.access_token = null;
    window.location.reload();
  }
}
