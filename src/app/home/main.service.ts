import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { arts, attraction, food, provinsi, pulau } from './pulau';
import {map,take} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MainService {

  private pulau: pulau[] = [
    {
      pulauId: 'p01',
      nama: 'Sumatra',
      imgUrl: '../../assets/sumatra.png'
    },
    {
      pulauId: 'p02',
      nama: 'Jawa',
      imgUrl: '../../assets/jawa.png'
    },
    {
      pulauId: 'p03',
      nama: 'Bali & Nusa Tenggara',
      imgUrl: '../../assets/bali.png'
    },
    {
      pulauId: 'p04',
      nama: 'Kalimantan',
      imgUrl: '../../assets/kalimantan.png'
    },
    {
      pulauId: 'p05',
      nama: 'Sulawesi',
      imgUrl: '../../assets/sulawesi.png'
    },
    {
      pulauId: 'p06',
      nama: 'Papua',
      imgUrl: '../../assets/papua.png'
    }
  ];

  private prov: provinsi[] = [{
    pulauId: 'p01',
    provId: 'pr11',
    nama: 'Aceh',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Meuseujid_Raya_Baiturrahman%2C_Aceh.jpg',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p01',
    provId: 'pr12',
    nama: 'Sumatra Barat',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Rektorat_UNP1.JPG/220px-Rektorat_UNP1.JPG',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p01',
    provId: 'pr13',
    nama: 'Sumatra Utara',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Istana_Siak.jpg',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p01',
    provId: 'pr14',
    nama: 'Riau',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Meuseujid_Raya_Baiturrahman%2C_Aceh.jpg',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p01',
    provId: 'pr15',
    nama: 'Jambi',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Mount_Kerinci_from_Kayuaro.jpg',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p01',
    provId: 'pr16',
    nama: 'Bengkulu',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Bengkulu_City_and_Fort_Marlborough.jpg',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p01',
    provId: 'pr17',
    nama: 'Lampung',
    imageUrl: 'https://1.bp.blogspot.com/-vLxvmh94xMI/XdG1LBwkeWI/AAAAAAAAIs8/wlC7afXAhZIXjFTGe9Ck69Ang3aishEiACLcBGAsYHQ/s1600/tempat-wisata-di-lampung.jpg',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p02',
    provId: 'pr21',
    nama: 'Banten',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oyorooms.com%2Fid%2Fblog%2F5-wisata-religi-di-banten-yang-anti-mainstream%2F&psig=AOvVaw0RCZlK0SdVt24NPKGYQTOY&ust=1607333349753000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCMgMOFue0CFQAAAAAdAAAAABAD',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p04',
    provId: 'pr41',
    nama: 'Kalimantan Barat',
    imageUrl: 'https://umkmkalbar.id/wp-content/uploads/2019/05/Sungai-Kapuas.jpg',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p04',
    provId: 'pr42',
    nama: 'Kalimantan Timur',
    imageUrl: 'https://cdns.klimg.com/merdeka.com/i/w/news/2019/08/24/1103817/540x270/3-wilayah-berpotensi-jadi-lokasi-ibu-kota-baru-di-kalimantan-timur.jpg',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p04',
    provId: 'pr43',
    nama: 'Kalimantan Selatan',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtm_tyUvS6ASRwrkPFi45Q2B6X92CyEGV_NA&usqp=CAU',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p04',
    provId: 'pr44',
    nama: 'Kalimantan Utara',
    imageUrl: 'data:image/jpeg;base64,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',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  },
  {
    pulauId: 'p04',
    provId: 'pr45',
    nama: 'Kalimantan Tengah',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtqg1YrevJF7e9BG6nbDMuuyBFib9JySlu1Q&usqp=CAU',
    desc: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
  }];


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
  //
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


  getAllPulau() {
    return this.pulau;
  }

  getPulau(pulauId: string) {
    return this.pulau.find(pulau => pulau.pulauId === pulauId);
  }

  getAllProv() {
    return this.prov;
  }

  getProv(provId: string) {
    return this.prov.find(prov => prov.provId === provId);
  }


  




}
