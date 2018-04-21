import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NgCalendarModule } from 'ionic2-calendar';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ResetpwdPage } from '../pages/resetpwd/resetpwd';
import { HomePage } from '../pages/home/home';
import { LogsPage } from '../pages/logs/logs';
import { ContactPage } from '../pages/contact/contact';
import { CalendarPage } from '../pages/calendar/calendar';
import { CreateCalendarPage } from '../pages/calendar-create/calendar-create';
import { BedDetailsPage } from '../pages/bed-details/bed-details';
import { ContactDetailsPage } from '../pages/contact-details/contact-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CallNumber } from '@ionic-native/call-number';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GlobalProvider } from '../providers/global/global';

export const firebase_config = {
  apiKey: "AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ",
  authDomain: "hospital-bed-kku.firebaseapp.com",
  databaseURL: "https://hospital-bed-kku.firebaseio.com",
  projectId: "hospital-bed-kku",
  storageBucket: "hospital-bed-kku.appspot.com",
  messagingSenderId: "487459412590"
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ResetpwdPage,
    HomePage,
    LogsPage,
    ContactPage,
    CalendarPage,
    CreateCalendarPage,
    BedDetailsPage,
    ContactDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false }),
    NgCalendarModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebase_config),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ResetpwdPage,
    HomePage,
    LogsPage,
    ContactPage,
    CalendarPage,
    CreateCalendarPage,
    BedDetailsPage,
    ContactDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CallNumber,
    InAppBrowser,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GlobalProvider,
  ]
})

export class AppModule { }
