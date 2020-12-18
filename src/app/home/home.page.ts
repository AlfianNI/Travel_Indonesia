import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from './main.service';
import { pulau } from './pulau';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  pulau:pulau[];
  private fsPulau:Observable<pulau[]>
  constructor(private pulauSrv:MainService) {}

  ngOnInit(){
    this.fsPulau = this.pulauSrv.listPulau();
  }
}
