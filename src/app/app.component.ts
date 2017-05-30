import { Component } from '@angular/core';
import {HttpService} from './app.service';
import {JsonService} from './app.gener-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HttpService,JsonService]
  
})
export class HttpTestComponent{
  getdata=[];
  values:string;
  title = 'Movie App';
  jsonApi=[];
  newApi=[];


  onKey(event:any){
    this.values=event.target.value;
  }
  constructor(private _httpService:HttpService,private _jsonService:JsonService){this._jsonService.getApi().subscribe(resJson=>{this.jsonApi=resJson.genres});}
 
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
 
 
      
    onScroll(values){
        
         this._httpService.page++;
        console.log(this._httpService.page);
      this._httpService.getHttp(values)
      .subscribe(data=>data.results.forEach((scroll)=>{
           this.getdata.push(scroll);
         })
         //console.log(this.getdata);
        
      
         );
    }   

}

 
