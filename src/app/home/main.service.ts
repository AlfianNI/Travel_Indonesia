import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { arts, attraction, food, popular, provinsi, pulau } from './pulau';
import {map,take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  
  

  // private attract: attraction[] = [{
  //   provId: 'pr11',
  //   nama: 'Attraction Aceh 1',
  //   desc: 'Dorime Ameno'
  // }, {
  //   provId: 'pr11',
  //   nama: 'Attraction Sumbar 2',
  //   desc: 'Dorime Ameno'
  // }, {
  //   provId: 'pr12',
  //   nama: 'Attraction Aceh 1',
  //   desc: 'Dorime Ameno'
  // }, {
  //   provId: 'pr21',
  //   nama: 'Attraction Banten',
  //   desc: 'Dorime'
  // }];

  // private art: arts[] = [{
  //   provId: 'pr11',
  //   nama: 'Seni Budaya Sumbar 1',
  //   desc: 'Dorime Ameno'
  // }, {
  //   provId: 'pr11',
  //   nama: 'Seni Budaya Sumbar 2',
  //   desc: 'Dorime Ameno'
  // }, {
  //   provId: 'pr12',
  //   nama: 'Seni Budaya Aceh 1',
  //   desc: 'Dorime Ameno'
  // }, {
  //   provId: 'pr21',
  //   nama: 'Seni Budaya Banten',
  //   desc: 'Dorime'
  // }];

  //Pulau
  private pulauCollect:AngularFirestoreCollection<pulau>;
  private fsPulau:Observable<pulau[]>;
  //Prov
  private provCollect:AngularFirestoreCollection<provinsi>;
  private fsProv:Observable<provinsi[]>;
  //Arts
  private artsCollect:AngularFirestoreCollection<arts>;
  private fsArts:Observable<arts[]>;
  //Foods
  private foodCollect:AngularFirestoreCollection<food>;
  private fsFood:Observable<food[]>
  //Attractions
  private attractionsCollect:AngularFirestoreCollection<attraction>
  private fsAttraction:Observable<attraction[]>
  //Popular
  private popularCollect:AngularFirestoreCollection<popular>
  private fsPopular:Observable<popular[]>
  constructor(private afs:AngularFirestore) { 
    this.pulauCollect = this.afs.collection<pulau>('pulau');
    this.fsPulau = this.pulauCollect.snapshotChanges().pipe(
      map(changes => {
          return changes.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return {id,...data};
          });
      })
  );
    this.provCollect = this.afs.collection<provinsi>('provinsi');
    this.fsProv = this.provCollect.snapshotChanges().pipe(
      map(changes=>{
        return changes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data};
        });
      })
    );
      //Arts Collect
    this.artsCollect = this.afs.collection<arts>('arts');
    this.fsArts = this.artsCollect.snapshotChanges().pipe(
      map(changes=>{
        return changes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data};
        });
      })
    );

    //Foods Collect
    this.foodCollect = this.afs.collection<food>('food');
    this.fsFood = this.foodCollect.snapshotChanges().pipe(
      map(changes=>{
        return changes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data};
        });
      })
    );

    //Attraction COllect
    this.attractionsCollect = this.afs.collection<attraction>('attraction');
    this.fsAttraction = this.attractionsCollect.snapshotChanges().pipe(
      map(changes=>{
        return changes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data};
        });
      })
    );

    //popular COllect
    this.popularCollect = this.afs.collection<popular>('popular');
    this.fsPopular = this.popularCollect.snapshotChanges().pipe(
      map(changes=>{
        return changes.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id,...data};
        });
      })
    );

  }

  listPulau(): Observable<pulau[]> {
    return this.fsPulau;
  }

  listProv(): Observable<provinsi[]> {
    return this.fsProv;
  }

  listArts():Observable<arts[]>{
    return this.fsArts;
  }

  listFood():Observable<food[]>{
    return this.fsFood;
  }

  listAttraction():Observable<attraction[]>{
    return this.fsAttraction;
  }

  listPopular():Observable<popular[]>{
    return this.fsPopular;
  }


  listaPulau(id: string): Observable<pulau> {
    return this.pulauCollect.doc<pulau>(id).valueChanges().pipe(
      take(1),
      map(pulau=>{
        pulau.id = id;
        return pulau;
      })
    );
}

  listaProv(id:string):Observable<provinsi>{
    return this.provCollect.doc<provinsi>(id).valueChanges().pipe(
      take(1),
      map(prov=>{
        prov.id = id;
        return prov;
      })
    );
  }

  listaFood(id:string):Observable<food>{
    return this.foodCollect.doc<food>(id).valueChanges().pipe(
      take(1),
      map(food=>{
        food.id = id;
        return food;
      })
    );
  }

  listaAttraction(id:string):Observable<attraction>{
    return this.attractionsCollect.doc<food>(id).valueChanges().pipe(
      take(1),
      map(attraction=>{
        attraction.id = id;
        return attraction;
      })
    );
  }







  




}
