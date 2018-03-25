import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { Calendar } from "../../models/calendar";

@IonicPage()
@Component({
  selector: 'page-create-calendar',
  templateUrl: 'create-calendar.html',
})
export class CreateCalendarPage {
  calendarEvent = {} as Calendar;
  validation: any = {};

  API_KEY = 'AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ';
  CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';
  dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', this.CALENDAR_ID, '/events?&key=', this.API_KEY].join('');

  constructor(public navCtrl: NavController, private http: HttpClient, private alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCalendarPage');
  }

  createEvent() {
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

      console.log(this.calendarEvent.name);
      console.log(this.calendarEvent.description);
      console.log(this.calendarEvent.startDate);
      console.log(this.calendarEvent.startTime);
      console.log(this.calendarEvent.endDate);
      console.log(this.calendarEvent.endTime);
      console.log(startDateTimeISO);
      console.log(enddateTimeISO);

      this.http.request('post', this.dataUrl, {
        'body': {
          "summary": this.calendarEvent.name,
          "description": this.calendarEvent.description,
          "start": {
            "dateTime": startDateTimeISO,
            "timeZone": "Asia/Bangkok" // TODO : Parameterize this
          },
          "end": {
            "dateTime": enddateTimeISO,
            "timeZone": "Asia/Bangkok" // TODO : Parameterize this
          },
          "recurrence": [
            "RRULE:FREQ=DAILY;COUNT=1" //// TODO : Parameterize this, Frequency of the event
          ],
          "reminders": {
            "useDefault": false,
            "overrides": [
              {
                "method": "email",
                "minutes": 1440   		// TODO : Parameterize this, No. of minutes before you want google services to send an email reminder
              },
              {
                "method": "popup",
                "minutes": 10 				// TODO : Parameterize this, No. of minutes before you want google services to send an popup reminder
              }
            ]
          }
        }
      });

      let alert = this.alertCtrl.create({
        title: 'รายการสำเร็จ!',
        subTitle: 'บันทึกข้อมูลเสร็จสิ้น',
        buttons: ['OK']
      });
      alert.present();

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
