import { Component, Inject } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';
import 'rxjs/Rx';

export interface CalendarRequestOptionsArgs extends RequestOptionsArgs {
  showDeleted?: boolean;
}

@Component({
  selector: 'page-scheduler',
  templateUrl: '/scheduler.html'
})
export class SchedulerPage {
  API_KEY = 'AIzaSyB58v5A6gq5JLqQxkGjbtkZG9mMTH1GPpQ';
  CALENDAR_ID = 'ck6s9si7a6use63smh6qib2ips@group.calendar.google.com';
  dataUrl = ['https://www.googleapis.com/calendar/v3/calendars/', this.CALENDAR_ID, '/events?key=', this.API_KEY].join('');
  dataSource: any;
  currentDate = new Date();

  private getData(options: any, requestOptions: CalendarRequestOptionsArgs) {
    return this.http.get(this.dataUrl, requestOptions).toPromise().then(this.extractData);
  }

  private extractData(res: Response) {
    return res.json().items;
  }

  constructor(@Inject(Http) private http: Http) {
    this.dataSource = new DataSource({
      store: new CustomStore({
        load: (options) => this.getData(options, { showDeleted: false })
      })
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulerPage');
  }

}