
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getOrders(){
    return this.afd.list('/orders/');
  }


  addOrder(order){
    this.afd.list('/orders/').push(order);
  }

  removeitem(id){
    this.afd.list('/orders/').remove(id);
  }

}
