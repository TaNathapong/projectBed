import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CalendarPage } from '../calendar/calendar';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
    selector: 'page-calendar-create',
    templateUrl: 'calendar-create.html',
})
export class CreateCalendarPage {
    calendarEvent: any = {};
    validation: any = {};
    httpOptions = {                             // Header of httpclient use to permission calendar
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.global.access_token
        })
    };

    CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';                           // Calendar group
    dataUrl = 'https://www.googleapis.com/calendar/v3/calendars/' + this.CALENDAR_ID + '/events';   // Url use to create evnet 

    constructor(public global: GlobalProvider, public navCtrl: NavController, private http: HttpClient, private alertCtrl: AlertController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CreateCalendarPage');
    }

    addEvent() {
        if (!this.validate()) {                     // Check if not validate data to use
            let alert = this.alertCtrl.create({
                title: 'รายการไม่ถูกต้อง!',
                subTitle: 'กรุณากรอกข้อมูล',
                buttons: ['OK']
            });
            alert.present();
        } else {                                    // If validate
            var startDateTimeISO = this.buildISODate(this.calendarEvent.startDate, this.calendarEvent.startTime);
            var enddateTimeISO = this.buildISODate(this.calendarEvent.endDate, this.calendarEvent.endTime);

            var body = {                                            // Data is use to create event
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
            }

            this.http.post(this.dataUrl, body, this.httpOptions).subscribe(res => {
                let alert = this.alertCtrl.create({
                    title: 'รายการสำเร็จ!',
                    subTitle: 'บันทึกข้อมูลเสร็จสิ้น',
                    buttons: ['OK']
                });
                alert.present();
                this.navCtrl.setRoot(CalendarPage);                 // Go to CalendarPage
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

    // Build date to ISO 8601 format
    buildISODate(date, time) {
        var dateArray = date && date.split('-');
        var timeArray = time && time.split(':');
        var normalDate = new Date(parseInt(dateArray[0]), parseInt(dateArray[1]) - 1, parseInt(dateArray[2]), parseInt(timeArray[0]), parseInt(timeArray[1]), 0, 0);

        return normalDate.toISOString();
    }

    // Validate input
    validate() {
        return this.isStringValid(this.calendarEvent.name) &&
            this.isStringValid(this.calendarEvent.startDate) &&
            this.isStringValid(this.calendarEvent.startTime) &&
            this.isStringValid(this.calendarEvent.endDate) &&
            this.isStringValid(this.calendarEvent.endTime)
    }

    // Check if input have value
    isStringValid(str) {
        if (typeof str != 'undefined' && str) {
            return true;
        };
        return false;
    }

}
