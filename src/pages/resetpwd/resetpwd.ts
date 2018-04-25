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

    // Reset firebase password by send Email to confirm new password
    async resetPwd(email) {
        let confirm = this.alertCtrl.create({                           // Confirm send email
            title: "Reset Password",
            message: "ท่านต้องการยืนยันการส่งอีเมลการรีเซ็ตรหัสผ่านหรือไม่?",
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
                            this.afAuth.auth.sendPasswordResetEmail(email)  // Send Email
                                .then(res => {
                                    console.log("Email sent");
                                    let alert = this.alertCtrl.create({     // Alert email sent
                                        title: 'Email sent!',
                                        subTitle: 'Email sent compete',
                                        buttons: ['OK']
                                    });
                                    alert.present();
                                });
                        } catch (e) {                                       // Alert Error
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
