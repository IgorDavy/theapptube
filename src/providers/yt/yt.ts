import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as rp from 'request-promise';
const API_URL = 'http://10.0.2.2:3000/';
/*
  Generated class for the YtProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YtProvider {
  constructor() {}

  search(latitude, longitude, radius) {
    const uri = `${API_URL}api/VideosLists/search?latitude=${latitude}&longitude=${longitude}&radius=${radius * 1000}`;
    return rp({uri: uri, json: true}).then((res) => {
      console.log(res);
      return res;
    })
  };
}
