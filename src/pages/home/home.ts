import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GPSService } from '../../app/gps.service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private positions: any[] = [];
  private temperature: any = 0;

  constructor(public navCtrl: NavController, gpsService: GPSService) {
        this.positions = gpsService.positions;
        gpsService.gpsDataUpdated.subscribe((x) => {
          this.positions = gpsService.positions;
        });

  }


  itemSelected(i){
   this.navCtrl.push(DetailPage, {
     index: i
   });
 }


}
