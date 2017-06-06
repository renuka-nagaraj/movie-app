import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';
import { RouterModule, Routes } from '@angular/router';
import {FavouriteComponent} from './Favourite/fav.component';
import {RouterComponent} from './router';
//import {expressService} from './Favourite/fav.service';

import { HttpTestComponent } from './app.component';
import {HttpService} from './app.service';
import {JsonService} from './app.gener-service';
import {expressService} from './Favourite/fav.service';


@NgModule({
  declarations: [
    HttpTestComponent,
    FavouriteComponent,
    RouterComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule,
    RouterModule.forRoot([
  {
    path: 'Favourite',
    component:FavouriteComponent
  },
  {
    path:'app',
    component:HttpTestComponent

  }
])
  ],
  providers: [HttpService,JsonService,expressService,FavouriteComponent],
  bootstrap: [RouterComponent]
})
export class AppModule { }
