import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/home/main.service';
import { food } from 'src/app/home/pulau';

declare var google:any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  loaded:food;
  map:any;
  @ViewChild('map',{read:ElementRef,static:false}) mapRef:ElementRef;

  constructor(private mainSrv:MainService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('fId')){return;}
      const id = paramMap.get('fId');
      this.loaded = this.mainSrv.getFoods(id);
    });
  }

  ionViewDidEnter(){
    this.showMap(this.loaded.loc);
  }

  showMap(pos:any){
    const location = new google.maps.LatLng(pos.lat,pos.lng);
    console.log(pos);
    const options = {
      center:location,
      zoom:15,
      disableDefaultUI:true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);
    //Marker
    const marker = new google.maps.Marker({
      position: this.loaded.loc,
      map :this.map
    });
  }

}
