import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public orders: Observable<any>;
  public ordersOB: Observable<any>;

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, public db: AngularFireDatabase) {
    this.orders = db.list('/Orders').valueChanges();
    this.ordersOB = db.object('/Orders').valueChanges();
    console.log(this.orders);
    console.log(this.ordersOB);
  }


}
