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
        // Hide side menu
        this.menu.enable(false);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');

        // Check user sign in with Google. If true will go to homepage
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.auth().getRedirectResult().then((result) => {              // Get user detail from google sing in
                    if (result.user) {
                        this.global.access_token = result.credential.accessToken;   // Get access_token use to manage google calendar
                        this.afAuth.authState.subscribe(data => {
                            if (data && data.email && data.uid) {
                                this.toast.create({
                                    message: `ยินดีต้อนรับ ${data.displayName}`,
                                    duration: 3000
                                }).present();
                            }
                        });
                        this.menu.enable(true);                                     // Enable side menu
                        this.navCtrl.setRoot(HomePage);                             // Go to Home page
                    }
                });
            }
        });
    }

    // Go to Resetpwd page
    openNavResetpwdPage() {
        this.navCtrl.push(ResetpwdPage);
    }

    // Sign in firebase with Email
    async login(user: User): Promise<any> {
        try {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password).then((result) => {
                this.navCtrl.setRoot(HomePage);                     // Go to Home page
                this.menu.enable(true);                             // Enable side menu
                this.afAuth.authState.subscribe(data => {
                    if (data && data.email && data.uid) {
                        this.toast.create({
                            message: `ยินดีต้อนรับ ${data.email}`,
                            duration: 3000
                        }).present();
                    }
                });
            }).catch((error) => {                                   // Catch error to report in app
                let alert = this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: error.message,
                    buttons: ['OK']
                });
                alert.present();
            });
        } catch (error) {                                           // Catch error to report in app
            let alert = this.alertCtrl.create({
                title: 'Error!',
                subTitle: error.message,
                buttons: ['OK']
            });
            alert.present();
        };
    }

    // Sign in firebase with Google
    async googleLogin(): Promise<any> {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/calendar');  // Add scope to get permission to manage google calendar

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

    // Get user detail from google to store in firebase
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
