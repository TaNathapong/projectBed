import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-bed-details',
  templateUrl: 'bed-details.html',
})

export class BedDetailsPage {

  bedsData = [];
  profileData = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, private alertCtrl: AlertController, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {

        this.afDB.list("/beds/").valueChanges().subscribe(_data => {
          this.bedsData = _data;
          console.log(this.bedsData);
        });

        this.afDB.object(`profiles/${data.uid}`).valueChanges().subscribe(_data => {
          this.profileData = _data;
          console.log(this.profileData);
        });

      }
    });
    console.log('ionViewDidLoad BedDetailsPage');
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
