export interface pulau {
    id?:any;
    pulauId:string;
    nama:string;
    //provinsi:provinsi[];

}
export interface provinsi{
    pulauId:string;
    provId:string;
    nama:string;
    desc:string;
    //food:food[];
    //attraction:attraction[];
    //arts:arts[];
}
export interface food{
    fId:string;
    provId:string;
    nama:string;
    desc:string;
    loc:loc;
}
export interface attraction{
    aId:string;
    provId:string;
    nama:string;
    desc:string;
}
export interface arts{
    provId:string;
    nama:string;
    desc:string;
}

export interface loc{
lat:number;
lng:number;
}