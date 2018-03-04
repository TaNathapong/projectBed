import { IonicPage, NavController, DateTime } from 'ionic-angular';
import { Component, Inject } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/Rx';

// export interface IEventObj {
//   allDay: boolean,
//   endTime: Date,
//   startTime: Date,
//   title: string
// }

// export interface IEvent {
//   items: IEventObj[]
// }

export interface Calendar {
  start: {
    date: Date,
    dateTime: DateTime,
    timeZone: string
  },
  end: {
    date: Date,
    dateTime: DateTime,
    timeZone: string
  },
  summary: string;
}

export interface ObjCalendar {
  items: Calendar[]
}

@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {
  API_KEY = 'AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ';
  CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';
  dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', this.CALENDAR_ID, '/events?&key=', this.API_KEY].join('');;

  eventSource;
  dataSource;
  viewTitle;
  isToday: boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function (date: Date) { return date.getDate().toString(); },
      formatMonthViewDayHeader: function (date: Date) { return 'MonMH'; },
      formatMonthViewTitle: function (date: Date) { return 'testMT'; },
      formatWeekViewDayHeader: function (date: Date) { return 'MonWH'; },
      formatWeekViewTitle: function (date: Date) { return 'testWT'; },
      formatWeekViewHourColumn: function (date: Date) { return 'testWH'; },
      formatDayViewHourColumn: function (date: Date) { return 'testDH'; },
      formatDayViewTitle: function (date: Date) { return 'testDT'; }
    }
  };

  constructor(public navCtrl: NavController, @Inject(Http) private http: Http, private httpClient: HttpClient) {

  }
  getJson() {
    return this.httpClient.get<ObjCalendar>(this.dataUrl).subscribe(_data => {
      this.eventSource = _data.items;
      console.log(this.eventSource);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalendarPage');
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  }

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

  loadEvents() {
    this.eventSource = this.createRandomEvents();
    console.log(this.eventSource);
  }

  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 25; i += 1) {
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
      } else {
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
  }
}