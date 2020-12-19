import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/home/main.service';
import { attraction, provinsi } from 'src/app/home/pulau';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.page.html',
  styleUrls: ['./attractions.page.scss'],
})
export class AttractionsPage implements OnInit {
  private fsAttract:Observable<attraction[]>;
  fsLoaded:provinsi;
  constructor(private activatedRoute: ActivatedRoute,private mainSrv: MainService,private navCtrl:NavController) { }

  ngOnInit() {
    this.fsAttract = this.mainSrv.listAttraction();

    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('attId')){return;}
      const id = paramMap.get('attId');
      this.mainSrv.listaProv(id).subscribe(prov=>{
        this.fsLoaded = prov;
      })
  
    });
  }
  back(){
    this.navCtrl.back();
  }
}
