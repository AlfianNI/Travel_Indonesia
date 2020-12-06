import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../main.service';
import { provinsi, pulau } from '../../pulau';

@Component({
  selector: 'app-provinsi',
  templateUrl: './provinsi.page.html',
  styleUrls: ['./provinsi.page.scss'],
})
export class ProvinsiPage implements OnInit {
  loaded:provinsi;
  prov;
  constructor(private activatedRoute:ActivatedRoute,
    private mainSrv:MainService,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('provId')){return;}
      const id = paramMap.get('provId');
      this.loaded = this.mainSrv.getProv(id);
      this.prov = this.mainSrv.getAllProv();
  
    });
  }

  moveProv(prov:any){
    this.router.navigate(['home/',this.loaded.pulauId,prov]);
  }

  toPulau(){
    this.router.navigate(['home/',this.loaded.pulauId]);
  }

}
