import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';


@Injectable()
export class FirebaseProvider {

    orders: Observable<any[]>;
    ordersRef: AngularFireList<any>;
    ScannerRef: AngularFireList<any>;


    medikament:any = '';
    dosierung_Mo:any = '';
    dosierung_Mi:any = '';
    dosierung_Ab:any = '';
    dosierung_Na:any = '';

    dosierung_laenge:any = '';
    dosierung_einheit:any = '';


  constructor(public db: AngularFireDatabase) {
        this.ScannerRef = db.list('/Scanner/');
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


    newOrder(){
    let Order = {
          'medikament': this.medikament,
          dosierung: {
            'dosierung_Mo': this.dosierung_Mo,
            'dosierung_Mi': this.dosierung_Mi,
            'dosierung_Ab': this.dosierung_Ab,
            'dosierung_Na': this.dosierung_Na,
            'dosierung_laenge': this.dosierung_laenge,
            'dosierung_einheit': this.dosierung_einheit
          }
        }
    this.ordersRef.push({ Order });
    }

    updateItem(key: string, element: string, newElement: string) {
    this.ordersRef.update(key, { Apotheke: newElement });
  }

}
