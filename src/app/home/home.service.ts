import { Injectable } from '@angular/core';
import { pulau } from '../daerah.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private pulau: pulau[]=[
    {
      idPulau:'1',
      nama:'Java'
    },
    {
      idPulau:'2',
      nama:'Sumatra'
    },
    {
      idPulau:'3',
      nama:'Bali & NTT'
    },
    {
      idPulau:'4',
      nama:'Kalimantan'
    },
    {
      idPulau:'5',
      nama:'Sulawesi'
    },
    {
      idPulau:'6',
      nama:'Papua'
    }
  ];
  constructor() { }

  getAllPulau(){
    return[...this.pulau];
  }

  getPulau(idPulau: String){
    return {...this.pulau.find(pulau =>{
      return pulau.idPulau === idPulau;
    })};
  }
}
