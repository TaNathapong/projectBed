import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-logs',
  templateUrl: 'logs.html',
})
export class LogsPage {
  today = new Date();
  logs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase) {
    this.afDB.list("/updateLogs/").valueChanges().subscribe(_data => {
      this.logs = _data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogsPage');
  }

}
