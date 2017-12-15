import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class GPSService {
  public positions: any[];
  private interval: any = null;
  private heartrate: any = 0;
  private temperature: any = 0;
  private wind: any = 0;

  public gps_tracking: boolean = true;


  public gpsDataUpdated: any = null;
  public _gpsDataObserver: Observable<any>;
  constructor() {
    this.positions = [];
    try {
      window.clearInterval(this.interval);
    }
    catch (e) {
    }
      this.gpsDataUpdated = Observable.create(observer => {
        this._gpsDataObserver = observer;
        this.interval = window.setInterval(() => {
          try {
            if(this.gps_tracking){
                var options = {
                  maximumAge: 300000, timeout: 5000, enableHighAccuracy: true
                };
              navigator.geolocation.getCurrentPosition((position) => {
                var data:Dataset =
                {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                  heartrate: Math.round(Math.random() * (180-60) + 60),
                  wind: Math.round(Math.random() * (50-2) + 2)
                }
                this.positions.push(data);
                observer.next(data);
              }, (e) => { console.log(e); }, options);
            }
          }
          catch (e) {
            window.clearInterval(this.interval);
          }
        }, 5000);
      }).publish();
    this.gpsDataUpdated.connect();
  }

}
