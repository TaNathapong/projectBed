import { IonicPage, NavController, AlertController } from 'ionic-angular';
import { Component } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CreateCalendarPage } from '../calendar-create/calendar-create';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
    selector: 'page-calendar',
    templateUrl: 'calendar.html',
})
export class CalendarPage {
    // Header of httpclient use to permission calendar
    httpOptions = {
        headers: new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + this.global.access_token
        })
    };

    API_KEY = 'AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ';    // Google calendar API
    CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';   // Calendar group
    dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', this.CALENDAR_ID, '/events?&key=', this.API_KEY].join('');  // Url use to get evnet 
    deleteUrl = 'https://www.googleapis.com/calendar/v3/calendars/' + this.CALENDAR_ID + '/events'; // Url use to delete evnet

    eventSource;
    viewTitle;
    isToday: boolean;
    mode: string = 'month';
    calendar = {
        currentDate: new Date()
    };

    constructor(public global: GlobalProvider, public navCtrl: NavController, private http: HttpClient, private alertCtrl: AlertController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CalendarPage');
        this.getEvent();
    }

    // go to CreateCalendarPage
    openNavCreateCalendarPage() {
        if (this.global.access_token) {
            this.navCtrl.push(CreateCalendarPage);
        } else {
            let alert = this.alertCtrl.create({
                title: 'รายการล้มเหลว!',
                subTitle: 'สิทธิของท่านไม่สามารถเพิ่มปฏิทินได้',
                buttons: ['OK']
            });
            alert.present();
        }
    }

    // Get google calendar event
    getEvent() {
        var data: any;
        return this.http.get(this.dataUrl).subscribe(_data => {
            data = _data['items'];
            var events = [];
            for (let i = 0; i < data.length; i++) {
                var startTime = data[i].start.dateTime;     // Start Time of event
                var endTime = data[i].end.dateTime;         // End Time of event
                var startDate = data[i].end.date;           // Start date of event
                var endDate = data[i].end.date;             // End date of event

                if (startDate != undefined) {       // All day event is true
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
                else {                              // All day event is false
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
            this.eventSource = events;                  // Store event to eventSource
        });
    }

    // Delete google calendar event
    deleteEvent(eventId) {
        if (this.global.access_token) {                 // If have access_token
            this.http.delete(this.deleteUrl + "/" + eventId, this.httpOptions).subscribe(res => {
                let alert = this.alertCtrl.create({
                    title: 'รายการสำเร็จ!',
                    subTitle: 'ลบข้อมูลเสร็จสิ้น',
                    buttons: ['OK']
                });
                alert.present();
                this.navCtrl.setRoot(CalendarPage);     // Go to CalendarPage
            },
                (error) => {
                    let alert = this.alertCtrl.create({
                        title: error.name,
                        subTitle: error.message,
                        buttons: ['OK']
                    });
                    alert.present();
                }
            );
        } else {
            let alert = this.alertCtrl.create({         // Alert if doesn't have access_token
                title: 'รายการล้มเหลว!',
                subTitle: 'สิทธิของท่านไม่สามารถลบปฏิทินได้',
                buttons: ['OK']
            });
            alert.present();
        }
    }

    // Change title auto when click date in calendar
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    // Change mode (day, week, month)
    changeMode(mode) {
        this.mode = mode;
    }

    // Return to today
    today() {
        this.calendar.currentDate = new Date();
    }

    onCurrentDateChanged(event: Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }

    // Change time format
    checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    // Detect when click event to show detail
    onEventSelected = (event) => {
        var startHour = event.startTime.getHours();
        var startMinute = event.startTime.getMinutes();
        var endHour = event.endTime.getHours();
        var endMinute = event.endTime.getMinutes();

        startHour = this.checkTime(startHour);
        startMinute = this.checkTime(startMinute);
        endHour = this.checkTime(endHour);
        endMinute = this.checkTime(endMinute);

        var startTime = startHour + ":" + startMinute;
        var endTime = endHour + ":" + endMinute;

        if (event.allDay == true) {
            let confirmAlert = this.alertCtrl.create({
                title: event.title,
                message: `<p>รายละเอียด : ${event.description}</p><p>ระยะเวลา : ทั้งวัน </p><p>ผู้สร้าง : ${event.creator}</p>`,
                buttons: [
                    {
                        text: 'ยกเลิก',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'ลบข้อมูล',
                        handler: () => {
                            let confirmDeleteAlert = this.alertCtrl.create({
                                title: 'ยืนยันการลบ',
                                message: `ท่านต้องการยืนยันการลบ : ${event.title}`,
                                buttons: [
                                    {
                                        text: 'ยกเลิก',
                                        role: 'cancel',
                                        handler: () => {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'ลบ',
                                        handler: () => {
                                            this.deleteEvent(event.id);
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
        } else {
            let confirmAlert = this.alertCtrl.create({
                title: event.title,
                message: `<p>รายละเอียด : ${event.description}</p><p>เริ่ม : ${startTime} น. สิ้นสุด : ${endTime} น.</p><p>ผู้สร้าง : ${event.creator}</p>`,
                buttons: [
                    {
                        text: 'ยกเลิก',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'ลบข้อมูล',
                        handler: () => {
                            let confirmDeleteAlert = this.alertCtrl.create({
                                title: 'ยืนยันการลบ',
                                message: `ท่านต้องการยืนยันการลบ : ${event.title}`,
                                buttons: [
                                    {
                                        text: 'ยกเลิก',
                                        role: 'cancel',
                                        handler: () => {
                                            console.log('Cancel clicked');
                                        }
                                    },
                                    {
                                        text: 'ลบ',
                                        handler: () => {
                                            this.deleteEvent(event.id);
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
    }

    // Log when click date
    onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' + (ev.events !== undefined && ev.events.length !== 0));
    }

    markDisabled = (date: Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    }

}