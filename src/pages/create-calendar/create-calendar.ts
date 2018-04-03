import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CalendarPage } from '../calendar/calendar';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
    selector: 'page-create-calendar',
    templateUrl: 'create-calendar.html',
})
export class CreateCalendarPage {
    calendarEvent: any = {};
    validation: any = {};
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.global.access_token
        })
    };

    CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';
    dataUrl = 'https://www.googleapis.com/calendar/v3/calendars/' + this.CALENDAR_ID + '/events';

    constructor(public global: GlobalProvider, public navCtrl: NavController, private http: HttpClient, private alertCtrl: AlertController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CreateCalendarPage');
    }

    addEvent() {
        if (!this.validate()) {
            let alert = this.alertCtrl.create({
                title: 'รายการไม่ถูกต้อง!',
                subTitle: 'กรุณากรอกข้อมูล',
                buttons: ['OK']
            });
            alert.present();
        } else {
            var startDateTimeISO = this.buildISODate(this.calendarEvent.startDate, this.calendarEvent.startTime);
            var enddateTimeISO = this.buildISODate(this.calendarEvent.endDate, this.calendarEvent.endTime);

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
            }

            this.http.post(this.dataUrl, body, this.httpOptions).subscribe(res => {
                let alert = this.alertCtrl.create({
                    title: 'รายการสำเร็จ!',
                    subTitle: 'บันทึกข้อมูลเสร็จสิ้น',
                    buttons: ['OK']
                });
                alert.present();
                this.navCtrl.setRoot(CalendarPage);
            },
                error => {
                    console.log(error);
                    let alert = this.alertCtrl.create({
                        title: error.name,
                        subTitle: error.message,
                        buttons: ['OK']
                    });
                    alert.present();
                }
            );
        }
    }

    buildISODate(date, time) {
        var dateArray = date && date.split('-');
        var timeArray = time && time.split(':');
        var normalDate = new Date(parseInt(dateArray[0]), parseInt(dateArray[1]) - 1, parseInt(dateArray[2]), parseInt(timeArray[0]), parseInt(timeArray[1]), 0, 0);

        return normalDate.toISOString();
    }

    validate() {
        return this.isStringValid(this.calendarEvent.name) &&
            this.isStringValid(this.calendarEvent.description) &&
            this.isStringValid(this.calendarEvent.startDate) &&
            this.isStringValid(this.calendarEvent.startTime) &&
            this.isStringValid(this.calendarEvent.endDate) &&
            this.isStringValid(this.calendarEvent.endTime)
    }

    isStringValid(str) {
        if (typeof str != 'undefined' && str) {
            return true;
        };
        return false;
    }

}
