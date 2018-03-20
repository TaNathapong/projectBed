import { Component } from '@angular/core';
import { IonicPage, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
    selector: 'page-resetpwd',
    templateUrl: 'resetpwd.html',
})
export class ResetpwdPage {

    email: string;

    constructor(public alertCtrl: AlertController, private afAuth: AngularFireAuth) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ResetpwdPage');
    }

    async resetPwd(email) {
        let confirm = this.alertCtrl.create({
            title: "Reset Password",
            message: "ท่านต้องการยืนยันการส่งอีเมลการรีเซ็ตรหัสผ่านหรือไม่ ?",
            buttons: [
                {
                    text: 'ปฏิเสธ',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'ยืนยัน',
                    handler: async () => {
                        console.log('Agree clicked');
                        try {
                            const result = await this.afAuth.auth.sendPasswordResetEmail(email);
                            if (result) {
                                console.log("Email sent");
                            }
                        } catch (e) {
                            console.error(e);
                            let alert = this.alertCtrl.create({
                                title: 'Error!',
                                subTitle: e.message,
                                buttons: ['OK']
                            });
                            alert.present();
                        }
                    }
                }
            ]
        });
        confirm.present();
    }
}
