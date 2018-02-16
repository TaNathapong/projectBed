import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';

import { BedDetailsPage } from '../bed-details/bed-details';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    // time = "13:47:00";
    bedsData = []

    constructor(public navCtrl: NavController, private afDB: AngularFireDatabase) {

        this.afDB.list("/beds/").valueChanges().subscribe(_data => {
            this.bedsData = _data;
            console.log(this.bedsData);
        });

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    openNavDetailsPage(item) {
        this.navCtrl.push(BedDetailsPage);
    }



}
