import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { arts, attraction, food, provinsi, pulau } from './pulau';
import {map,take} from 'rxjs/operators'
import {AngularFirestoreCollection,AngularFirestore,DocumentReference} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class MainService {
//   private pulau:pulau[]=[{
//     pulauId:'p01',
//     nama:'Sumatra',
//     provinsi:[
//       {
//         provId:'pr11',
//         nama:'Sumatra Barat',
//         desc:'Lorem Ipsum Blablabla',
//         food:[{
//           nama:'Makanan 1 Sumatra Barat',
//           desc:'Lorem Ipsum'
//         },{
//           nama:'Makanan 2 Sumbar',
//           desc:'Lorem Ipsum'
//         }],
//         attraction:[{
//           nama:'Attraction 1 Sumbar',
//           desc:'Lorem Ipsum'
//         }],
//         arts:[{
//           nama:'Seni Budaya 1 Sumbar',
//           desc:'Lorem Ipsum'
//         }]
//       },
//       {
//         provId:'pr12',
//         nama:'Aceh',
//         desc:'Dorime Ameno',
//         food:[{
//           nama:'Makanan Aceh 1',
//           desc:'Dorime'
//         }],
//         attraction:[{
//           nama:'Attraction Aceh 1',
//           desc:'Dorime'
//         }],
//         arts:[{
//           nama:'Seni Budaya Aceh 1',
//           desc:'Dorime Ameno'
//         }]
//       }
//     ]
//   },{
//     pulauId:'p02',
//     nama:'Jawa',
//     provinsi:[{
//       provId:'pr21',
//       nama:'Banten',
//       desc:'Dorime Ameno',
//       food:[{
//         nama:'Makanan Banten 1',
//         desc:'Dorime Ameno'
//       }],
//       attraction:[{
//         nama:'Attraction Banten 1',
//         desc:'Dorime Ameno'
//       }],
//       arts:[{
//         nama:'Seni Budaya Banten',
//         desc:'Dorime Ameno'
//       }]
//     }]
//   }
// ];

private pulau:pulau[]=[{
  pulauId:'p01',
  nama:'Sumatra',
},{
  pulauId:'p02',
  nama:'Jawa'
}];

private prov:provinsi[]=[{
  pulauId:'p01',
  provId:'pr11',
  nama:'Aceh',
  desc:'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
},{
  pulauId:'p01',
  provId:'pr12',
  nama:'Sumatra Barat',
  desc:'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
},
{
  pulauId:'p02',
  provId:'pr21',
  nama:'Banten',
  desc:'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti,'
}];

private food:food[]=[{
  fId:'f121',
  provId:'pr12',
  nama:'Makanan 1 SumBarat',
  desc:'Lorem Ipsum',
  loc:{
    lat : -123,
    lng : 123
  }
 },{
  fId:'f122',
  provId:'pr12',
  nama:'Makanan 2 Sumbar',
  desc:'Lorem Ipsum',
  loc:{
    lat : -123,
    lng : 123
  }
 },{
    fId:'f111',
   provId:'pr11',
   nama:'Makanana Aceh 1',
   desc:'Dorime Ameno',
   loc:{
    lat : -123,
    lng : 123
  }
 },{
  fId:'f211',
   provId:'pr21',
   nama:'Makanan Banten 1',
   desc:'Dorime Ameno',
   loc:{
    lat : -123,
    lng : 123
  }
 }]

 private attract:attraction[]=[{
   aId:'a111',
   provId:'pr11',
   nama:'Attraction Sumbar 1',
   desc:'Dorime Ameno'
 },{
  aId:'a112',
   provId:'pr11',
   nama:'Attraction Sumbar 2',
   desc:'Dorime Ameno'
 },{
  aId:'a121',
   provId:'pr12',
   nama:'Attraction Aceh 1',
   desc:'Dorime Ameno'
 },{
  aId:'a211',
   provId:'pr21',
   nama:'Attraction Banten',
   desc:'Dorime'
 }];

 private art:arts[]=[{
   provId:'pr11',
   nama:'Seni Budaya Sumbar 1',
   desc:'Dorime Ameno'
 },{
   provId:'pr11',
   nama:'Seni Budaya Sumbar 2',
   desc:'Dorime Ameno'
 },{
   provId:'pr12',
   nama:'Seni Budaya Aceh 1',
   desc:'Dorime Ameno'
 },{
   provId:'pr21',
   nama:'Seni Budaya Banten',
   desc:'Dorime'
 }];
 private pulauCollect:AngularFirestoreCollection<pulau>;

 constructor(private afs:AngularFirestore) {
  //Pulau
  this.pulauCollect = this.afs.collection<pulau>('pulau');
 }

  getAllPulau(){
    return this.pulau;
  }

  getPulau(pulauId: string){
    return this.pulau.find(pulau => pulau.pulauId === pulauId);
  }

  getAllProv(){
    return this.prov;
  }

  getProv(provId: string){
    return this.prov.find(prov => prov.provId === provId);
  }

  getFoods(fId:string){
    return this.food.find(food => food.fId === fId);
  }

  getAllFoods(){
    return this.food;
  }

  getAllAttraction(){
    return this.attract;
  }

  getAllArts(){
    return this.art;
  }


  


}
