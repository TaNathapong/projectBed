import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-bed-details',
  templateUrl: 'bed-details.html',
})

export class BedDetailsPage {

  bedsData = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, private alertCtrl: AlertController, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => {
      if (data.uid == "7ghwQ6hxxcdVNlYx8EYF5k3mvWz2") {
        this.afDB.list("/beds/").valueChanges().subscribe(_data => {
          this.bedsData = _data;
          console.log(this.bedsData);
        });
      } else {
        this.bedsData = null;
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BedDetailsPage');
  }

  goHome() {
    this.navCtrl.setRoot(HomePage);
  }

  updatePerson(firstName: string, lastName: string): void {
    const personRef: firebase.database.Reference = firebase.database().ref(`/person1/`);
    personRef.update({
      firstName,
      lastName
    })
  }

  updateBed(bed) {
    let prompt = this.alertCtrl.create({
      title: `วอร์ดที่ ${bed.id}`,
      inputs: [
        {
          name: 'blank',
          placeholder: 'จำนวนเตียงที่ว่าง',
          value: bed.blank
        },
      ],
      buttons: [
        {
          text: 'บันทึก',
          handler: data => {
            this.afDB.object('/beds/' + bed.id)
              .update({
                blank: data.blank,
                time: firebase.database.ServerValue.TIMESTAMP
              });
            console.log(bed.time);
            console.log('Save complete');
          }
        }, {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    prompt.present();
  }

}
