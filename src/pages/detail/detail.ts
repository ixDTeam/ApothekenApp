import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GPSService } from '../../app/gps.service';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  position: any;
  index: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, gpsService: GPSService) {
      this.index = navParams.get('index');
      this.position = gpsService.positions[this.index];
      console.log(this.position);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
