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

      // Detect push back Button for exit app
      platform.registerBackButtonAction(() => {
        if (this.counter == 0) {
          this.nav.pop();
          this.counter++;
          setTimeout(() => { this.counter = 0 }, 1500)
        } else {
          this.counter = 0;
          this.presentConfirm();
        }
      });

    });

    // Page in side menu
    this.pages = [
      { title: 'หน้าแรก', component: HomePage },
      { title: 'รายชื่อบุคลากร', component: ContactPage },
      { title: 'ปฏิทินตารางนัดหมาย', component: CalendarPage }
    ];

    // Get user's details from firebase
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.profileData = this.afDB.object<Profile>(`profiles/${data.uid}`).valueChanges();
      }
    });
  }

  // Exit app alert
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
            this.signOut();
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present().then(() => {
      this.alertShown = true;
    });
  }

  // Open page in side menu
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  // Sign out from firebase
  signOut() {
    firebase.auth().signOut();
    this.profileData = null;            // remove profileData
    this.global.access_token = null;    // remove access_token
    window.location.reload();           // reload app
  }
}
