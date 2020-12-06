import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/home/main.service';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.page.html',
  styleUrls: ['./attractions.page.scss'],
})
export class AttractionsPage implements OnInit {

  loaded;
  attraction;
  constructor(private mainSrv:MainService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('provId')){return;}
      const id = paramMap.get('provId');
      this.loaded = this.mainSrv.getProv(id);
      this.attraction = this.mainSrv.getAllAttraction();
  
    });
  }

}
