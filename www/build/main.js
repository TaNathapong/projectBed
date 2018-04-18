webpackJsonp([7],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bed_details_bed_details__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_global_global__ = __webpack_require__(54);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>รพ.ศรีนครินทร์</ion-title>\n\n        <!-- <ion-buttons *ngIf="profileData.role != \'Staff\'" end>\n\n            <button ion-button icon-only (click)="openNavDetailsPage()">แก้ไขเตียง </button>\n\n        </ion-buttons> -->\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="home-content">\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col col-3>\n\n                <b>วอร์ด</b>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <b>เตียงว่าง</b>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <b>อัปเดตล่าสุด</b>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row *ngFor="let bed of bedsData">\n\n            <ion-col col-3>\n\n                <div>{{bed.name}}</div>\n\n            </ion-col>\n\n            <ion-col col-3>\n\n                <div>{{bed.blank}}</div>\n\n            </ion-col>\n\n            <ion-col col-6>\n\n                <div class="time">{{bed.time | date:\'dd/M/yy - HH:mm น.\'}}</div>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-fab *ngIf="profileData.role" bottom right>\n\n        <button (click)="openNavDetailsPage()" ion-fab color="primary">\n\n            <ion-icon name="md-create"></ion-icon>\n\n        </button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(82);
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
                            _this.afDB.object('/wards/' + bed.id).update({
                                blank: data.blank,
                                time: __WEBPACK_IMPORTED_MODULE_4_firebase__["database"].ServerValue.TIMESTAMP
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
            selector: 'page-bed-details',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/bed-details/bed-details.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>จัดการเตียงผู้ป่วย</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bed-details-content">\n\n    <ion-grid>\n\n        <div *ngIf="profileData.role == \'Admin\' || profileData.role == \'Admission Center\'">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <b>วอร์ด</b>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <b>เตียงว่าง</b>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <b>เพิ่ม/ลดเตียง</b>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row *ngFor="let bed of bedsData">\n\n                <ion-col col-3>\n\n                    <div>{{bed.name}}</div>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <div>{{bed.blank}}</div>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <b class="reduce" (click)="reduceBed(bed)">\n\n                        <ion-icon name="remove-circle"> ลด&nbsp;</ion-icon>\n\n                    </b>\n\n                    <b class="add" (click)="addBed(bed)">\n\n                        <ion-icon name="add-circle"> เพิ่ม </ion-icon>\n\n                    </b>\n\n                </ion-col>\n\n            </ion-row>\n\n        </div>\n\n\n\n        <div *ngIf="profileData.role == \'Resident\'">\n\n            <ion-row>\n\n                <ion-col col-3>\n\n                    <b>วอร์ด</b>\n\n                </ion-col>\n\n                <ion-col col-3>\n\n                    <b>เตียงว่าง</b>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <b>แก้ไขจำนวน</b>\n\n                </ion-col>\n\n            </ion-row>\n\n            <div *ngFor="let bed of bedsData">\n\n                <ion-row *ngIf="bed.name == profileData.ward">\n\n                    <ion-col col-3>\n\n                        <div>{{bed.name}}</div>\n\n                    </ion-col>\n\n                    <ion-col col-3>\n\n                        <div>{{bed.blank}}</div>\n\n                    </ion-col>\n\n                    <ion-col col-6>\n\n                        <div (click)="updateBed(bed)">\n\n                            <b class="add">\n\n                                <ion-icon name="add-circle"> ปรับจำนวน</ion-icon>\n\n                            </b>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </div>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/bed-details/bed-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], BedDetailsPage);
    return BedDetailsPage;
}());

//# sourceMappingURL=bed-details.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
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
            selector: 'page-contact-details',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/contact-details/contact-details.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>ข้อมูลรายชื่อ</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="contact-details">\n\n\n\n  <ion-row class="logo-row">\n\n    <ion-col item-start>\n\n      <img class="avatar" style="width:40%;" src="{{picture}}" />\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list>\n\n    <ion-item style="background-color: transparent;">\n\n      ชื่อ : {{name}}\n\n    </ion-item>\n\n    <ion-item style="background-color: transparent;">\n\n      โทรศัพท์ : {{phone}}\n\n      <ion-icon ios="ios-call" md="md-call" (click)="call(phone)" item-end></ion-icon>\n\n    </ion-item>\n\n    <ion-item style="background-color: transparent;">\n\n      E-mail : {{email}}\n\n    </ion-item>\n\n    <ion-item style="background-color: transparent;">\n\n      ความเชี่ยวชาญ : {{aptitude}}\n\n    </ion-item>\n\n    <ion-item style="background-color: transparent;">\n\n      เพศ : {{gender}}\n\n    </ion-item>\n\n    <ion-item style="background-color: transparent;">\n\n      งาน : {{type}}\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/contact-details/contact-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_call_number__["a" /* CallNumber */]])
    ], ContactDetailsPage);
    return ContactDetailsPage;
}());

//# sourceMappingURL=contact-details.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateCalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(54);
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
        this.CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';
        this.dataUrl = 'https://www.googleapis.com/calendar/v3/calendars/' + this.CALENDAR_ID + '/events';
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
            console.log(enddateTimeISO);
            var body = {
                "summary": this.calendarEvent.name,
                "description": this.calendarEvent.description,
                "start": {
                    "dateTime": startDateTimeISO,
                    "timeZone": "Asia/Bangkok" // TODO : Parameterize this
                },
                "end": {
                    "dateTime": enddateTimeISO,
                    "timeZone": "Asia/Bangkok" // TODO : Parameterize this
                }
            };
            this.http.post(this.dataUrl, body, this.httpOptions).subscribe(function (res) {
                var alert = _this.alertCtrl.create({
                    title: 'รายการสำเร็จ!',
                    subTitle: 'บันทึกข้อมูลเสร็จสิ้น',
                    buttons: ['OK']
                });
                alert.present();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */]);
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
    CreateCalendarPage.prototype.buildISODate = function (date, time) {
        var dateArray = date && date.split('-');
        var timeArray = time && time.split(':');
        var normalDate = new Date(parseInt(dateArray[0]), parseInt(dateArray[1]) - 1, parseInt(dateArray[2]), parseInt(timeArray[0]), parseInt(timeArray[1]), 0, 0);
        return normalDate.toISOString();
    };
    CreateCalendarPage.prototype.validate = function () {
        return this.isStringValid(this.calendarEvent.name) &&
            this.isStringValid(this.calendarEvent.startDate) &&
            this.isStringValid(this.calendarEvent.startTime) &&
            this.isStringValid(this.calendarEvent.endDate) &&
            this.isStringValid(this.calendarEvent.endTime);
    };
    CreateCalendarPage.prototype.isStringValid = function (str) {
        if (typeof str != 'undefined' && str) {
            return true;
        }
        ;
        return false;
    };
    CreateCalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar-create',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/calendar-create/calendar-create.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>สร้างตารางนัดหมาย</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding class="calendar-create-content">\n    <ion-list>\n        <ion-item-group>\n            <ion-item style="background-color: transparent;">\n                <ion-label floating>Name</ion-label>\n                <ion-input type="text" [(ngModel)]="calendarEvent.name"></ion-input>\n            </ion-item>\n            <ion-item style="background-color: transparent;">\n                <ion-label floating>Description</ion-label>\n                <ion-input type="text" [(ngModel)]="calendarEvent.description"></ion-input>\n            </ion-item>\n\n            <ion-row>\n                <ion-item style="background-color: transparent;" col-6>\n                    <ion-label floating>Start Date</ion-label>\n                    <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMMM YYYY" [(ngModel)]="calendarEvent.startDate"></ion-datetime>\n                </ion-item>\n                <ion-item style="background-color: transparent;" class="line" col-6>\n                    <ion-label floating>Start Time</ion-label>\n                    <ion-datetime displayFormat="HH:mm น." pickerFormat="HH:mm" min="07:00" max="20:00" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55"\n                        [(ngModel)]="calendarEvent.startTime"></ion-datetime>\n                </ion-item>\n            </ion-row>\n\n            <ion-row>\n                <ion-item style="background-color: transparent;" col-6>\n                    <ion-label floating>End Date</ion-label>\n                    <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="DD MMMM YYYY" [min]="calendarEvent.startDate" [(ngModel)]="calendarEvent.endDate"></ion-datetime>\n                </ion-item>\n                <ion-item style="background-color: transparent;" class="line" col-6>\n                    <ion-label floating>End Time</ion-label>\n                    <ion-datetime displayFormat="HH:mm น." pickerFormat="HH:mm" min="07:00" max="20:00" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55"\n                        [min]="calendarEvent.startTime" [(ngModel)]="calendarEvent.endTime"></ion-datetime>\n                </ion-item>\n            </ion-row>\n\n        </ion-item-group>\n    </ion-list>\n\n    <div style="text-align:right;">\n        <button ion-button primary (click)="addEvent()">สร้าง</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/calendar-create/calendar-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CreateCalendarPage);
    return CreateCalendarPage;
}());

//# sourceMappingURL=calendar-create.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_details_contact_details__ = __webpack_require__(160);
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
        this.contactRef = __WEBPACK_IMPORTED_MODULE_4_firebase__["database"]().ref('/contacts');
        this.contactRef.on('value', function (countryList) {
            var countries = [];
            countryList.forEach(function (country) {
                countries.push(country.val());
                return false;
            });
            _this.contactList = countries;
            _this.loadedContactList = countries;
        });
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage.prototype.initializeItems = function () {
        this.contactList = this.loadedContactList;
    };
    ContactPage.prototype.openNavSubContact = function (contact) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__contact_details_contact_details__["a" /* ContactDetailsPage */], {
            name: contact.name,
            type: contact.type,
            phone: contact.phone,
            aptitude: contact.aptitude,
            gender: contact.gender,
            email: contact.email,
            picture: contact.picture
        });
    };
    ContactPage.prototype.initializeContacts = function () {
        var _this = this;
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
    ContactPage.prototype.call = function (phone) {
        this.callNumber.callNumber(phone, true)
            .then(function () { return console.log('Launched dialer'); })
            .catch(function () { return console.log('Error launching dialer!'); });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/contact/contact.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>รายชื่อ</ion-title>\n\n    </ion-navbar>\n\n    <ion-searchbar class="searchbar" [showCancelButton]="shouldShowCancel" (ionInput)="getItems($event)"></ion-searchbar>\n\n</ion-header>\n\n\n\n<ion-content class="contact-content">\n\n    <ion-list>\n\n        <ion-item style="background-color: transparent;" *ngFor="let contact of contactList">\n\n            <ion-avatar (click)="openNavSubContact(contact)" item-start>\n\n                <img src="{{contact.picture}}" />\n\n            </ion-avatar>\n\n            <h2 (click)="openNavSubContact(contact)">{{contact.name}}</h2>\n\n            <p (click)="openNavSubContact(contact)">{{contact.type}} {{contact.aptitude}}</p>\n\n            <ion-icon name="call" (click)="call(contact.phone)" item-end></ion-icon>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/contact/contact.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resetpwd_resetpwd__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_global_global__ = __webpack_require__(54);
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
        this.menu.enable(false);
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().getRedirectResult().then(function (result) {
                    if (result.user) {
                        _this.global.access_token = result.credential.accessToken;
                        _this.afAuth.authState.subscribe(function (data) {
                            if (data && data.email && data.uid) {
                                _this.toast.create({
                                    message: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A " + data.displayName,
                                    duration: 3000
                                }).present();
                            }
                        });
                        _this.menu.enable(true);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                });
            }
        });
    };
    LoginPage.prototype.openNavResetpwdPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__resetpwd_resetpwd__["a" /* ResetpwdPage */]);
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert_1;
            return __generator(this, function (_a) {
                try {
                    __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().signInWithEmailAndPassword(user.email, user.password).then(function (result) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                        _this.menu.enable(true);
                        _this.afAuth.authState.subscribe(function (data) {
                            if (data && data.email && data.uid) {
                                _this.toast.create({
                                    message: "\u0E22\u0E34\u0E19\u0E14\u0E35\u0E15\u0E49\u0E2D\u0E19\u0E23\u0E31\u0E1A " + data.email,
                                    duration: 3000
                                }).present();
                            }
                        });
                    }).catch(function (error) {
                        console.error(error);
                        var alert = _this.alertCtrl.create({
                            title: 'Error!',
                            subTitle: error.message,
                            buttons: ['OK']
                        });
                        alert.present();
                    });
                }
                catch (error) {
                    console.error(error);
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
    LoginPage.prototype.googleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var provider;
            return __generator(this, function (_a) {
                provider = new __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"].GoogleAuthProvider();
                provider.addScope('https://www.googleapis.com/auth/calendar');
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetpwdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(49);
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
            selector: 'page-resetpwd',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/resetpwd/resetpwd.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>Reset Password</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="reset-content" padding>\n    <ion-list padding-left padding-right padding-top>\n        <ion-item>\n            <ion-label>\n                <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n            </ion-label>\n            <ion-input type="email" [(ngModel)]="email" placeholder="Email Address" required></ion-input>\n        </ion-item>\n    </ion-list>\n\n    <ion-row padding-left padding-right>\n        <button ion-button block color="danger" (click)="resetPwd(email)">Reset Password</button>\n    </ion-row>\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/resetpwd/resetpwd.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], ResetpwdPage);
    return ResetpwdPage;
}());

//# sourceMappingURL=resetpwd.js.map

/***/ }),

/***/ 175:
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
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/bed-details/bed-details.module": [
		525,
		6
	],
	"../pages/calendar-create/calendar-create.module": [
		527,
		5
	],
	"../pages/calendar/calendar.module": [
		528,
		4
	],
	"../pages/contact-details/contact-details.module": [
		526,
		3
	],
	"../pages/contact/contact.module": [
		529,
		2
	],
	"../pages/login/login.module": [
		530,
		1
	],
	"../pages/resetpwd/resetpwd.module": [
		531,
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
webpackAsyncContext.id = 269;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebase_config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_calendar__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_resetpwd_resetpwd__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_calendar_create_calendar_create__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bed_details_bed_details__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contact_details_contact_details__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_global_global__ = __webpack_require__(54);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_calendar_create_calendar_create__["a" /* CreateCalendarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bed_details_bed_details__["a" /* BedDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_details_contact_details__["a" /* ContactDetailsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], { scrollAssist: false, autoFocusAssist: false }, {
                    links: [
                        { loadChildren: '../pages/bed-details/bed-details.module#BedDetailsPageModule', name: 'BedDetailsPage', segment: 'bed-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-details/contact-details.module#ContactDetailsPageModule', name: 'ContactDetailsPage', segment: 'contact-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar-create/calendar-create.module#CreateCalendarPageModule', name: 'CreateCalendarPage', segment: 'calendar-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/resetpwd/resetpwd.module#ResetpwdPageModule', name: 'ResetpwdPage', segment: 'resetpwd', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_14__pages_calendar_create_calendar_create__["a" /* CreateCalendarPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_bed_details_bed_details__["a" /* BedDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_contact_details_contact_details__["a" /* ContactDetailsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_global_global__["a" /* GlobalProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_calendar_calendar__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_global_global__ = __webpack_require__(54);
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
        this.pages = [
            { title: 'หน้าแรก', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */] },
            { title: 'รายชื่อบุคลากร', component: __WEBPACK_IMPORTED_MODULE_9__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'ปฏิทินตารางนัดหมาย', component: __WEBPACK_IMPORTED_MODULE_10__pages_calendar_calendar__["a" /* CalendarPage */] }
        ];
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.profileData = _this.afDB.object("profiles/" + data.uid).valueChanges();
            }
        });
    }
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
                        _this.logOut();
                        _this.platform.exitApp();
                    }
                }
            ]
        });
        alert.present().then(function () {
            _this.alertShown = true;
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logOut = function () {
        __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().signOut();
        this.profileData = null;
        this.global.access_token = null;
        window.location.reload();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/app/app.html"*/'<ion-menu menuClose [content]="content">\n    <ion-content>\n        <ion-item *ngIf="profileData | async; let profileData; else loading">\n            <ion-avatar style="width:25%" item-start>\n                <img style="width:100%; height:100%" src="{{profileData.picture}}">\n            </ion-avatar>\n            <h2>{{profileData.name}}</h2>\n            <p *ngIf="profileData.role">หน้าที่ : {{profileData.role}}</p>\n            <p *ngIf="!profileData.role">หน้าที่ : Staff</p>\n            <p *ngIf="profileData.ward">วอร์ดที่ : {{profileData.ward}}</p>\n        </ion-item>\n\n        <ion-list>\n            <button menuClose ion-item *ngFor="let page of pages" (click)="openPage(page)">\n                {{page.title}}\n            </button>\n        </ion-list>\n\n        <ion-footer>\n            <button class="logout" (click)="logOut()" menuClose ion-item>\n                Sign Out\n            </button>\n        </ion-footer>\n    </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_11__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(86);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_create_calendar_create__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(54);
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
        this.httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + this.global.access_token
            })
        };
        this.API_KEY = 'AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ';
        this.CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';
        this.dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', this.CALENDAR_ID, '/events?&key=', this.API_KEY].join('');
        this.deleteUrl = 'https://www.googleapis.com/calendar/v3/calendars/' + this.CALENDAR_ID + '/events';
        this.mode = 'month';
        this.calendar = {
            currentDate: new Date()
        };
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
    CalendarPage.prototype.getEvent = function () {
        var _this = this;
        var data;
        return this.http.get(this.dataUrl).subscribe(function (_data) {
            data = _data['items'];
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
            _this.eventSource = events;
        });
    };
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
                _this.navCtrl.setRoot(CalendarPage_1);
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
    CalendarPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    CalendarPage.prototype.changeMode = function (mode) {
        this.mode = mode;
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
    CalendarPage.prototype.checkTime = function (i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    };
    CalendarPage = CalendarPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/nathapong/ionic/projectBed/src/pages/calendar/calendar.html"*/'<ion-header>\n    <ion-navbar color="primary" no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title class="title">{{viewTitle}}</ion-title>\n        <ion-buttons end>\n            <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n        </ion-buttons>\n    </ion-navbar>\n    <ion-toolbar color="primary" no-border-top>\n        <ion-segment color="light" [(ngModel)]="mode">\n            <ion-segment-button value="month" (click)="changeMode(\'month\')">\n                Month\n            </ion-segment-button>\n            <ion-segment-button value="week" (click)="changeMode(\'week\')">\n                Week\n            </ion-segment-button>\n            <ion-segment-button value="day" (click)="changeMode(\'day\')">\n                Day\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class="calendar-content">\n    <calendar [eventSource]="eventSource" [calendarMode]="mode" [currentDate]="calendar.currentDate" startHour="7" endHour="19"\n        (onCurrentDateChanged)="onCurrentDateChanged($event)" (onTitleChanged)="onViewTitleChanged($event)" (onEventSelected)="onEventSelected($event)"\n        (onTimeSelected)="onTimeSelected($event)" step="30">\n    </calendar>\n\n    <ion-fab *ngIf="global.access_token" bottom right>\n        <button (click)="openNavCreateCalendarPage()" ion-fab color="primary">\n            <ion-icon name="add"></ion-icon>\n        </button>\n    </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/nathapong/ionic/projectBed/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
    ], CalendarPage);
    return CalendarPage;
    var CalendarPage_1;
}());

//# sourceMappingURL=calendar.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map