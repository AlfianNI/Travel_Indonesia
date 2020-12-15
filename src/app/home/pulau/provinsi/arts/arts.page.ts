import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MainService } from 'src/app/home/main.service';
import { arts, provinsi } from 'src/app/home/pulau';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.page.html',
  styleUrls: ['./arts.page.scss'],
})
export class ArtsPage implements OnInit {
  private fsArts:Observable<arts[]>;
  fsLoaded:provinsi;
  constructor(private activatedRoute: ActivatedRoute,
    private mainSrv: MainService,
    private router: Router,
    private navCtrl:NavController) { }

  ngOnInit() {
    this.fsArts = this.mainSrv.listArts();

    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('provId')){return;}
      const id = paramMap.get('provId');
      this.mainSrv.listaProv(id).subscribe(prov=>{
        this.fsLoaded = prov;
      })
  
    });

    console.log(this.fsLoaded);
  }

  toProv(){
    this.router.navigate(['home/',this.fsLoaded.pulauId,'/',this.fsLoaded.provId]);
  }

  back(){
    this.navCtrl.back();
  }

}
