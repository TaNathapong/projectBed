webpackJsonp([6],{

/***/ 1054:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(1055);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(1059);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(991);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1059:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(1872);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bed_details_bed_details__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_contact_details_contact_details__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_scheduler_scheduler__ = __webpack_require__(1873);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(1052);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic2_calendar__ = __webpack_require__(1875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_devextreme_angular__ = __webpack_require__(1053);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_devextreme_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_devextreme_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var firebase_config = {
    apiKey: "AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ",
    authDomain: "hospital-bed-kku.firebaseapp.com",
    databaseURL: "https://hospital-bed-kku.firebaseio.com",
    projectId: "hospital-bed-kku",
    storageBucket: "hospital-bed-kku.appspot.com",
    messagingSenderId: "487459412590"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_bed_details_bed_details__["a" /* BedDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_details_contact_details__["a" /* ContactDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_scheduler_scheduler__["a" /* SchedulerPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                    links: [
                        { loadChildren: '../pages/bed-details/bed-details.module#BedDetailsPageModule', name: 'BedDetailsPage', segment: 'bed-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-details/contact-details.module#ContactDetailsPageModule', name: 'ContactDetailsPage', segment: 'contact-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebase_config),
                __WEBPACK_IMPORTED_MODULE_19_devextreme_angular__["DxSchedulerModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_bed_details_bed_details__["a" /* BedDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_contact_details_contact_details__["a" /* ContactDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_scheduler_scheduler__["a" /* SchedulerPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 1241:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1243:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(1051);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(1052);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(515);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afDB, afAuth) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__["a" /* CalendarPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Bed Management', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] },
            { title: 'Contact', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'Calendar', component: __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__["a" /* CalendarPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.profileData = _this.afDB.object("profiles/" + data.uid).valueChanges();
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.profileData = null;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.profilePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/app/app.html"*/'<ion-menu menuClose [content]="content">\n  <ion-content>\n    <ion-item (click)="profilePage()">\n      <ion-avatar style="width:30%" item-start>\n        <img style="width:100%; height:100%" src="{{(profileData | async)?.picture}}">\n      </ion-avatar>\n      <h2>{{(profileData | async)?.username}}</h2>\n      <p>{{(profileData | async)?.firstname}} {{(profileData | async)?.lastname}}</p>\n      <p>Ward {{(profileData | async)?.ward}}</p>\n    </ion-item>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let page of pages" (click)="openPage(page)">\n        {{page.title}}\n      </button>\n    </ion-list>\n\n    <ion-footer>\n      <button class="logout" (click)="logout()" menuClose ion-item>\n        Log Out\n      </button>\n    </ion-footer>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 1873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__ = __webpack_require__(1874);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_devextreme_data_custom_store__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_devextreme_data_custom_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_devextreme_data_custom_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SchedulerPage = (function () {
    function SchedulerPage(http) {
        var _this = this;
        this.http = http;
        this.API_KEY = 'AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ';
        this.CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';
        this.dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', this.CALENDAR_ID, '/events?key=', this.API_KEY].join('');
        this.currentDate = new Date();
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2_devextreme_data_data_source___default.a({
            store: new __WEBPACK_IMPORTED_MODULE_3_devextreme_data_custom_store___default.a({
                load: function (options) { return _this.getData(options, { showDeleted: false }); }
            })
        });
    }
    SchedulerPage.prototype.getData = function (options, requestOptions) {
        return this.http.get(this.dataUrl, requestOptions).toPromise().then(this.extractData);
    };
    SchedulerPage.prototype.extractData = function (res) {
        return res.json().items;
    };
    SchedulerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulerPage');
    };
    SchedulerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-scheduler',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/scheduler/scheduler.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ปฏิทิน</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <dx-scheduler [dataSource]="dataSource" [editing]="false" startDateExpr="start.dateTime" endDateExpr="end.dateTime" textExpr="summary"\n    [startDayHour]="8" [endDayHour]="22" timeZone="Asia/Bangkok" [showAllDayPanel]="true" [views]=\'["day", "week", "month"]\'\n    currentView="month" [currentDate]="currentDate" [height]="500">\n  </dx-scheduler>\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/scheduler/scheduler.html"*/
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], SchedulerPage);
    return SchedulerPage;
}());

//# sourceMappingURL=scheduler.js.map

/***/ }),

/***/ 1879:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bed_details_bed_details__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.bedsData = [];
        this.afDB.list("/wards/").valueChanges().subscribe(function (_data) {
            _this.bedsData = _data;
            console.log(_this.bedsData);
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.openNavDetailsPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bed_details_bed_details__["a" /* BedDetailsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>รพ.ศรีนครินทร์</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button icon-only (click)="openNavDetailsPage()">\n\n                <ion-icon name="settings"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-2>\n\n                <b>วอร์ด</b>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n                <b>จำนวนเตียงว่าง</b>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n                <b>อัปเดตล่าสุด</b>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngFor="let bed of bedsData">\n\n            <ion-col col-2>\n\n                <div>{{bed.name}}</div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n                <div>{{bed.blank}}</div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n                <div class="time">{{bed.time | date:\'dd/MM/yy - hh:mm a\'}}</div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BedDetailsPage = (function () {
    function BedDetailsPage(navCtrl, navParams, afDB, alertCtrl, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.admin = "Admin";
        this.bedsData = [];
        this.profileData = {};
    }
    BedDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.afDB.list("/wards/").valueChanges().subscribe(function (_data) {
                    _this.bedsData = _data;
                    console.log(_this.bedsData);
                });
                _this.afDB.object("profiles/" + data.uid).valueChanges().subscribe(function (_data) {
                    _this.profileData = _data;
                    console.log(_this.profileData);
                });
            }
        });
        console.log('ionViewDidLoad BedDetailsPage');
    };
    BedDetailsPage.prototype.updateBed = function (bed) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "\u0E27\u0E2D\u0E23\u0E4C\u0E14\u0E17\u0E35\u0E48 " + bed.id,
            inputs: [
                {
                    name: 'blank',
                    placeholder: 'จำนวนเตียงที่ว่าง',
                    value: bed.blank
                },
            ],
            buttons: [
                {
                    text: 'บันทึก',
                    handler: function (data) {
                        _this.afDB.object('/wards/' + bed.id)
                            .update({
                            blank: data.blank,
                            time: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP
                        });
                        console.log(bed.time);
                        console.log('Save complete');
                    }
                }, {
                    text: 'ยกเลิก',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
            ]
        });
        prompt.present();
    };
    BedDetailsPage.prototype.addBed = function (bed) {
        var _this = this;
        if (bed.blank > 0) {
            var confirm_1 = this.alertCtrl.create({
                title: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E19\u0E44\u0E02\u0E49 ?",
                message: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E19\u0E44\u0E02\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name,
                buttons: [
                    {
                        text: 'ยกเลิก',
                        handler: function () {
                            console.log('Cancel');
                        }
                    },
                    {
                        text: 'ยืนยัน',
                        handler: function () {
                            _this.afDB.object('/wards/' + bed.id)
                                .update({
                                blank: bed.blank - 1,
                                time: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP
                            });
                            console.log('Save complete');
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'รายการไม่ถูกต้อง !!!',
                subTitle: "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E04\u0E19\u0E44\u0E02\u0E49\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name + " \u0E44\u0E14\u0E49\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E15\u0E35\u0E22\u0E07\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E07\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49",
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    BedDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-bed-details',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/bed-details/bed-details.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>จัดการเตียงผู้ป่วย</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid>\n\n\n\n        <div *ngIf="profileData.ward == admin">\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <b>วอร์ด</b>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <b>จำนวนเตียงว่าง</b>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <b>เพิ่มผู้ป่วยเข้าเตียง</b>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngFor="let bed of bedsData">\n\n                <ion-col col-2>\n\n                    <div>{{bed.name}}</div>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div>{{bed.blank}}</div>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <div (click)="addBed(bed)">\n\n                        <b class="add">\n\n                            <ion-icon name="add-circle"> เพิ่มผู้ป่วย</ion-icon>\n\n                        </b>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n\n\n        <div *ngIf="profileData.ward != admin">\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <b>วอร์ด</b>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <b>จำนวนเตียงว่าง</b>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <b>แก้ไขจำนวนเตียง</b>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngFor="let bed of bedsData">\n\n                <ion-row *ngIf="bed.name == profileData.ward">\n\n                    <ion-col col-2>\n\n                        <div>{{bed.name}}</div>\n\n                    </ion-col>\n\n                    <ion-col col-5>\n\n                        <div>{{bed.blank}}</div>\n\n                    </ion-col>\n\n                    <ion-col col-5>\n\n                        <div (click)="updateBed(bed)">\n\n                            <b class="add">\n\n                                <ion-icon name="add-circle"> ปรับจำนวนเตียง</ion-icon>\n\n                            </b>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/bed-details/bed-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], BedDetailsPage);
    return BedDetailsPage;
}());

//# sourceMappingURL=bed-details.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(920);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(922);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CalendarPage = (function () {
    function CalendarPage(navCtrl, http, httpClient) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.httpClient = httpClient;
        this.API_KEY = 'AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ';
        this.CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';
        this.dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', this.CALENDAR_ID, '/events?key=', this.API_KEY].join('');
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
            dateFormatter: {
                formatMonthViewDay: function (date) { return date.getDate().toString(); },
                formatMonthViewDayHeader: function (date) { return 'MonMH'; },
                formatMonthViewTitle: function (date) { return 'testMT'; },
                formatWeekViewDayHeader: function (date) { return 'MonWH'; },
                formatWeekViewTitle: function (date) { return 'testWT'; },
                formatWeekViewHourColumn: function (date) { return 'testWH'; },
                formatDayViewHourColumn: function (date) { return 'testDH'; },
                formatDayViewTitle: function (date) { return 'testDT'; }
            }
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
    }
    ;
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    // loadEvents() {
    //   this.eventSource = this.createRandomEvents();
    //   console.log(this.eventSource);
    // }
    CalendarPage.prototype.getJson = function () {
        var _this = this;
        return this.http.get(this.dataUrl).subscribe(function (_data) {
            _this.eventSource = _data;
            // console.log("Summary: " + this.eventSource.items.summary);
            // console.log("Start: " + this.eventSource.items.start);
            // console.log("End: " + this.eventSource.items.end);
        });
        // .map(res => res.json())
        ;
    };
    // getDatas() {
    //   this.getJson().subscribe(_data => {
    //     this.test = _data;
    //     console.log(this.test);
    //   });
    //   return this.test;
    // }
    // createDatas() {
    //   var data: any;
    //   data = this.getDatas();
    //   var event = [];
    //   event.push({
    //     title: data.summary,
    //     startTime: data.start,
    //     endTime: data.end,
    //     allDay: false
    //   })
    //   console.log(event);
    //   return event;
    // }
    // loadDatas() {
    //   this.dataSource = this.createDatas();
    //   console.log(this.dataSource);
    // }
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalendarPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    CalendarPage.prototype.createRandomEvents = function () {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
            }
            else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
            }
        }
        return events;
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/calendar/calendar.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n            <button ion-button (click)="findAllShows()">Test</button>\n            <button ion-button (click)="getJson()">Data</button>\n\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar color="primary" no-border-top>\n        <ion-segment color="light" [(ngModel)]="mode">\n            <ion-segment-button value="Month" (click)="changeMode(\'month\')">\n                Month\n            </ion-segment-button>\n            <ion-segment-button value="Week" (click)="changeMode(\'week\')">\n                Week\n            </ion-segment-button>\n            <ion-segment-button value="Day" (click)="changeMode(\'day\')">\n                Day\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="has-header">\n    <calendar [eventSource]="eventSource" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" (onCurrentDateChanged)="onCurrentDateChanged($event)"\n        (onTitleChanged)="onViewTitleChanged($event)" startHour="7" endHour="20" step="30">\n    </calendar>\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/calendar/calendar.html"*/,
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], CalendarPage);
    return CalendarPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDetailsPage = (function () {
    function ContactDetailsPage(navCtrl, navParams, callNumber) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.callNumber = callNumber;
    }
    ContactDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactDetailsPage');
        this.name = this.navParams.get('name');
        this.type = this.navParams.get('type');
        this.aptitude = this.navParams.get('aptitude');
        this.gender = this.navParams.get('gender');
        this.phone = this.navParams.get('phone');
        this.email = this.navParams.get('email');
        this.picture = this.navParams.get('picture');
    };
    ContactDetailsPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ContactDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact-details',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/contact-details/contact-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>ข้อมูลรายชื่อ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-row class="logo-row">\n\n    <ion-col item-start>\n\n      <img class="avatar" style="width:40%;" src="{{picture}}" />\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      ชื่อ : {{name}}\n\n    </ion-item>\n\n    <ion-item>\n\n      โทรศัพท์ : {{phone}}\n\n      <ion-icon name="call" (click)="call(phone)" item-end></ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n      E-mail : {{email}}\n\n    </ion-item>\n\n    <ion-item>\n\n      เพศ : {{gender}}&emsp;&emsp;งาน : {{type}}\n\n    </ion-item>\n\n    <ion-item>\n\n      ความเชี่ยวชาญ : {{aptitude}}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/contact-details/contact-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactDetailsPage);
    return ContactDetailsPage;
}());

//# sourceMappingURL=contact-details.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_details_contact_details__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, afDB, callNumber) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.callNumber = callNumber;
        this.contactsData = [];
        this.afDB.list("/contacts/").valueChanges().subscribe(function (_data) {
            _this.contactsData = _data;
            console.log(_this.contactsData);
        });
    }
    ContactPage.prototype.openNavSubContact = function (contact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_details_contact_details__["a" /* ContactDetailsPage */], {
            name: contact.name,
            type: contact.type,
            phone: contact.phone,
            aptitude: contact.aptitude,
            gender: contact.gender,
            email: contact.email,
            picture: contact.picture
        });
    };
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>รายชื่อ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item-group *ngFor="let contact of contactsData">\n\n    <ion-item>\n\n      <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n        <img src="{{contact.picture}}" />\n\n      </ion-avatar>\n\n      <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n      <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n      <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n    </ion-item>\n\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var LoginPage = (function () {
    function LoginPage(toast, navCtrl, menu, navParams, alertCtrl, loadingCtrl, afAuth) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.user = {};
        this.menu.enable(false);
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.menu.enable(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                            this.afAuth.authState.subscribe(function (data) {
                                if (data && data.email && data.uid) {
                                    _this.toast.create({
                                        message: "Welcome " + data.email,
                                        duration: 3000
                                    }).present();
                                }
                            });
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        alert_1 = this.alertCtrl.create({
                            title: 'Alert!',
                            subTitle: 'the email / password combination is not valid',
                            buttons: ['OK']
                        });
                        alert_1.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_2, alert_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.menu.enable(true);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.error(e_2);
                        alert_2 = this.alertCtrl.create({
                            title: 'Alert!',
                            subTitle: 'the email / password combination is not valid',
                            buttons: ['OK']
                        });
                        alert_2.present();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/login/login.html"*/'<ion-content class="login-content">\n\n    <ion-row class="logo-row">\n\n        <ion-col>\n\n            <img style="width:150px;" src="assets/imgs/logo.png" />\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <div>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-list inset>\n\n                    <ion-item>\n\n                        <ion-input type="email" [(ngModel)]="user.email" placeholder="Email" required></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input type="password" [(ngModel)]="user.password" placeholder="Password" required></ion-input>\n\n                    </ion-item>\n\n                    <ion-buttons end>\n\n                        <button ion-button color="light" clear>forget password</button>\n\n                    </ion-buttons>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col class="submit-col">\n\n                <button ion-button medium class="submit-btn" (click)="login(user)" full>Login</button>\n\n            </ion-col>\n\n            <ion-col class="submit-col">\n\n                <button ion-button medium class="submit-btn" (click)="register(user)" full>Register</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, afAuth, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDB = afDB;
        this.profile = {};
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.createProfile = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (auth) {
            _this.afDB.object("profiles/" + auth.uid).update(_this.profile)
                .then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]); });
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ข้อมูลส่วนตัว</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label floating>Username</ion-label>\n    <ion-input [(ngModel)]="profile.username"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>First Name</ion-label>\n    <ion-input [(ngModel)]="profile.firstname"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Last Name</ion-label>\n    <ion-input [(ngModel)]="profile.lastname"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Ward</ion-label>\n    <ion-input [(ngModel)]="profile.ward"></ion-input>\n  </ion-item>\n\n  <button ion-button class="submit" (click)="createProfile()" round full>Create Profile</button>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 526;

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bed-details/bed-details.module": [
		1886,
		5
	],
	"../pages/calendar/calendar.module": [
		1887,
		4
	],
	"../pages/contact-details/contact-details.module": [
		1888,
		3
	],
	"../pages/contact/contact.module": [
		1889,
		2
	],
	"../pages/login/login.module": [
		1890,
		1
	],
	"../pages/profile/profile.module": [
		1891,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 570;
module.exports = webpackAsyncContext;

/***/ })

},[1054]);
//# sourceMappingURL=main.js.map