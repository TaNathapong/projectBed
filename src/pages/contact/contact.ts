import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ContactDetailsPage } from '../contact-details/contact-details';

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
  contactsData = []

  constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase) {

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

}
