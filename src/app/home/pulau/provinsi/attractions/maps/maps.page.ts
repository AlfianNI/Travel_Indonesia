import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { MainService } from 'src/app/home/main.service';
import { attraction, loca } from 'src/app/home/pulau';

declare var google:any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  fsLoaded:attraction;
  map:any;
  loca:loca;
  @ViewChild('map',{read:ElementRef,static:false}) mapRef:ElementRef;
  umnPos:loca = {
    lat:5.8911067,
    lng:95.3207733
  };

  constructor(private navCtrl:NavController,private activatedRoute:ActivatedRoute,private mainSrv:MainService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('fId');
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('fId')){return;}
      const id = paramMap.get('fId');
      this.mainSrv.listaFood(id).subscribe(food=>{
        this.fsLoaded = food;
      })
  
    });
  }

  ionViewDidEnter(){
    this.showMap(this.umnPos);
  }

  showMap(pos:any){
    const location = new google.maps.LatLng(pos.lat,pos.lng);
    const options = {
      center:location,
      zoom:20,
      disableDefaultUI:true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement,options);

    //Marker

    const marker = new google.maps.Marker({
      position:this.umnPos,
      map:this.map,
    });
  }


  back(){
    this.navCtrl.back();
  }

}
