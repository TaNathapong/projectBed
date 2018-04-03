import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

import { User } from "../../models/user";
import { HomePage } from '../home/home';
import { ResetpwdPage } from '../resetpwd/resetpwd';
import { GlobalProvider } from "../../providers/global/global";

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {
    user = {} as User;
    authState: any = null;

    constructor(public global: GlobalProvider, public toast: ToastController, public navCtrl: NavController, public menu: MenuController, public navParams: NavParams, public alertCtrl: AlertController, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
        // this.menu.enable(false);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    openNavResetpwdPage() {
        this.navCtrl.push(ResetpwdPage);
    }

    async login(user: User): Promise<any> {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((result) => {
            this.navCtrl.setRoot(HomePage);
            this.menu.enable(true);
            this.afAuth.authState.subscribe(data => {
                if (data && data.email && data.uid) {
                    this.toast.create({
                        message: `ยินดีต้อนรับ ${data.email}`,
                        duration: 3000
                    }).present();
                }
            });
        }).catch((error) => {
            console.error(error);
            let alert = this.alertCtrl.create({
                title: 'Error!',
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        });
    }

    async googleLogin(): Promise<any> {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/calendar');

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.auth().getRedirectResult().then((result) => {
                    if (result.user) {
                        this.global.access_token = result.credential.accessToken;
                        this.afAuth.authState.subscribe(data => {
                            if (data && data.email && data.uid) {
                                this.toast.create({
                                    message: `ยินดีต้อนรับ ${data.displayName}`,
                                    duration: 3000
                                }).present();
                            }
                        });
                        console.log(user);
                        this.menu.enable(true);
                        this.navCtrl.setRoot(HomePage);
                    }
                });
            } else {
                firebase.auth().signInWithRedirect(provider).then(function () {
                    return firebase.auth().getRedirectResult();
                }).then((result) => {
                    this.authState = result.user;
                    this.updateUserData();
                }).catch((error) => {
                    let alert = this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: error.message,
                        buttons: ['OK']
                    });
                    alert.present();
                });
            }
        })
    }

    private updateUserData(): void {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        let path = `profiles/${this.currentUserId}`; // Endpoint on firebase
        let data = {
            email: this.authState.email,
            name: this.authState.displayName,
            picture: this.authState.photoURL
        }

        this.afDB.object(path).update(data).catch(error => console.log(error));
    }

    get authenticated(): boolean {
        return this.authState !== null;
    }

    get currentUserId(): string {
        return this.authenticated ? this.authState.uid : '';
    }

}
