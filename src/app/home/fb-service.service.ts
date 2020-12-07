import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { arts, attraction, food, provinsi, pulau } from './pulau';
import {map,take} from 'rxjs/operators'
import {AngularFirestoreCollection,AngularFirestore,DocumentReference,FirestoreSettingsToken} from '@angular/fire/firestore'


@Injectable({
  providedIn: 'root'
})
export class FbServiceService {
  private pulau:Observable<pulau[]>;
  private pulauCollect:AngularFirestoreCollection<pulau>;

  constructor(private afs:AngularFirestore) {
    //Pulau
    this.pulauCollect = this.afs.collection<pulau>('pulau');
   }
   
  


   list(): Observable<pulau[]> {
    return this.pulauCollect.snapshotChanges().pipe(
        // Again we want to build a Typed JS Object from the Document
        map(changes => {
            return changes.map(a => {
                const data = a.payload.doc.data();
                //data.id = a.payload.doc.id;
                return data;
            });
        })
    );
}
}



