import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-contact-details',
  templateUrl: 'contact-details.html',
})
export class ContactDetailsPage {
  name: string;
  type: string;
  phone: string;
  aptitude: string;
  gender: string;
  email: string;
  picture: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactDetailsPage');
    this.name = this.navParams.get('name');
    this.type = this.navParams.get('type');
    this.aptitude = this.navParams.get('aptitude');
    this.gender = this.navParams.get('gender');
    this.phone = this.navParams.get('phone');
    this.email = this.navParams.get('email');
    this.picture = this.navParams.get('picture');
  }
  call(phone) {
    this.callNumber.callNumber(phone, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
}
