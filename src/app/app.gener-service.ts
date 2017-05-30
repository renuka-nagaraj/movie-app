import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JsonService{
   // private _url:string="https://api.themoviedb.org/3/search/movie?api_key=4d705a790d3eb378dde2fc450222b2c5&language=en-US&query=End&page=1&include_adult=false"
    
 constructor(private http:Http){}
   getApi(){
       return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4d705a790d3eb378dde2fc450222b2c5&language=en-US')
       .map((response:Response)=>response.json());
   }
}