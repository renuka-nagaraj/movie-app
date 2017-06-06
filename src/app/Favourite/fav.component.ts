import { Component } from '@angular/core';
import {HttpTestComponent} from '../app.component';
import {expressService} from './fav.service';
@Component({
  selector: 'fav-root',
  templateUrl: './fav.component.html',
   styleUrls: ['./fav.component.css'],
 
  
})
export class FavouriteComponent{
getFavMovie1=[];
jsonApi1=[];
getResults=[];
   constructor(private _expressService:expressService){
         // console.log();
     this._expressService.getFav()
     .subscribe(
       data=> this.getFavMovie1 = data
        // console.log(this._expressService. getFavMovie);
           //  error=>alert(error),
    // ()=>console.log(this._expressService.getFavMovie)
    //console.log("finished"),
   );
   
 }
  getGenre(val){
    let temp=[];
     this.jsonApi1.forEach(function(api){
      // if(api.id==this.val)
      if(val.includes(api.id)){
        
        temp.push(api.name)
        
       }
      });
 return temp;
      
   }
onGetFavourite(val){
  this._expressService.postFav(val)
  .subscribe(data=>
    console.log(val)
  )
}
 onDelete(id){
  id=String(id);
 // console.log(id);
     this._expressService.deleteFav(id)
     .subscribe(data=>{this.getResults=data},()=>
    console.log(id) );
 }

}