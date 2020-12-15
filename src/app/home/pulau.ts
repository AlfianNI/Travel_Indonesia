export interface pulau {
    id?:string;
    pulauId: string
    nama: string;
    imgUrl: string;
    //provinsi:provinsi[];

}
export interface provinsi {
    id?:string;
    pulauId: string;
    provId: string;
    nama: string;
    desc: string;
    imageUrl: string;
    //food:food[];
    //attraction:attraction[];
    //arts:arts[];
}
export interface food {
    id?:string;
    provId: string;
    nama: string;
    desc: string;
    imgUrl:string;
    lat:number;
    lng:number;
    //  imageUrl: string;
}
export interface attraction {
    id?:string;
    provId: string;
    nama: string;
    desc: string;
    imgUrl:string;
    lat:number;
    lng:number;
    //   imageUrl: string;
}
export interface arts {
    id?:string;
    provId: string;
    nama: string;
    desc: string;
    imgUrl:string;
    //  imageUrl: string;
}

export interface loca{
    lat:number;
    lng:number;
}