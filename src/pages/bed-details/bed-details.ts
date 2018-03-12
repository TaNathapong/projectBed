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

  admin = "Admin";
  bedsData = [];
  profileData = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, private alertCtrl: AlertController, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) {
        this.afDB.list("/wards/").valueChanges().subscribe(_data => {
          this.bedsData = _data;
        });
        this.afDB.object(`profiles/${data.uid}`).valueChanges().subscribe(_data => {
          this.profileData = _data;
        });
      }
    });
  }

  ionViewDidLoad() {
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
            this.afDB.object('/wards/' + bed.id)
              .update({
                blank: data.blank,
                time: firebase.database.ServerValue.TIMESTAMP
              });
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

  addBed(bed) {
    if (bed.blank > 0) {
      let confirm = this.alertCtrl.create({
        title: `ยืนยันการเพิ่มคนไข้ ?`,
        message: `คุณต้องการยืนยันการเพิ่มคนไข้เข้าสู่วอร์ด ${bed.name}`,
        buttons: [
          {
            text: 'ยกเลิก',
            handler: () => {
              console.log('Cancel');
            }
          },
          {
            text: 'ยืนยัน',

            handler: () => {
              this.afDB.object('/wards/' + bed.id)
                .update({
                  blank: bed.blank - 1,
                  time: firebase.database.ServerValue.TIMESTAMP
                });
              console.log('Save complete');
            }
          }
        ]
      });
      confirm.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'รายการไม่ถูกต้อง !!!',
        subTitle: `ไม่สามารถเพิ่มคนไข้เข้าสู่วอร์ด ${bed.name} ได้เนื่องจากไม่มีเตียงผู้ป่วยที่ว่างในขณะนี้`,
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
