import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ContactDetailsPage } from '../contact-details/contact-details';
import { CallNumber } from '@ionic-native/call-number';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contactsData = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, private callNumber: CallNumber) {

    this.afDB.list("/contacts/").valueChanges().subscribe(_data => {
      this.contactsData = _data;
      console.log(this.contactsData);
    });

  }

  openNavSubContact(contact) {
    this.navCtrl.push(ContactDetailsPage, {
      name: contact.name,
      type: contact.type,
      phone: contact.phone,
      aptitude: contact.aptitude,
      gender: contact.gender,
      email: contact.email,
      picture: contact.picture
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }

  call(phone) {
    this.callNumber.callNumber(phone, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
}
