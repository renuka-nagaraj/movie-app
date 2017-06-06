import { Injectable,Input} from '@angular/core';
import { Http,Response,RequestOptions,Headers } from '@angular/http';
import {FavouriteComponent} from './fav.component';
import 'rxjs/add/operator/map';


@Injectable()
export class expressService{
   getFavMovie=[];
   
 constructor(private _http:Http){}
   getFav(){
        let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
       let options = new RequestOptions({ headers: headers });
       return this._http.get('http://localhost:3000/api/movies/')
       .map((response:Response)=>response.json());
   }
   postFav(val){
     let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
       let options = new RequestOptions({ headers: headers });
     return this._http.post('http://localhost:3000/api/movies/',val);
   }
   deleteFav(id){
     let headers = new Headers({ 'Content-Type': 'application/json','Access-Control-Allow-Methods':' GET, POST, PATCH, PUT, DELETE, OPTIONS' });
       let options = new RequestOptions({ headers: headers });
     return this._http.delete('http://localhost:3000/api/movies/'+id)
     .map((res)=>res.json());
   }
   
}