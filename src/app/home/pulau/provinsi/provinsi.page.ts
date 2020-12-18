import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from '../../main.service';
import { provinsi, pulau } from '../../pulau';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.page.html',
  styleUrls: ['./provinsi.page.scss'],
})
export class ProvinsiPage implements OnInit {
  private fsProv:Observable<provinsi[]>;
  fsLoaded:provinsi;
  loaded;
  constructor(private activatedRoute:ActivatedRoute,
    private mainSrv:MainService, private router:Router) { }

  ngOnInit() {
    this.fsProv = this.mainSrv.listProv();

    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('provId')){return;}
      const id = paramMap.get('provId');
      this.mainSrv.listaProv(id).subscribe(prov=>{
        this.fsLoaded = prov;
      })
  
    });

    console.log(this.fsLoaded)
  }

  sliderConfig = {
    spaceBetween: 12,
    slidesPerView: 1.6
  }

  toPulau(){
    this.router.navigate(['home/',this.fsLoaded.pulauId]);
  }

  moveProv(prov:provinsi){
    this.router.navigate(['home/',prov.pulauId,'/',prov.provId]);
  }

}
