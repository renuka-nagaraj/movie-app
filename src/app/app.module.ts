import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {InfiniteScrollModule} from 'angular2-infinite-scroll';

import { HttpTestComponent } from './app.component';

@NgModule({
  declarations: [
    HttpTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [HttpTestComponent]
})
export class AppModule { }
