import { Component,OnInit} from '@angular/core';
import {HttpService} from './app.service';
import {JsonService} from './app.gener-service';
import {expressService} from './Favourite/fav.service';
import {FavouriteComponent} from './Favourite/fav.component';
import {RouterComponent} from './router';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
  
})
export class HttpTestComponent{
  getdata=[];
  values:string;
  title = 'Movie App';
  jsonApi=[];
  newApi=[];
  postFavMovie=[];
  id:number;
  


  onKey(event:any){
    this.values=event.target.value;
  }
  constructor(private _httpService:HttpService,private _jsonService:JsonService,private _expressService:expressService,private favcomp : FavouriteComponent){this._jsonService.getApi().subscribe(resJson=>{this.jsonApi=resJson.genres});}
 
  onTestget(values){
    this._httpService.getHttp(values)
    .subscribe(data=>this.getdata=data.results,
    error=>alert(error),
    ()=>console.log("finished"),
   );
  }
  
  getGenre(val){
    let temp=[];
     this.jsonApi.forEach(function(api){
      // if(api.id==this.val)
      if(val.includes(api.id)){
        
        temp.push(api.name)
        
       }
      });
 return temp;
      
   }
 onGetFavourite(){
    // console.log();
     this._expressService.getFav()
     .subscribe(
       data=>{this._expressService.getFavMovie=data;
         console.log(this._expressService. getFavMovie);
       }
    
   );
   
 }

    onScroll(values){
        
         this._httpService.page++;
        //console.log(this._httpService.page);
      this._httpService.getHttp(values)
      .subscribe(data=>data.results.forEach((scroll)=>{
           this.getdata.push(scroll);
         })
         //console.log(this.getdata);
        
      
         );
    }   

}

 
