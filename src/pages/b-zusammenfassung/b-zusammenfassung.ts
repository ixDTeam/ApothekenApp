import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable'



/**
 * Generated class for the BZusammenfassungPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-b-zusammenfassung',
  templateUrl: 'b-zusammenfassung.html',
})
export class BZusammenfassungPage {

  scanner: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    this.firebaseProvider.ScannerRef.valueChanges(['child_changed']).subscribe(action => {
      //console.log(this.firebaseProvider.ScannerRef);
      //this.newOrder();
      console.log(this.scanner);
    });

    this.firebaseProvider.ScannerRef.snapshotChanges().map(actions => {
    return actions.map(action => ({ key: action.key, ...action.payload.val() }));
  }).subscribe(items => {
    console.log(items.map(item => item));
  });
  }

  ionViewDidLoad() {

  }


newOrder(){
  this.firebaseProvider.newOrder();
}

}
