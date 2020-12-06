import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from 'src/app/home/main.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.page.html',
  styleUrls: ['./arts.page.scss'],
})
export class ArtsPage implements OnInit {

  loaded;
  arts;
  constructor(private mainSrv:MainService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('provId')){return;}
      const id = paramMap.get('provId');
      this.loaded = this.mainSrv.getProv(id);
      this.arts = this.mainSrv.getAllArts();
  
    });
  }

}
