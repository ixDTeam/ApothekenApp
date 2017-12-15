import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GPSService } from '../../app/gps.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public gpsService: GPSService) {
  }


}
