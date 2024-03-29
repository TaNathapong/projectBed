webpackJsonp([8],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bed_details_bed_details__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logs_logs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(53);
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
    function HomePage(global, navCtrl, afDB, afAuth) {
        var _this = this;
        this.global = global;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.bedsData = [];
        this.profileData = {};
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                // Get user's details from firebase
                _this.afDB.object("profiles/" + data.uid).valueChanges().subscribe(function (_data) {
                    _this.profileData = _data;
                });
                // Get data of wards from firebase
                _this.afDB.list("/wards/").valueChanges().subscribe(function (_data) {
                    _this.bedsData = _data;
                });
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    // Go to BedDetailsPage
    HomePage.prototype.openNavDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bed_details_bed_details__["a" /* BedDetailsPage */]);
    };
    // Go to LogsPage
    HomePage.prototype.openLogsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__logs_logs__["a" /* LogsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>รพ.ศรีนครินทร์</ion-title>\n\n        <ion-buttons end>\n\n            <button ion-button (click)="openLogsPage()"> ประวัติ &nbsp;</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="home-content">\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-3>\n\n                <b>วอร์ด</b>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <b>เตียงว่าง</b>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <b>อัปเดตล่าสุด</b>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <!-- Loop -->\n\n        <ion-row *ngFor="let bed of bedsData">\n\n            <ion-col col-3>\n\n                <div>{{bed.name}}</div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <div>{{bed.blank}}</div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div class="time">{{bed.time | date:\'dd/M/yy - HH:mm น.\'}}</div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <!-- If -->\n\n    <ion-fab *ngIf="profileData.role" bottom right>\n\n        <button (click)="openNavDetailsPage()" ion-fab color="primary">\n\n            <ion-icon name="md-create"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateCalendarPage = (function () {
    function CreateCalendarPage(global, navCtrl, http, alertCtrl, navParams) {
        this.global = global;
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.calendarEvent = {};
        this.validation = {};
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.global.access_token
            })
        };
        this.CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com'; // Calendar group
        this.dataUrl = 'https://www.googleapis.com/calendar/v3/calendars/' + this.CALENDAR_ID + '/events'; // Url use to create evnet 
    }
    CreateCalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateCalendarPage');
    };
    CreateCalendarPage.prototype.addEvent = function () {
        var _this = this;
        if (!this.validate()) {
            var alert_1 = this.alertCtrl.create({
                title: 'รายการไม่ถูกต้อง!',
                subTitle: 'กรุณากรอกข้อมูล',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var startDateTimeISO = this.buildISODate(this.calendarEvent.startDate, this.calendarEvent.startTime);
            var enddateTimeISO = this.buildISODate(this.calendarEvent.endDate, this.calendarEvent.endTime);
            var body = {
                "summary": this.calendarEvent.name,
                "description": this.calendarEvent.description,
                "start": {
                    "dateTime": startDateTimeISO,
                    "timeZone": "Asia/Bangkok"
                },
                "end": {
                    "dateTime": enddateTimeISO,
                    "timeZone": "Asia/Bangkok"
                }
            };
            this.http.post(this.dataUrl, body, this.httpOptions).subscribe(function (res) {
                var alert = _this.alertCtrl.create({
                    title: 'รายการสำเร็จ!',
                    subTitle: 'บันทึกข้อมูลเสร็จสิ้น',
                    buttons: ['OK']
                });
                alert.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */]); // Go to CalendarPage
            }, function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: error.name,
                    subTitle: error.message,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    // Build date to ISO 8601 format
    CreateCalendarPage.prototype.buildISODate = function (date, time) {
        var dateArray = date && date.split('-');
        var timeArray = time && time.split(':');
        var normalDate = new Date(parseInt(dateArray[0]), parseInt(dateArray[1]) - 1, parseInt(dateArray[2]), parseInt(timeArray[0]), parseInt(timeArray[1]), 0, 0);
        return normalDate.toISOString();
    };
    // Validate input
    CreateCalendarPage.prototype.validate = function () {
        return this.isStringValid(this.calendarEvent.name) &&
            this.isStringValid(this.calendarEvent.startDate) &&
            this.isStringValid(this.calendarEvent.startTime) &&
            this.isStringValid(this.calendarEvent.endDate) &&
            this.isStringValid(this.calendarEvent.endTime);
    };
    // Check if input have value
    CreateCalendarPage.prototype.isStringValid = function (str) {
        if (typeof str != 'undefined' && str) {
            return true;
        }
        ;
        return false;
    };
    CreateCalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar-create',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/calendar-create/calendar-create.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>สร้างตารางนัดหมาย</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="calendar-create-content">\n    <ion-list>\n        <ion-item-group>\n            <ion-item style="background: transparent;">\n                <ion-label floating>Name</ion-label>\n                <ion-input type="text" [(ngModel)]="calendarEvent.name"></ion-input>\n            </ion-item>\n            <ion-item style="background: transparent;">\n                <ion-label floating>Description</ion-label>\n                <ion-input type="text" [(ngModel)]="calendarEvent.description"></ion-input>\n            </ion-item>\n\n            <ion-row>\n                <ion-item style="background: transparent;" col-6>\n                    <ion-label floating>Start Date</ion-label>\n                    <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="calendarEvent.startDate"></ion-datetime>\n                </ion-item>\n                <ion-item style="background: transparent;" class="line" col-6>\n                    <ion-label floating>Start Time</ion-label>\n                    <ion-datetime displayFormat="HH:mm น." pickerFormat="HH:mm" min="07:00" max="20:00" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55"\n                        [(ngModel)]="calendarEvent.startTime"></ion-datetime>\n                </ion-item>\n            </ion-row>\n\n            <ion-row>\n                <ion-item style="background: transparent;" col-6>\n                    <ion-label floating>End Date</ion-label>\n                    <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMMM YYYY" [min]="calendarEvent.startDate" [(ngModel)]="calendarEvent.endDate"></ion-datetime>\n                </ion-item>\n                <ion-item style="background: transparent;" class="line" col-6>\n                    <ion-label floating>End Time</ion-label>\n                    <ion-datetime displayFormat="HH:mm น." pickerFormat="HH:mm" min="07:00" max="20:00" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55"\n                        [min]="calendarEvent.startTime" [(ngModel)]="calendarEvent.endTime"></ion-datetime>\n                </ion-item>\n            </ion-row>\n\n        </ion-item-group>\n    </ion-list>\n\n    <div style="text-align:right;">\n        <button ion-button primary (click)="addEvent()">สร้าง</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/calendar-create/calendar-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CreateCalendarPage);
    return CreateCalendarPage;
}());

//# sourceMappingURL=calendar-create.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(83);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.bedsData = [];
        this.profileData = {};
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                // Get user's details from firebase                
                _this.afDB.object("profiles/" + data.uid).valueChanges().subscribe(function (_data) {
                    _this.profileData = _data;
                });
                // Get data of wards from firebase                
                _this.afDB.list("/wards/").valueChanges().subscribe(function (_data) {
                    _this.bedsData = _data;
                });
            }
        });
    }
    BedDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BedDetailsPage');
    };
    // Update bed by resident in ward
    BedDetailsPage.prototype.updateBed = function (bed) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "\u0E27\u0E2D\u0E23\u0E4C\u0E14\u0E17\u0E35\u0E48 " + bed.id,
            message: "กรอกจำนวนเตียงที่ว่าง",
            inputs: [
                {
                    name: 'blank',
                    placeholder: 'จำนวนเตียงที่ว่าง',
                    type: 'number'
                },
            ],
            buttons: [
                {
                    text: 'ยกเลิก',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: 'ยืนยัน',
                    handler: function (data) {
                        if (data.blank != '') {
                            _this.afDB.list('/updateLogs/').push({
                                type: 'อัปเดต',
                                detail: "\u0E2D\u0E31\u0E1B\u0E40\u0E14\u0E15\u0E08\u0E32\u0E01\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name + " \u0E08\u0E32\u0E01\u0E40\u0E14\u0E34\u0E21 " + bed.blank + " \u0E40\u0E1B\u0E47\u0E19 " + data.blank,
                                ward: bed.name,
                                before: bed.blank,
                                after: data.blank,
                                timestamp: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP
                            });
                            _this.afDB.object('/wards/' + bed.id).update({
                                blank: data.blank,
                                time: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP // Time use firebase timestamp
                            });
                            var alert_1 = _this.alertCtrl.create({
                                title: 'บันทึกข้อมูลสำเร็จ',
                                subTitle: 'อัพเดทจำนวนเตียงว่างเสร็จสิ้น',
                                buttons: ['OK']
                            });
                            alert_1.present();
                            console.log('Save complete');
                        }
                        else {
                            var alert_2 = _this.alertCtrl.create({
                                title: 'รายการไม่ถูกต้อง!',
                                subTitle: 'กรุณากรอกจำนวนเตียง',
                                buttons: ['OK']
                            });
                            alert_2.present();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    // Add Patient to ward
    BedDetailsPage.prototype.addPatient = function (bed) {
        var _this = this;
        if (bed.blank > 0) {
            this.afDB.list('/updateLogs/').push({
                type: 'นำผู้ป่วยเข้า',
                detail: "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name + " \u0E08\u0E32\u0E01\u0E40\u0E14\u0E34\u0E21 " + bed.blank + " \u0E40\u0E1B\u0E47\u0E19 " + (bed.blank - 1),
                ward: bed.name,
                before: bed.blank,
                after: bed.blank - 1,
                timestamp: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP
            });
            var confirm_1 = this.alertCtrl.create({
                title: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E40\u0E02\u0E49\u0E32?",
                message: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name,
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
                            _this.afDB.object('/wards/' + bed.id).update({
                                blank: bed.blank - 1,
                                time: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP
                            });
                            var alert = _this.alertCtrl.create({
                                title: 'บันทึกข้อมูลสำเร็จ',
                                subTitle: 'อัพเดทจำนวนเตียงว่างเสร็จสิ้น',
                                buttons: ['OK']
                            });
                            alert.present();
                            console.log('Save complete');
                        }
                    }
                ]
            });
            confirm_1.present();
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'รายการไม่ถูกต้อง!',
                subTitle: "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name + " \u0E44\u0E14\u0E49\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E15\u0E35\u0E22\u0E07\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E07\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49",
                buttons: ['OK']
            });
            alert_3.present();
        }
    };
    BedDetailsPage.prototype.removePatient = function (bed) {
        var _this = this;
        this.afDB.list('/updateLogs/').push({
            type: 'ลดผู้ป่วยออก',
            detail: "\u0E25\u0E14\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name + " \u0E08\u0E32\u0E01\u0E40\u0E14\u0E34\u0E21 " + bed.blank + " \u0E40\u0E1B\u0E47\u0E19 " + (bed.blank + 1),
            ward: bed.name,
            before: bed.blank,
            after: bed.blank + 1,
            timestamp: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP
        });
        var confirm = this.alertCtrl.create({
            title: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E14\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E2D\u0E2D\u0E01?",
            message: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E14\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name,
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
                            blank: bed.blank + 1,
                            time: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP
                        });
                        var alert = _this.alertCtrl.create({
                            title: 'รายการสำเร็จ',
                            subTitle: 'อัพเดทจำนวนเตียงว่างเสร็จสิ้น',
                            buttons: ['OK']
                        });
                        alert.present();
                        console.log('Save complete');
                    }
                }
            ]
        });
        confirm.present();
    };
    BedDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bed-details',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/bed-details/bed-details.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>จัดการเตียงผู้ป่วย</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bed-details-content">\n\n    <ion-grid>\n\n        <div *ngIf="profileData.role == \'Admin\' || profileData.role == \'Admission Center\'">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <b>วอร์ด</b>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <b>เตียงว่าง</b>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <b>นำผู้ป่วยเข้า/ออก</b>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngFor="let bed of bedsData">\n\n                <ion-col col-3>\n\n                    <div>{{bed.name}}</div>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <div>{{bed.blank}}</div>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <b class="add" (click)="addPatient(bed)">\n\n                        <ion-icon name="add-circle"> เข้า&nbsp;</ion-icon>\n\n                    </b>\n\n                    <b class="reduce" (click)="removePatient(bed)">\n\n                        <ion-icon name="remove-circle"> ออก </ion-icon>\n\n                    </b>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n\n\n        <div *ngIf="profileData.role == \'Resident\'">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <b>วอร์ด</b>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <b>เตียงว่าง</b>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <b>แก้ไขจำนวน</b>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngFor="let bed of bedsData">\n\n                <ion-row *ngIf="bed.name == profileData.ward">\n\n                    <ion-col col-3>\n\n                        <div>{{bed.name}}</div>\n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                        <div>{{bed.blank}}</div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div (click)="updateBed(bed)">\n\n                            <b class="add">\n\n                                <ion-icon name="add-circle"> ปรับจำนวน</ion-icon>\n\n                            </b>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/bed-details/bed-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], BedDetailsPage);
    return BedDetailsPage;
}());

//# sourceMappingURL=bed-details.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(135);
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
    // Get data from contact page
    ContactDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactDetailsPage');
        this.name = this.navParams.get('name');
        this.type = this.navParams.get('type');
        this.ward = this.navParams.get('ward');
        this.aptitude = this.navParams.get('aptitude');
        this.gender = this.navParams.get('gender');
        this.phone = this.navParams.get('phone');
        this.email = this.navParams.get('email');
        this.picture = this.navParams.get('picture');
    };
    // Call by use mobile system
    ContactDetailsPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer'); })
            .catch(function () { return console.log('Error launching dialer!'); });
    };
    ContactDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-details',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/contact-details/contact-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>ข้อมูลรายชื่อ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contact-details">\n\n\n\n  <ion-row class="logo-row">\n\n    <ion-col item-start>\n\n      <img class="avatar" style="width:40%;" src="{{picture}}" />\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item style="background: transparent;">\n\n      ชื่อ : {{name}}\n\n    </ion-item>\n\n    <ion-item style="background: transparent;">\n\n      โทรศัพท์ : {{phone}}\n\n      <ion-icon ios="ios-call" md="md-call" (click)="call(phone)" item-end></ion-icon>\n\n    </ion-item>\n\n    <ion-item style="background: transparent;">\n\n      E-mail : {{email}}\n\n    </ion-item>\n\n    <ion-item style="background: transparent;">\n\n      วอร์ด : {{ward}}\n\n    </ion-item>\n\n    <ion-item style="background: transparent;">\n\n      ความเชี่ยวชาญ : {{aptitude}}\n\n    </ion-item>\n\n    <ion-item style="background: transparent;">\n\n      เพศ : {{gender}}\n\n    </ion-item>\n\n    <ion-item style="background: transparent;">\n\n      งาน : {{type}}\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/contact-details/contact-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactDetailsPage);
    return ContactDetailsPage;
}());

//# sourceMappingURL=contact-details.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_details_contact_details__ = __webpack_require__(161);
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
        this.items = [];
        this.contactRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/contacts'); // Reference database location
        this.contactRef.on('value', function (contactList) {
            var contacts = [];
            contactList.forEach(function (contact) {
                contacts.push(contact.val());
                return false;
            });
            _this.contactList = contacts;
            _this.loadedContactList = contacts;
        });
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.initializeItems = function () {
        this.contactList = this.loadedContactList;
    };
    // Go and send data to ContactDetailsPage
    ContactPage.prototype.openNavSubContact = function (contact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_details_contact_details__["a" /* ContactDetailsPage */], {
            name: contact.name,
            type: contact.type,
            ward: contact.ward,
            phone: contact.phone,
            aptitude: contact.aptitude,
            gender: contact.gender,
            email: contact.email,
            picture: contact.picture
        });
    };
    ContactPage.prototype.initializeContacts = function () {
        var _this = this;
        // Get contact from firebase
        this.afDB.list("/contacts/").valueChanges().subscribe(function (_data) {
            _this.contactList = _data;
        });
    };
    ContactPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.contactList = this.contactList.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    // Call by use mobile system
    ContactPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer'); })
            .catch(function () { return console.log('Error launching dialer!'); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/contact/contact.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>รายชื่อ</ion-title>\n\n    </ion-navbar>\n\n    <ion-searchbar class="searchbar" [showCancelButton]="shouldShowCancel" (ionInput)="getItems($event)"></ion-searchbar>\n\n</ion-header>\n\n\n\n<ion-content class="contact-content">\n\n    <ion-list>\n\n        <ion-item-group>\n\n\n\n            <ion-item-divider sticky>\n\n                <ion-label> 4ก </ion-label>\n\n            </ion-item-divider>\n\n            <ion-item-group *ngFor="let contact of contactList">\n\n                <ion-item style="background: transparent;" *ngIf="contact.ward == \'4ก\'">\n\n                    <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                        <img src="{{contact.picture}}" />\n\n                    </ion-avatar>\n\n                    <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n                    <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n                    <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-item-group>\n\n\n\n            <ion-item-divider sticky>\n\n                <ion-label> 4ข </ion-label>\n\n            </ion-item-divider>\n\n            <ion-item-group *ngFor="let contact of contactList">\n\n                <ion-item style="background: transparent;" *ngIf="contact.ward == \'4ข\'">\n\n                    <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                        <img src="{{contact.picture}}" />\n\n                    </ion-avatar>\n\n                    <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n                    <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n                    <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-item-group>\n\n\n\n            <ion-item-divider sticky>\n\n                <ion-label> 4ค </ion-label>\n\n            </ion-item-divider>\n\n            <ion-item-group *ngFor="let contact of contactList">\n\n                <ion-item style="background: transparent;" *ngIf="contact.ward == \'4ค\'">\n\n                    <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                        <img src="{{contact.picture}}" />\n\n                    </ion-avatar>\n\n                    <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n                    <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n                    <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-item-group>\n\n\n\n            <ion-item-divider sticky>\n\n                <ion-label> AE3 </ion-label>\n\n            </ion-item-divider>\n\n            <ion-item-group *ngFor="let contact of contactList">\n\n                <ion-item style="background: transparent;" *ngIf="contact.ward == \'AE3\'">\n\n                    <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                        <img src="{{contact.picture}}" />\n\n                    </ion-avatar>\n\n                    <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n                    <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n                    <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-item-group>\n\n\n\n            <ion-item-divider sticky>\n\n                <ion-label> สว9A </ion-label>\n\n            </ion-item-divider>\n\n            <ion-item-group *ngFor="let contact of contactList">\n\n                <ion-item style="background: transparent;" *ngIf="contact.ward == \'สว9A\'">\n\n                    <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                        <img src="{{contact.picture}}" />\n\n                    </ion-avatar>\n\n                    <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n                    <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n                    <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-item-group>\n\n\n\n            <ion-item-divider sticky>\n\n                <ion-label> สว9B </ion-label>\n\n            </ion-item-divider>\n\n            <ion-item-group *ngFor="let contact of contactList">\n\n                <ion-item style="background: transparent;" *ngIf="contact.ward == \'สว9B\'">\n\n                    <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                        <img src="{{contact.picture}}" />\n\n                    </ion-avatar>\n\n                    <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n                    <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n                    <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-item-group>\n\n\n\n            <ion-item-divider sticky>\n\n                <ion-label> MICU1 </ion-label>\n\n            </ion-item-divider>\n\n            <ion-item-group *ngFor="let contact of contactList">\n\n                <ion-item style="background: transparent;" *ngIf="contact.ward == \'MICU1\'">\n\n                    <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                        <img src="{{contact.picture}}" />\n\n                    </ion-avatar>\n\n                    <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n                    <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n                    <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-item-group>\n\n\n\n            <ion-item-divider sticky>\n\n                <ion-label> MICU2 </ion-label>\n\n            </ion-item-divider>\n\n            <ion-item-group *ngFor="let contact of contactList">\n\n                <ion-item style="background: transparent;" *ngIf="contact.ward == \'MICU2\'">\n\n                    <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                        <img src="{{contact.picture}}" />\n\n                    </ion-avatar>\n\n                    <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n                    <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n                    <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-item-group>\n\n\n\n            <ion-item-divider sticky>\n\n                <ion-label> CCU </ion-label>\n\n            </ion-item-divider>\n\n            <ion-item-group *ngFor="let contact of contactList">\n\n                <ion-item style="background: transparent;" *ngIf="contact.ward == \'CCU\'">\n\n                    <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                        <img src="{{contact.picture}}" />\n\n                    </ion-avatar>\n\n                    <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n                    <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n                    <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n                </ion-item>\n\n            </ion-item-group>\n\n\n\n        </ion-item-group>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resetpwd_resetpwd__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(53);
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
    function LoginPage(global, toast, navCtrl, menu, navParams, alertCtrl, afDB, afAuth) {
        this.global = global;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.user = {};
        this.authState = null;
        // Hide side menu
        this.menu.enable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        // Check user sign in with Google. If true will go to homepage
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().getRedirectResult().then(function (result) {
                    if (result.user) {
                        _this.global.access_token = result.credential.accessToken; // Get access_token use to manage google calendar
                        _this.afAuth.authState.subscribe(function (data) {
                            if (data && data.email && data.uid) {
                                _this.toast.create({
                                    message: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A " + data.displayName,
                                    duration: 3000
                                }).present();
                            }
                        });
                        _this.menu.enable(true); // Enable side menu
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]); // Go to Home page
                    }
                });
            }
        });
    };
    // Go to Resetpwd page
    LoginPage.prototype.openNavResetpwdPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__resetpwd_resetpwd__["a" /* ResetpwdPage */]);
    };
    // Sign in firebase with Email
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert_1;
            return __generator(this, function (_a) {
                try {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signInWithEmailAndPassword(user.email, user.password).then(function (result) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]); // Go to Home page
                        _this.menu.enable(true); // Enable side menu
                        _this.afAuth.authState.subscribe(function (data) {
                            if (data && data.email && data.uid) {
                                _this.toast.create({
                                    message: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A " + data.email,
                                    duration: 3000
                                }).present();
                            }
                        });
                    }).catch(function (error) {
                        var alert = _this.alertCtrl.create({
                            title: 'Error!',
                            subTitle: error.message,
                            buttons: ['OK']
                        });
                        alert.present();
                    });
                }
                catch (error) {
                    alert_1 = this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: error.message,
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                ;
                return [2 /*return*/];
            });
        });
    };
    // Sign in firebase with Google
    LoginPage.prototype.googleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var provider;
            return __generator(this, function (_a) {
                provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/calendar'); // Add scope to get permission to manage google calendar
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signInWithRedirect(provider).then(function () {
                    return __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().getRedirectResult();
                }).then(function (result) {
                    _this.authState = result.user;
                    _this.updateUserData();
                }).catch(function (error) {
                    var alert = _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: error.message,
                        buttons: ['OK']
                    });
                    alert.present();
                });
                return [2 /*return*/];
            });
        });
    };
    // Get user detail from google to store in firebase
    LoginPage.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        var path = "profiles/" + this.currentUserId; // Endpoint on firebase
        var data = {
            email: this.authState.email,
            name: this.authState.displayName,
            picture: this.authState.photoURL
        };
        this.afDB.object(path).update(data).catch(function (error) { return console.log(error); });
    };
    Object.defineProperty(LoginPage.prototype, "authenticated", {
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPage.prototype, "currentUserId", {
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/login/login.html"*/'<ion-content class="login-content" padding>\n\n    <ion-row class="logo-row">\n\n        <ion-col>\n\n            <img style="width:50%" src="assets/imgs/logo.png" />\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-list padding-left padding-right>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n\n            </ion-label>\n\n            <ion-input type="email" [(ngModel)]="user.email" placeholder="Email" required></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon ios="ios-key" md="md-key"></ion-icon>\n\n            </ion-label>\n\n            <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n\n            <ion-input type="password" [(ngModel)]="user.password" placeholder="Password" required></ion-input>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-row padding-left padding-right>\n\n        <button ion-button block color="primary" (click)="login(user)">Login</button>\n\n    </ion-row>\n\n\n\n    <ion-row padding-left padding-right>\n\n        <button ion-button icon-left block color="danger" (click)="googleLogin()">\n\n            <ion-icon ios="logo-google" md="logo-google"></ion-icon> Sign In With Google\n\n        </button>\n\n    </ion-row>\n\n\n\n    <div style="text-align:right;" padding>\n\n        <u (click)="openNavResetpwdPage()" end>Forgot Password?</u>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LogsPage = (function () {
    function LogsPage(navCtrl, navParams, afDB) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDB = afDB;
        this.today = new Date();
        this.logs = [];
        // Get logs from firebase
        this.afDB.list("/updateLogs/").valueChanges().subscribe(function (_data) {
            _this.logs = _data;
        });
    }
    LogsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogsPage');
    };
    LogsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logs',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/logs/logs.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>ประวัติการแก้ไขวันที่ {{today | date:\'dd/M/yy\'}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="log-content">\n    <ion-grid>\n        <ion-row>\n            <ion-col col-3>\n                <b>เวลา</b>\n            </ion-col>\n            <ion-col col-3>\n                <b>ประเภท</b>\n            </ion-col>\n            <ion-col col-2>\n                <b>วอร์ด</b>\n            </ion-col>\n            <ion-col col-2>\n                <b>เดิม</b>\n            </ion-col>\n            <ion-col col-2>\n                <b>ใหม่</b>\n            </ion-col>\n        </ion-row>\n        <div *ngFor="let log of logs">\n            <ion-row *ngIf="(log.timestamp | date:\'EEEE d MMMM\') == (today | date:\'EEEE d MMMM\')">\n                <ion-col col-3>\n                    <div>{{log.timestamp | date:\'HH:mm:ss น.\'}}</div>\n                </ion-col>\n                <ion-col col-3 *ngIf=" log.type==\'นำผู้ป่วยเข้า\'">\n                    <div class="blue ">{{log.type}}</div>\n                </ion-col>\n                <ion-col col-3 *ngIf="log.type==\'ลดผู้ป่วยออก\'">\n                    <div class="red ">{{log.type}}</div>\n                </ion-col>\n                <ion-col col-3 *ngIf="log.type==\'อัปเดต\'">\n                    <div>{{log.type}}</div>\n                </ion-col>\n                <ion-col col-2>\n                    <div>{{log.ward}}</div>\n                </ion-col>\n                <ion-col col-2>\n                    <div>{{log.before}}</div>\n                </ion-col>\n                <ion-col col-2>\n                    <div>{{log.after}}</div>\n                </ion-col>\n            </ion-row>\n        </div>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/logs/logs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], LogsPage);
    return LogsPage;
}());

//# sourceMappingURL=logs.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(50);
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



var ResetpwdPage = (function () {
    function ResetpwdPage(alertCtrl, afAuth) {
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
    }
    ResetpwdPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResetpwdPage');
    };
    // Reset firebase password by send Email to confirm new password
    ResetpwdPage.prototype.resetPwd = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                confirm = this.alertCtrl.create({
                    title: "Reset Password",
                    message: "ท่านต้องการยืนยันการส่งอีเมลการรีเซ็ตรหัสผ่านหรือไม่?",
                    buttons: [
                        {
                            text: 'ปฏิเสธ',
                            handler: function () {
                                console.log('Disagree clicked');
                            }
                        },
                        {
                            text: 'ยืนยัน',
                            handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var alert_1;
                                return __generator(this, function (_a) {
                                    console.log('Agree clicked');
                                    try {
                                        this.afAuth.auth.sendPasswordResetEmail(email) // Send Email
                                            .then(function (res) {
                                            console.log("Email sent");
                                            var alert = _this.alertCtrl.create({
                                                title: 'Email sent!',
                                                subTitle: 'Email sent compete',
                                                buttons: ['OK']
                                            });
                                            alert.present();
                                        });
                                    }
                                    catch (e) {
                                        console.error(e);
                                        alert_1 = this.alertCtrl.create({
                                            title: 'Error!',
                                            subTitle: e.message,
                                            buttons: ['OK']
                                        });
                                        alert_1.present();
                                    }
                                    return [2 /*return*/];
                                });
                            }); }
                        }
                    ]
                });
                confirm.present();
                return [2 /*return*/];
            });
        });
    };
    ResetpwdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resetpwd',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/resetpwd/resetpwd.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Reset Password</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="reset-content" padding>\n    <ion-list padding-left padding-right padding-top>\n        <ion-item>\n            <ion-label>\n                <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n            </ion-label>\n            <ion-input type="email" [(ngModel)]="email" placeholder="Email Address" required></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <ion-row padding-left padding-right>\n        <button ion-button block color="danger" (click)="resetPwd(email)">Reset Password</button>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/resetpwd/resetpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ResetpwdPage);
    return ResetpwdPage;
}());

//# sourceMappingURL=resetpwd.js.map

/***/ }),

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bed-details/bed-details.module": [
		527,
		7
	],
	"../pages/calendar-create/calendar-create.module": [
		526,
		6
	],
	"../pages/calendar/calendar.module": [
		528,
		5
	],
	"../pages/contact-details/contact-details.module": [
		529,
		4
	],
	"../pages/contact/contact.module": [
		530,
		3
	],
	"../pages/login/login.module": [
		531,
		2
	],
	"../pages/logs/logs.module": [
		533,
		1
	],
	"../pages/resetpwd/resetpwd.module": [
		532,
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
webpackAsyncContext.id = 270;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebase_config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_resetpwd_resetpwd__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_logs_logs__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_calendar_calendar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_calendar_create_calendar_create__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_bed_details_bed_details__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_contact_details_contact_details__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_call_number__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_global_global__ = __webpack_require__(53);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_resetpwd_resetpwd__["a" /* ResetpwdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_logs_logs__["a" /* LogsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_calendar_create_calendar_create__["a" /* CreateCalendarPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_bed_details_bed_details__["a" /* BedDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_details_contact_details__["a" /* ContactDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                    links: [
                        { loadChildren: '../pages/calendar-create/calendar-create.module#CreateCalendarPageModule', name: 'CreateCalendarPage', segment: 'calendar-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bed-details/bed-details.module#BedDetailsPageModule', name: 'BedDetailsPage', segment: 'bed-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-details/contact-details.module#ContactDetailsPageModule', name: 'ContactDetailsPage', segment: 'contact-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpwd/resetpwd.module#ResetpwdPageModule', name: 'ResetpwdPage', segment: 'resetpwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logs/logs.module#LogsPageModule', name: 'LogsPage', segment: 'logs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2__["a" /* AngularFireModule */].initializeApp(firebase_config),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_resetpwd_resetpwd__["a" /* ResetpwdPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_logs_logs__["a" /* LogsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_calendar_create_calendar_create__["a" /* CreateCalendarPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_bed_details_bed_details__["a" /* BedDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_contact_details_contact_details__["a" /* ContactDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_global_global__["a" /* GlobalProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_calendar_calendar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_global__ = __webpack_require__(53);
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
    function MyApp(global, platform, statusBar, alertCtrl, splashScreen, afDB, afAuth) {
        var _this = this;
        this.global = global;
        this.platform = platform;
        this.statusBar = statusBar;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.alertShown = false;
        this.counter = 0;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            // Detect push back Button for exit app
            platform.registerBackButtonAction(function () {
                if (_this.counter == 0) {
                    _this.nav.pop();
                    _this.counter++;
                    setTimeout(function () { _this.counter = 0; }, 1500);
                }
                else {
                    _this.counter = 0;
                    _this.presentConfirm();
                }
            });
        });
        // Page in side menu
        this.pages = [
            { title: 'หน้าแรก', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */] },
            { title: 'รายชื่อบุคลากร', component: __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'ปฏิทินตารางนัดหมาย', component: __WEBPACK_IMPORTED_MODULE_10__pages_calendar_calendar__["a" /* CalendarPage */] }
        ];
        // Get user's details from firebase
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.profileData = _this.afDB.object("profiles/" + data.uid).valueChanges();
            }
        });
    }
    // Exit app alert
    MyApp.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'ออกจากแอพ',
            message: 'ต้องการออกจากโปรแกรมหรือไม่ ?',
            buttons: [
                {
                    text: 'ยกเลิก',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        _this.alertShown = false;
                    }
                },
                {
                    text: 'ตกลง',
                    handler: function () {
                        console.log('Yes clicked');
                        _this.signOut();
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    // Open page in side menu
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    // Sign out from firebase
    MyApp.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signOut();
        this.profileData = null; // remove profileData
        this.global.access_token = null; // remove access_token
        window.location.reload(); // reload app
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/app/app.html"*/'<!-- Side Menu -->\n<ion-menu menuClose [content]="content">\n    <ion-content>\n        <!-- User detail -->\n        <ion-item *ngIf="profileData | async; let profileData; else loading">\n            <ion-avatar style="width:25%" item-start>\n                <img style="width:100%; height:100%" src="{{profileData.picture}}">\n            </ion-avatar>\n            <h2>{{profileData.name}}</h2>\n            <p *ngIf="profileData.role">หน้าที่ : {{profileData.role}}</p>\n            <p *ngIf="!profileData.role">หน้าที่ : Staff</p>\n            <p *ngIf="profileData.ward">วอร์ดที่ : {{profileData.ward}}</p>\n        </ion-item>\n\n        <!-- Show Page -->\n        <ion-list>\n            <button menuClose ion-item *ngFor="let page of pages" (click)="openPage(page)">\n                {{page.title}}\n            </button>\n        </ion-list>\n\n        <!-- Sign Out in footer -->\n        <ion-footer>\n            <button class="signOut" (click)="signOut()" menuClose ion-item>\n                Sign Out\n            </button>\n        </ion-footer>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GlobalProvider = (function () {
    function GlobalProvider(http) {
        this.http = http;
    }
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_create_calendar_create__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalendarPage = (function () {
    function CalendarPage(global, navCtrl, http, alertCtrl) {
        var _this = this;
        this.global = global;
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        // Header of httpclient use to permission calendar
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.global.access_token
            })
        };
        this.API_KEY = 'AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ'; // Google calendar API
        this.CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com'; // Calendar group
        this.dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', this.CALENDAR_ID, '/events?&key=', this.API_KEY].join(''); // Url use to get evnet 
        this.deleteUrl = 'https://www.googleapis.com/calendar/v3/calendars/' + this.CALENDAR_ID + '/events'; // Url use to delete evnet
        this.mode = 'month';
        this.calendar = {
            currentDate: new Date()
        };
        // Detect when click event to show detail
        this.onEventSelected = function (event) {
            var startHour = event.startTime.getHours();
            var startMinute = event.startTime.getMinutes();
            var endHour = event.endTime.getHours();
            var endMinute = event.endTime.getMinutes();
            startHour = _this.checkTime(startHour);
            startMinute = _this.checkTime(startMinute);
            endHour = _this.checkTime(endHour);
            endMinute = _this.checkTime(endMinute);
            var startTime = startHour + ":" + startMinute;
            var endTime = endHour + ":" + endMinute;
            if (event.allDay == true) {
                var confirmAlert = _this.alertCtrl.create({
                    title: event.title,
                    message: "<p>\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 : " + event.description + "</p><p>\u0E23\u0E30\u0E22\u0E30\u0E40\u0E27\u0E25\u0E32 : \u0E17\u0E31\u0E49\u0E07\u0E27\u0E31\u0E19 </p><p>\u0E1C\u0E39\u0E49\u0E2A\u0E23\u0E49\u0E32\u0E07 : " + event.creator + "</p>",
                    buttons: [
                        {
                            text: 'ยกเลิก',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'ลบข้อมูล',
                            handler: function () {
                                var confirmDeleteAlert = _this.alertCtrl.create({
                                    title: 'ยืนยันการลบ',
                                    message: "\u0E17\u0E48\u0E32\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A : " + event.title,
                                    buttons: [
                                        {
                                            text: 'ยกเลิก',
                                            role: 'cancel',
                                            handler: function () {
                                                console.log('Cancel clicked');
                                            }
                                        },
                                        {
                                            text: 'ลบ',
                                            handler: function () {
                                                _this.deleteEvent(event.id);
                                                console.log('ลบข้อมูลที่ :' + event.id);
                                            }
                                        }
                                    ]
                                });
                                confirmDeleteAlert.present();
                            }
                        }
                    ]
                });
                confirmAlert.present();
            }
            else {
                var confirmAlert = _this.alertCtrl.create({
                    title: event.title,
                    message: "<p>\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 : " + event.description + "</p><p>\u0E40\u0E23\u0E34\u0E48\u0E21 : " + startTime + " \u0E19. \u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 : " + endTime + " \u0E19.</p><p>\u0E1C\u0E39\u0E49\u0E2A\u0E23\u0E49\u0E32\u0E07 : " + event.creator + "</p>",
                    buttons: [
                        {
                            text: 'ยกเลิก',
                            role: 'cancel',
                            handler: function () {
                                console.log('Cancel clicked');
                            }
                        },
                        {
                            text: 'ลบข้อมูล',
                            handler: function () {
                                var confirmDeleteAlert = _this.alertCtrl.create({
                                    title: 'ยืนยันการลบ',
                                    message: "\u0E17\u0E48\u0E32\u0E19\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E1A : " + event.title,
                                    buttons: [
                                        {
                                            text: 'ยกเลิก',
                                            role: 'cancel',
                                            handler: function () {
                                                console.log('Cancel clicked');
                                            }
                                        },
                                        {
                                            text: 'ลบ',
                                            handler: function () {
                                                _this.deleteEvent(event.id);
                                                console.log('ลบข้อมูลที่ :' + event.id);
                                            }
                                        }
                                    ]
                                });
                                confirmDeleteAlert.present();
                            }
                        }
                    ]
                });
                confirmAlert.present();
            }
        };
        // Log when click date
        this.onTimeSelected = function (ev) {
            console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
    }
    CalendarPage_1 = CalendarPage;
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
        this.getEvent();
    };
    // go to CreateCalendarPage
    CalendarPage.prototype.openNavCreateCalendarPage = function () {
        if (this.global.access_token) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__calendar_create_calendar_create__["a" /* CreateCalendarPage */]);
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'รายการล้มเหลว!',
                subTitle: 'สิทธิของท่านไม่สามารถเพิ่มปฏิทินได้',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    // Get google calendar event
    CalendarPage.prototype.getEvent = function () {
        var _this = this;
        var data;
        return this.http.get(this.dataUrl).subscribe(function (_data) {
            data = _data['items'];
            var events = [];
            for (var i = 0; i < data.length; i++) {
                var startTime = data[i].start.dateTime; // Start Time of event
                var endTime = data[i].end.dateTime; // End Time of event
                var startDate = data[i].end.date; // Start date of event
                var endDate = data[i].end.date; // End date of event
                if (startDate != undefined) {
                    if (endDate === startDate) {
                        var day = new Date(endDate);
                        startDate = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 0);
                        endDate = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 0);
                    }
                    events.push({
                        id: data[i].id,
                        title: data[i].summary,
                        startTime: startDate,
                        endTime: endDate,
                        allDay: true,
                        creator: data[i].creator.email,
                        description: data[i].description
                    });
                }
                else {
                    events.push({
                        id: data[i].id,
                        title: data[i].summary,
                        startTime: new Date(startTime),
                        endTime: new Date(endTime),
                        allDay: false,
                        creator: data[i].creator.email,
                        description: data[i].description
                    });
                }
            }
            _this.eventSource = events; // Store event to eventSource
        });
    };
    // Delete google calendar event
    CalendarPage.prototype.deleteEvent = function (eventId) {
        var _this = this;
        if (this.global.access_token) {
            this.http.delete(this.deleteUrl + "/" + eventId, this.httpOptions).subscribe(function (res) {
                var alert = _this.alertCtrl.create({
                    title: 'รายการสำเร็จ!',
                    subTitle: 'ลบข้อมูลเสร็จสิ้น',
                    buttons: ['OK']
                });
                alert.present();
                _this.navCtrl.setRoot(CalendarPage_1); // Go to CalendarPage
            }, function (error) {
                var alert = _this.alertCtrl.create({
                    title: error.name,
                    subTitle: error.message,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'รายการล้มเหลว!',
                subTitle: 'สิทธิของท่านไม่สามารถลบปฏิทินได้',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    // Change title auto when click date in calendar
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    // Change mode (day, week, month)
    CalendarPage.prototype.changeMode = function (mode) {
        this.mode = mode;
    };
    // Return to today
    CalendarPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    CalendarPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    // Change time format
    CalendarPage.prototype.checkTime = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    CalendarPage = CalendarPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/calendar/calendar.html"*/'<ion-header>\n    <ion-navbar color="primary" no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title">{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar color="primary" no-border-top>\n        <ion-segment color="light" [(ngModel)]="mode">\n            <ion-segment-button value="month" (click)="changeMode(\'month\')">\n                Month\n            </ion-segment-button>\n            <ion-segment-button value="week" (click)="changeMode(\'week\')">\n                Week\n            </ion-segment-button>\n            <ion-segment-button value="day" (click)="changeMode(\'day\')">\n                Day\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="calendar-content">\n    <!-- Calendar frame -->\n    <calendar [eventSource]="eventSource" [calendarMode]="mode" [currentDate]="calendar.currentDate" startHour="7" endHour="19"\n        (onCurrentDateChanged)="onCurrentDateChanged($event)" (onTitleChanged)="onViewTitleChanged($event)" (onEventSelected)="onEventSelected($event)"\n        (onTimeSelected)="onTimeSelected($event)" step="30">\n    </calendar>\n\n    <ion-fab *ngIf="global.access_token" bottom right>\n        <button (click)="openNavCreateCalendarPage()" ion-fab color="primary">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], CalendarPage);
    return CalendarPage;
    var CalendarPage_1;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

},[323]);
//# sourceMappingURL=main.js.map