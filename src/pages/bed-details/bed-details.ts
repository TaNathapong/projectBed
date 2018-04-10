import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@IonicPage()
@Component({
    selector: 'page-bed-details',
    templateUrl: 'bed-details.html',
})

export class BedDetailsPage {

    bedsData = [];
    profileData = {};

    constructor(public navCtrl: NavController, public navParams: NavParams, private afDB: AngularFireDatabase, private alertCtrl: AlertController, private afAuth: AngularFireAuth) {
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
        console.log('ionViewDidLoad BedDetailsPage');
    }

    updateBed(bed) {
        let prompt = this.alertCtrl.create({
            title: `วอร์ดที่ ${bed.id}`,
            message: "กรอกจำนวนเตียงที่ว่าง",
            inputs: [
                {
                    name: 'blank',
                    placeholder: 'จำนวนเตียงที่ว่าง',
                },
            ],
            buttons: [
                {
                    text: 'ยกเลิก',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: 'ยืนยัน',
                    handler:
                        data => {
                            if (data.blank != '') {
                                this.afDB.object('/wards/' + bed.id).update({
                                    blank: data.blank,
                                    time: firebase.database.ServerValue.TIMESTAMP
                                });
                                let alert = this.alertCtrl.create({
                                    title: 'บันทึกข้อมูลสำเร็จ',
                                    subTitle: 'อัพเดทจำนวนเตียงว่างเสร็จสิ้น',
                                    buttons: ['OK']
                                });
                                alert.present();
                                console.log('Save complete');
                            } else {
                                let alert = this.alertCtrl.create({
                                    title: 'รายการไม่ถูกต้อง!',
                                    subTitle: 'กรุณากรอกจำนวนเตียง',
                                    buttons: ['OK']
                                });
                                alert.present();
                            }
                        }
                }
            ]
        });
        prompt.present();
    }

    reduceBed(bed) {
        if (bed.blank > 0) {
            let confirm = this.alertCtrl.create({
                title: `ยืนยันการลดเตียงว่าง ?`,
                message: `คุณต้องการยืนยันการลดเตียงว่างจากวอร์ด ${bed.name}`,
                buttons: [
                    {
                        text: 'ยกเลิก',
                        handler: () => {
                            console.log('Cancel');
                        }
                    },
                    {
                        text: 'ยืนยัน',

                        handler: () => {
                            this.afDB.object('/wards/' + bed.id).update({
                                blank: bed.blank - 1,
                                time: firebase.database.ServerValue.TIMESTAMP
                            });
                            let alert = this.alertCtrl.create({
                                title: 'บันทึกข้อมูลสำเร็จ',
                                subTitle: 'อัพเดทจำนวนเตียงว่างเสร็จสิ้น',
                                buttons: ['OK']
                            });
                            alert.present();
                            console.log('Save complete');
                        }
                    }
                ]
            });
            confirm.present();
        }
        else {
            let alert = this.alertCtrl.create({
                title: 'รายการไม่ถูกต้อง !',
                subTitle: `ไม่สามารถลดเตียงว่างจากวอร์ด ${bed.name} ได้เนื่องจากไม่มีเตียงผู้ป่วยที่ว่างในขณะนี้`,
                buttons: ['OK']
            });
            alert.present();
        }
    }

    addBed(bed) {
        let confirm = this.alertCtrl.create({
            title: `ยืนยันการเพิ่มเตียงว่าง ?`,
            message: `คุณต้องการยืนยันการเพิ่มเตียงว่างเข้าสู่วอร์ด ${bed.name}`,
            buttons: [
                {
                    text: 'ยกเลิก',
                    handler: () => {
                        console.log('Cancel');
                    }
                },
                {
                    text: 'ยืนยัน',

                    handler: () => {
                        this.afDB.object('/wards/' + bed.id)
                            .update({
                                blank: bed.blank + 1,
                                time: firebase.database.ServerValue.TIMESTAMP
                            });
                        let alert = this.alertCtrl.create({
                            title: 'รายการสำเร็จ',
                            subTitle: 'อัพเดทจำนวนเตียงว่างเสร็จสิ้น',
                            buttons: ['OK']
                        });
                        alert.present();
                        console.log('Save complete');
                    }
                }
            ]
        });
        confirm.present();
    }
}
