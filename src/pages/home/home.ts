import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { BedDetailsPage } from '../bed-details/bed-details';
import { LogsPage } from '../logs/logs';
import { GlobalProvider } from "../../providers/global/global";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    bedsData = []
    profileData = {};

    constructor(public global: GlobalProvider, public navCtrl: NavController, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
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
        console.log('ionViewDidLoad HomePage');
    }

    openNavDetailsPage() {
        this.navCtrl.push(BedDetailsPage);
    }

    openAcLogsPage() {
        this.navCtrl.push(LogsPage);
    }
}
