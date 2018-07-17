import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent {

  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
      this.items = db.collection('/Batches').valueChanges();
  }

}
