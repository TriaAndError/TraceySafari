import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {AppRoutingModule} from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
=======
import { TrendingComponent } from './trending/trending.component';
>>>>>>> dba5ba5d259c89856eb4cf30939c5c2576164e86

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
<<<<<<< HEAD
    FooterComponent
=======
    FooterComponent,
    TrendingComponent
>>>>>>> dba5ba5d259c89856eb4cf30939c5c2576164e86
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
