import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/home/main.service';
import { food, provinsi } from 'src/app/home/pulau';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {
  private fsFoods:Observable<food[]>;
  fsLoaded:provinsi;
  constructor(private activatedRoute: ActivatedRoute,private mainSrv: MainService,private navCtrl:NavController) { }

  ngOnInit() {
    this.fsFoods = this.mainSrv.listFood();

    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('provId')){return;}
      const id = paramMap.get('provId');
      this.mainSrv.listaProv(id).subscribe(prov=>{
        this.fsLoaded = prov;
      })
  
    });

    console.log(this.fsLoaded);
    console.log(this.fsFoods);
  }

  back(){
    this.navCtrl.back();
  }

}
