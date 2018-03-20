import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface IEvent {
    allDay: boolean;
    endTime: Date;
    startTime: Date;
    title: string;
}

export interface ObjIEvent {
    items: Array<IEvent[]>;
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
    viewTitle;
    isToday: boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
    };

    constructor(public navCtrl: NavController, private http: HttpClient, private alertCtrl: AlertController) {
        this.getEvent();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CalendarPage');
    }

    getEvent() {
        var data: any;
        return this.http.get<ObjIEvent>(this.dataUrl).subscribe(_data => {
            data = _data.items;
            var events = [];
            for (let i = 0; i < data.length; i++) {
                var startTime = data[i].start.dateTime;
                var endTime = data[i].end.dateTime;
                var startDate = data[i].end.date;
                var endDate = data[i].end.date;

                if (startDate != undefined) {       // All day event is true
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
                else {                              // All day event is false
                    events.push({
                        title: data[i].summary,
                        startTime: new Date(startTime),
                        endTime: new Date(endTime),
                        allDay: false,
                        creator: data[i].creator.email
                    });
                }
            }
            this.eventSource = events;
            console.log(this.eventSource);
        });
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

    onEventSelected = (event) => {
        console.log(event.title);
        // var startDay = event.startTime;
        // var startDate = new Date(startDay.getMonth());
        // var endDay = event.startTime;
        // var endDate = new Date(endDay.getMonth())
        if (event.allDay == true) {
            // var startDay = new Date(event.startTime.getYear());
            // console.log(startDay);
            let alert = this.alertCtrl.create({
                title: event.title,
                subTitle: `<p>เริ่มต้น : ${event.startTime}</p><p>สิ้นสุด : ${event.endTime}</p><p>ผู้สร้าง : ${event.creator}</p>`,
                buttons: ['OK']
            });
            alert.present();
        } else {
            let alert = this.alertCtrl.create({
                title: event.title,
                subTitle: `<p>เริ่มต้น : ${event.startTime}</p><p>สิ้นสุด : ${event.endTime}</p><p>ผู้สร้าง : ${event.creator}</p>`,
                buttons: ['OK']
            });
            alert.present();
        }
    }

    onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
    }

    markDisabled = (date: Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    }

}