webpackJsonp([7],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(267);
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
    function CalendarPage(navCtrl, http, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.API_KEY = 'AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ';
        this.CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';
        this.dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', this.CALENDAR_ID, '/events?&key=', this.API_KEY].join('');
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
        this.onEventSelected = function (event) {
            console.log(event.title);
            // var startDay = event.startTime;
            // var startDate = new Date(startDay.getMonth());
            // var endDay = event.startTime;
            // var endDate = new Date(endDay.getMonth())
            if (event.allDay == true) {
                // var startDay = new Date(event.startTime.getYear());
                // console.log(startDay);
                var alert_1 = _this.alertCtrl.create({
                    title: event.title,
                    subTitle: "<p>\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 : " + event.startTime + "</p><p>\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 : " + event.endTime + "</p><p>\u0E1C\u0E39\u0E49\u0E2A\u0E23\u0E49\u0E32\u0E07 : " + event.creator + "</p>",
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                var alert_2 = _this.alertCtrl.create({
                    title: event.title,
                    subTitle: "<p>\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 : " + event.startTime + "</p><p>\u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14 : " + event.endTime + "</p><p>\u0E1C\u0E39\u0E49\u0E2A\u0E23\u0E49\u0E32\u0E07 : " + event.creator + "</p>",
                    buttons: ['OK']
                });
                alert_2.present();
            }
        };
        this.onTimeSelected = function (ev) {
            console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        this.getEvent();
    }
    ;
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage.prototype.getEvent = function () {
        var _this = this;
        var data;
        return this.http.get(this.dataUrl).subscribe(function (_data) {
            data = _data.items;
            var events = [];
            for (var i = 0; i < data.length; i++) {
                var startTime = data[i].start.dateTime;
                var endTime = data[i].end.dateTime;
                var startDate = data[i].end.date;
                var endDate = data[i].end.date;
                if (startDate != undefined) {
                    if (endDate === startDate) {
                        var day = new Date(endDate);
                        startDate = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 0);
                        endDate = new Date(day.getFullYear(), day.getMonth(), day.getDate() + 0);
                    }
                    events.push({
                        title: data[i].summary,
                        startTime: startDate,
                        endTime: endDate,
                        allDay: true,
                        creator: data[i].creator.email
                    });
                }
                else {
                    events.push({
                        title: data[i].summary,
                        startTime: new Date(startTime),
                        endTime: new Date(endTime),
                        allDay: false,
                        creator: data[i].creator.email
                    });
                }
            }
            _this.eventSource = events;
            console.log(_this.eventSource);
        });
    };
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
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/calendar/calendar.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title">{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar color="primary" no-border-top>\n        <ion-segment color="light" [(ngModel)]="mode">\n            <ion-segment-button value="Month" (click)="changeMode(\'month\')">\n                Month\n            </ion-segment-button>\n            <ion-segment-button value="Week" (click)="changeMode(\'week\')">\n                Week\n            </ion-segment-button>\n            <ion-segment-button value="Day" (click)="changeMode(\'day\')">\n                Day\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <calendar [eventSource]="eventSource" [calendarMode]="calendar.mode" [currentDate]="calendar.currentDate" startHour="7" endHour="19"\n        (onCurrentDateChanged)="onCurrentDateChanged($event)" (onTitleChanged)="onViewTitleChanged($event)" (onEventSelected)="onEventSelected($event)"\n        (onTimeSelected)="onTimeSelected($event)" step="30">\n    </calendar>\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(447);
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
                _this.afDB.list("/wards/").valueChanges().subscribe(function (_data) {
                    _this.bedsData = _data;
                });
                _this.afDB.object("profiles/" + data.uid).valueChanges().subscribe(function (_data) {
                    _this.profileData = _data;
                });
            }
        });
    }
    BedDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BedDetailsPage');
    };
    BedDetailsPage.prototype.updateBed = function (bed) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "\u0E27\u0E2D\u0E23\u0E4C\u0E14\u0E17\u0E35\u0E48 " + bed.id,
            message: "กรอกจำนวนเตียงที่ว่าง",
            inputs: [
                {
                    name: 'blank',
                    placeholder: 'จำนวนเตียงที่ว่าง',
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
                            _this.afDB.object('/wards/' + bed.id)
                                .update({
                                blank: data.blank,
                                time: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP
                            });
                            var alert_1 = _this.alertCtrl.create({
                                title: 'รายการสำเร็จ',
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
    BedDetailsPage.prototype.reduceBed = function (bed) {
        var _this = this;
        if (bed.blank > 0) {
            var confirm_1 = this.alertCtrl.create({
                title: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E14\u0E40\u0E15\u0E35\u0E22\u0E07\u0E27\u0E48\u0E32\u0E07 ?",
                message: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E25\u0E14\u0E40\u0E15\u0E35\u0E22\u0E07\u0E27\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name,
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
            confirm_1.present();
        }
        else {
            var alert_3 = this.alertCtrl.create({
                title: 'รายการไม่ถูกต้อง !',
                subTitle: "\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E25\u0E14\u0E40\u0E15\u0E35\u0E22\u0E07\u0E27\u0E48\u0E32\u0E07\u0E08\u0E32\u0E01\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name + " \u0E44\u0E14\u0E49\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07\u0E08\u0E32\u0E01\u0E44\u0E21\u0E48\u0E21\u0E35\u0E40\u0E15\u0E35\u0E22\u0E07\u0E1C\u0E39\u0E49\u0E1B\u0E48\u0E27\u0E22\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E07\u0E43\u0E19\u0E02\u0E13\u0E30\u0E19\u0E35\u0E49",
                buttons: ['OK']
            });
            alert_3.present();
        }
    };
    BedDetailsPage.prototype.addBed = function (bed) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E35\u0E22\u0E07\u0E27\u0E48\u0E32\u0E07 ?",
            message: "\u0E04\u0E38\u0E13\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E22\u0E37\u0E19\u0E22\u0E31\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E40\u0E15\u0E35\u0E22\u0E07\u0E27\u0E48\u0E32\u0E07\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E27\u0E2D\u0E23\u0E4C\u0E14 " + bed.name,
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
            selector: 'page-bed-details',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/bed-details/bed-details.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>จัดการเตียงผู้ป่วย</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid>\n\n        <div *ngIf="profileData.role == \'admin\' || profileData.role == \'adcenter\'">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <b>วอร์ด</b>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <b>เตียงว่าง</b>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <b>เพิ่ม/ลดเตียง</b>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngFor="let bed of bedsData">\n\n                <ion-col col-3>\n\n                    <div>{{bed.name}}</div>\n\n                </ion-col>\n\n                <ion-col col-4>\n\n                    <div>{{bed.blank}}</div>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <b class="reduce" (click)="reduceBed(bed)">\n\n                        <ion-icon name="remove-circle"> ลด&nbsp;</ion-icon>\n\n                    </b>\n\n                    <b class="add" (click)="addBed(bed)">\n\n                        <ion-icon name="add-circle"> เพิ่ม </ion-icon>\n\n                    </b>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n\n\n        <div *ngIf="profileData.role == \'resident\'">\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <b>วอร์ด</b>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <b>เตียงว่าง</b>\n\n                </ion-col>\n\n                <ion-col col-5>\n\n                    <b>แก้ไขจำนวน</b>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngFor="let bed of bedsData">\n\n                <ion-row *ngIf="bed.name == profileData.ward">\n\n                    <ion-col col-2>\n\n                        <div>{{bed.name}}</div>\n\n                    </ion-col>\n\n                    <ion-col col-5>\n\n                        <div>{{bed.blank}}</div>\n\n                    </ion-col>\n\n                    <ion-col col-5>\n\n                        <div (click)="updateBed(bed)">\n\n                            <b class="add">\n\n                                <ion-icon name="add-circle"> ปรับจำนวน</ion-icon>\n\n                            </b>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/bed-details/bed-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], BedDetailsPage);
    return BedDetailsPage;
}());

//# sourceMappingURL=bed-details.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__ = __webpack_require__(131);
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
            .then(function () { return console.log('Launched dialer'); })
            .catch(function () { return console.log('Error launching dialer!'); });
    };
    ContactDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-details',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/contact-details/contact-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>ข้อมูลรายชื่อ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-row class="logo-row">\n\n    <ion-col item-start>\n\n      <img class="avatar" style="width:40%;" src="{{picture}}" />\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      ชื่อ : {{name}}\n\n    </ion-item>\n\n    <ion-item>\n\n      โทรศัพท์ : {{phone}}\n\n      <ion-icon name="call" (click)="call(phone)" item-end></ion-icon>\n\n    </ion-item>\n\n    <ion-item>\n\n      E-mail : {{email}}\n\n    </ion-item>\n\n    <ion-item>\n\n      เพศ : {{gender}}&emsp;&emsp;งาน : {{type}}\n\n    </ion-item>\n\n    <ion-item>\n\n      ความเชี่ยวชาญ : {{aptitude}}\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/contact-details/contact-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactDetailsPage);
    return ContactDetailsPage;
}());

//# sourceMappingURL=contact-details.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resetpwd_resetpwd__ = __webpack_require__(159);
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
    function LoginPage(toast, navCtrl, menu, navParams, alertCtrl, afAuth) {
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.user = {};
        this.menu.enable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                            this.menu.enable(true);
                            this.afAuth.authState.subscribe(function (data) {
                                if (data && data.email && data.uid) {
                                    _this.toast.create({
                                        message: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A " + data.email,
                                        duration: 3000
                                    }).present();
                                }
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        alert_1 = this.alertCtrl.create({
                            title: 'Error!',
                            subTitle: e_1.message,
                            buttons: ['OK']
                        });
                        alert_1.present();
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // async register(user: User) {
    //     this.menu.enable(true);
    //     try {
    //         const result = await this.afAuth.auth.createUserWithEmailAndPassword(
    //             user.email,
    //             user.password
    //         );
    //         if (result) {
    //             this.navCtrl.setRoot(HomePage);
    //         }
    //     } catch (e) {
    //         console.error(e);
    //         let alert = this.alertCtrl.create({
    //             title: 'Alert!',
    //             subTitle: 'the email / password combination is not valid',
    //             buttons: ['OK']
    //         });
    //         alert.present();
    //     }
    // }
    LoginPage.prototype.openNavResetpwdPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__resetpwd_resetpwd__["a" /* ResetpwdPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/login/login.html"*/'<ion-content class="login-content">\n\n    <ion-row class="logo-row">\n\n        <ion-col>\n\n            <img style="width:150px;" src="assets/imgs/logo.png" />\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <ion-list inset>\n\n                <ion-item>\n\n                    <ion-input type="email" [(ngModel)]="user.email" placeholder="Email" required></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-input type="password" [(ngModel)]="user.password" placeholder="Password" required></ion-input>\n\n                </ion-item>\n\n                <ion-buttons end>\n\n                    <button ion-button color="light" (click)="openNavResetpwdPage()" clear>forget password</button>\n\n                </ion-buttons>\n\n            </ion-list>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col class="submit-col">\n\n            <button ion-button medium class="submit-btn" (click)="login(user)" large full>Login</button>\n\n        </ion-col>\n\n        <!-- <ion-col class="submit-col">\n\n                <button ion-button medium class="submit-btn" (click)="register(user)" full>Register</button>\n\n            </ion-col> -->\n\n    </ion-row>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(39);
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
    ResetpwdPage.prototype.resetPwd = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var confirm;
            return __generator(this, function (_a) {
                confirm = this.alertCtrl.create({
                    title: "Reset Password",
                    message: "ท่านต้องการยืนยันการส่งอีเมลการรีเซ็ตรหัสผ่านหรือไม่ ?",
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
                                var result, e_1, alert_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('Agree clicked');
                                            _a.label = 1;
                                        case 1:
                                            _a.trys.push([1, 3, , 4]);
                                            return [4 /*yield*/, this.afAuth.auth.sendPasswordResetEmail(email)];
                                        case 2:
                                            result = _a.sent();
                                            if (result) {
                                                console.log("Email sent");
                                            }
                                            return [3 /*break*/, 4];
                                        case 3:
                                            e_1 = _a.sent();
                                            console.error(e_1);
                                            alert_1 = this.alertCtrl.create({
                                                title: 'Error!',
                                                subTitle: e_1.message,
                                                buttons: ['OK']
                                            });
                                            alert_1.present();
                                            return [3 /*break*/, 4];
                                        case 4: return [2 /*return*/];
                                    }
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
            selector: 'page-resetpwd',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/resetpwd/resetpwd.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Reset Password</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label floating>Email Address</ion-label>\n        <ion-input type="email" [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <button ion-button class="submit " (click)="resetPwd(email)" round>Reset Password</button>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/resetpwd/resetpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ResetpwdPage);
    return ResetpwdPage;
}());

//# sourceMappingURL=resetpwd.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(83);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/profile/profile.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>ข้อมูลส่วนตัว</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input [(ngModel)]="profile.username"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input [(ngModel)]="profile.firstname"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input [(ngModel)]="profile.lastname"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label floating>Ward</ion-label>\n        <ion-input [(ngModel)]="profile.ward"></ion-input>\n    </ion-item>\n\n    <button ion-button class="submit" (click)="createProfile()" round full>Create Profile</button>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_details_contact_details__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(131);
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
            .then(function () { return console.log('Launched dialer'); })
            .catch(function () { return console.log('Error launching dialer!'); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>รายชื่อ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item-group *ngFor="let contact of contactsData">\n\n    <ion-item>\n\n      <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n        <img src="{{contact.picture}}" />\n\n      </ion-avatar>\n\n      <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n      <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n      <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n    </ion-item>\n\n  </ion-item-group>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 172:
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
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bed-details/bed-details.module": [
		524,
		6
	],
	"../pages/calendar/calendar.module": [
		523,
		5
	],
	"../pages/contact-details/contact-details.module": [
		525,
		4
	],
	"../pages/contact/contact.module": [
		529,
		3
	],
	"../pages/login/login.module": [
		526,
		2
	],
	"../pages/profile/profile.module": [
		527,
		1
	],
	"../pages/resetpwd/resetpwd.module": [
		528,
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
webpackAsyncContext.id = 266;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebase_config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_resetpwd_resetpwd__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bed_details_bed_details__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_details_contact_details__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number__ = __webpack_require__(131);
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
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bed_details_bed_details__["a" /* BedDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_details_contact_details__["a" /* ContactDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                    links: [
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bed-details/bed-details.module#BedDetailsPageModule', name: 'BedDetailsPage', segment: 'bed-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-details/contact-details.module#ContactDetailsPageModule', name: 'ContactDetailsPage', segment: 'contact-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpwd/resetpwd.module#ResetpwdPageModule', name: 'ResetpwdPage', segment: 'resetpwd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bed_details_bed_details__["a" /* BedDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_details_contact_details__["a" /* ContactDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number__["a" /* CallNumber */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 511:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calendar_calendar__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(160);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* ProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/app/app.html"*/'<ion-menu menuClose [content]="content">\n  <ion-content>\n    <ion-item (click)="profilePage()">\n      <ion-avatar style="width:25%" item-start>\n        <img style="width:100%; height:100%" src="{{(profileData | async)?.picture}}">\n      </ion-avatar>\n      <h2>{{(profileData | async)?.username}}</h2>\n      <p>{{(profileData | async)?.firstname}} {{(profileData | async)?.lastname}}</p>\n      <p>Ward {{(profileData | async)?.ward}}</p>\n    </ion-item>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let page of pages" (click)="openPage(page)">\n        {{page.title}}\n      </button>\n    </ion-list>\n\n    <ion-footer>\n      <button class="logout" (click)="logout()" menuClose ion-item>\n        Log Out\n      </button>\n    </ion-footer>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bed_details_bed_details__ = __webpack_require__(156);
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
    function HomePage(navCtrl, afDB, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afDB = afDB;
        this.afAuth = afAuth;
        this.bedsData = [];
        this.profileData = {};
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.afDB.list("/wards/").valueChanges().subscribe(function (_data) {
                    _this.bedsData = _data;
                });
                _this.afDB.object("profiles/" + data.uid).valueChanges().subscribe(function (_data) {
                    _this.profileData = _data;
                });
            }
        });
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.openNavDetailsPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__bed_details_bed_details__["a" /* BedDetailsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>รพ.ศรีนครินทร์</ion-title>\n\n        <ion-buttons *ngIf="profileData.role != \'staff\'" end>\n\n            <button ion-button icon-only (click)="openNavDetailsPage()">แก้ไขเตียง </button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-3>\n\n                <b>วอร์ด</b>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <b>เตียงว่าง</b>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n                <b>อัปเดตล่าสุด</b>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngFor="let bed of bedsData">\n\n            <ion-col col-3>\n\n                <div>{{bed.name}}</div>\n\n            </ion-col>\n\n            <ion-col col-4>\n\n                <div>{{bed.blank}}</div>\n\n            </ion-col>\n\n            <ion-col col-5>\n\n                <div class="time">{{bed.time | date:\'EEE hh:mm a\'}}</div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[320]);
//# sourceMappingURL=main.js.map