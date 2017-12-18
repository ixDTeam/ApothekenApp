import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FirebaseService {

  public gps_tracking: boolean = true;

}
