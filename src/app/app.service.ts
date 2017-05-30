import { Injectable,Input } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService{
   // private _url:string="https://api.themoviedb.org/3/search/movie?api_key=4d705a790d3eb378dde2fc450222b2c5&language=en-US&query=End&page=1&include_adult=false"
    @Input()
    page=1;
 constructor(private _http:Http){}
   getHttp(search:string){
       return this._http.get('https://api.themoviedb.org/3/search/movie?api_key=4d705a790d3eb378dde2fc450222b2c5&language=en-US&query='+search+'&page='+this.page+'&include_adult=false')
       .map((response:Response)=>response.json());
   }
   
}