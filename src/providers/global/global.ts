import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalProvider {

  public access_token: string;

  constructor(public http: HttpClient) {
  }

}
