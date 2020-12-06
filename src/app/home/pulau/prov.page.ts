import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../main.service';
import { provinsi, pulau } from '../pulau';

@Component({
  selector: 'app-prov',
  templateUrl: './prov.page.html',
  styleUrls: ['./prov.page.scss'],
})
export class ProvPage implements OnInit {
  loaded:pulau;
  prov:provinsi[];
  pulau:pulau[];
  constructor(
    private activatedRoute:ActivatedRoute,
    private mainSrv:MainService,
    private router:Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('pulauId')){return;}
      const id = paramMap.get('pulauId');
      this.loaded = this.mainSrv.getPulau(id);
      this.prov = this.mainSrv.getAllProv();
      this.pulau = this.mainSrv.getAllPulau();
    });
  }

  movePulau(pulau:pulau){
    this.router.navigate(['home/',pulau.pulauId]);
  }

  toHome(){
    this.router.navigate(['home/']);
  }

}
