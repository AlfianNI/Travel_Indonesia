import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';
import { popular, provinsi, pulau } from '../pulau';

@Component({
  selector: 'app-prov',
  templateUrl: './prov.page.html',
  styleUrls: ['./prov.page.scss'],
})
export class ProvPage implements OnInit {
  loaded: pulau;
  fsLoaded:pulau;
  prov: provinsi[];
  pulau: pulau[];
  private fsPulau:Observable<pulau[]>;
  private fsProv:Observable<provinsi[]>;
  private fsPopular:Observable<popular[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private mainSrv: MainService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fsPulau = this.mainSrv.listPulau();
    this.fsProv = this.mainSrv.listProv();
    this.fsPopular = this.mainSrv.listPopular();
    
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('pulauId')) { return; }
      const id = paramMap.get('pulauId');
      this.mainSrv.listaPulau(id).subscribe(pulau => {
        this.fsLoaded = pulau;
      })
    });

    console.log(this.fsLoaded);
    console.log(this.loaded);

  }

  sliderConfig = {
    spaceBetween: 12,
    slidesPerView: 1.6
  }

  toPulau(pulau:pulau){
    this.router.navigate(['home/',pulau.pulauId]);
  }

  toHome(){
    this.router.navigate(['home/']);
  }
}

