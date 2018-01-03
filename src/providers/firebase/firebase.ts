import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';


@Injectable()
export class FirebaseProvider {

    orders: Observable<any[]>;
    ordersRef: AngularFireList<any>;

  constructor(public db: AngularFireDatabase) {
        this.ordersRef = db.list('/Orders/');
        this.orders = this.ordersRef.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
  }


      addItem(newElement: string) {
        this.ordersRef.push({ Apotheke: newElement });
      }

      deleteItem(key: string) {
      this.ordersRef.remove(key);
    }

    updateItem(key: string, element: string, newElement: string) {
    this.ordersRef.update(key, { Apotheke: newElement });
  }

}
