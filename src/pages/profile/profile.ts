import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Profile } from "../../models/profile";
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  profile = {} as Profile;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private afAuth: AngularFireAuth, private afDB: AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  createProfile() {
    this.afAuth.authState.subscribe(auth => {
      if (this.profile.firstname != null || this.profile.lastname != null || this.profile.username != null) {
        this.afDB.object(`profiles/${auth.uid}`).update(this.profile)
          .then(() => this.navCtrl.setRoot(HomePage))
        let alert = this.alertCtrl.create({
          title: 'บันทึกข้อมูลสำเร็จ',
          subTitle: 'การอัพเดทข้อมูลเสร็จสิ้น',
          buttons: ['OK']
        });
        alert.present();
      } else {
        let alert = this.alertCtrl.create({
          title: 'รายการไม่ถูกต้อง!',
          subTitle: 'กรุณากรอกข้อมูล',
          buttons: ['OK']
        });
        alert.present();

      }
    });
  }

}
