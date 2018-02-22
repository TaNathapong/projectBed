import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, MenuController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from "../../models/user";
import { HomePage } from '../home/home';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    user = {} as User;

    constructor(public toast: ToastController, public navCtrl: NavController, public menu: MenuController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private afAuth: AngularFireAuth) {
        this.menu.enable(false);
    }

    async login(user: User) {
        this.menu.enable(true);
        try {
            const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
            if (result) {
                this.navCtrl.setRoot(HomePage);
                this.afAuth.authState.subscribe(data => {
                    if (data && data.email && data.uid) {
                        this.toast.create({
                            message: `Welcome ${data.email}`,
                            duration: 3000
                        }).present();
                    }
                });
            }
        } catch (e) {
            console.error(e);
            let alert = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'the email / password combination is not valid',
                buttons: ['OK']
            });
            alert.present();
        }
    }

    async register(user: User) {
        this.menu.enable(true);
        try {
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(
                user.email,
                user.password
            );
            if (result) {
                this.navCtrl.setRoot(HomePage);
            }
        } catch (e) {
            console.error(e);
            let alert = this.alertCtrl.create({
                title: 'Alert!',
                subTitle: 'the email / password combination is not valid',
                buttons: ['OK']
            });
            alert.present();
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

}
