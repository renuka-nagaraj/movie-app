import { Component,OnInit} from '@angular/core';
import {HttpService} from './app.service';
import {JsonService} from './app.gener-service';
import {expressService} from './Favourite/fav.service';
import {FavouriteComponent} from './Favourite/fav.component';
import {HttpTestComponent} from './app.component';

@Component({
  selector: 'app-root',
  //templateUrl: './router.html',
  styleUrls: ['./app.component.css'],
 template:`<div class="container  ">
  <nav class="navbar navbar-inverse">
    <div class="container">
      <div class="navbar-header">
     <h1 class="heading">{{title}} Movie App</h1>
     <a routerLink="/app" routerLinkActive="active"><h4>Home</h4></a>
     <a routerLink="/Favourite" ><h4>Add to fav</h4></a>
      </div>
     </div>
</nav>
</div>
   <router-outlet></router-outlet>`
  
})
export class RouterComponent{

  

} 



