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
                // Get user's details from firebase
                this.afDB.object(`profiles/${data.uid}`).valueChanges().subscribe(_data => {
                    this.profileData = _data;
                });

                // Get data of wards from firebase
                this.afDB.list("/wards/").valueChanges().subscribe(_data => {
                    this.bedsData = _data;
                });
            }
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HomePage');
    }

    // Go to BedDetailsPage
    openNavDetailsPage() {
        this.navCtrl.push(BedDetailsPage);
    }

    // Go to LogsPage
    openLogsPage() {
        this.navCtrl.push(LogsPage);
    }
}
