import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ManageWorkProvider {

  constructor(public http: HttpClient, private afDB: AngularFireDatabase) {
    console.log('Hello ManageWorkProvider Provider');
    if (firebase.database.ServerValue.TIMESTAMP == 0) { }

  }
}
