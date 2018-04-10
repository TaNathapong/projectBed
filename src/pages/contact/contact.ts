import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { CallNumber } from '@ionic-native/call-number';
import * as firebase from 'firebase';

import { ContactDetailsPage } from '../contact-details/contact-details';

@IonicPage()
@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html',
})
export class ContactPage {

    public contactList: Array<any>;
    public loadedContactList: Array<any>;
    public contactRef: firebase.database.Reference;

    items = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, private callNumber: CallNumber) {
        this.contactRef = firebase.database().ref('/contacts');
        console.log(this.contactRef);

        this.contactRef.on('value', countryList => {
            let countries = [];
            countryList.forEach(country => {
                countries.push(country.val());
                return false;
            });

            this.contactList = countries;
            this.loadedContactList = countries;
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ContactPage');
    }

    initializeItems(): void {
        this.contactList = this.loadedContactList;
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

    initializeContacts() {
        this.afDB.list("/contacts/").valueChanges().subscribe(_data => {
            this.contactList = _data;
        });
    }

    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.contactList = this.contactList.filter((item) => {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

    call(phone) {
        this.callNumber.callNumber(phone, true)
            .then(() => console.log('Launched dialer'))
            .catch(() => console.log('Error launching dialer!'));
    }
}
